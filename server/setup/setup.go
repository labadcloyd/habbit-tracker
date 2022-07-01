package setup

import (
	"database/sql"
	"habit-tracker/helpers"
	"habit-tracker/models"
	"log"
	"net/http"
	"strconv"
	"testing"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

var DB *sql.DB
var SecretKey = helpers.GoDotEnvVariable("SECRET_KEY")

func SetupApp(db *sql.DB) *fiber.App {
	DB = db
	app := fiber.New(fiber.Config{
		ErrorHandler: func(ctx *fiber.Ctx, err error) error {
			code := fiber.StatusInternalServerError
			if e, ok := err.(*fiber.Error); ok {
				code = e.Code
			}
			// Send custom error page
			err = ctx.Status(code).SendFile("./build/notfound.html")
			if err != nil {
				// In case the SendFile fails
				return ctx.Status(fiber.StatusInternalServerError).SendString("Internal Server Error")
			}
			// Return from handler
			return nil
		},
	})

	// allowing clients from different urls to access server
	// it is very important that we use the cors config first before-
	// declaring any routes
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	return app
}

func ConnectDB() *sql.DB {
	connStr := helpers.GoDotEnvVariable("POSTGRES_URL")
	var err error
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	db.SetConnMaxIdleTime(time.Minute * 2)
	pingErr := db.Ping()
	if pingErr != nil {
		log.Fatal(pingErr)
	}
	log.Println("Connected!")
	return db
}

// TEST VARS
func MockSetupApp() (*sql.DB, *fiber.App) {
	db := MockConnectDB()
	app := fiber.New(fiber.Config{
		ErrorHandler: func(ctx *fiber.Ctx, err error) error {
			code := fiber.StatusInternalServerError
			if e, ok := err.(*fiber.Error); ok {
				code = e.Code
			}
			// Send custom error page
			err = ctx.Status(code).SendFile("./build/notfound.html")
			if err != nil {
				// In case the SendFile fails
				return ctx.Status(fiber.StatusInternalServerError).SendString("Internal Server Error")
			}
			// Return from handler
			return nil
		},
	})

	// allowing clients from different urls to access server
	// it is very important that we use the cors config first before-
	// declaring any routes
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	return db, app
}

func MockConnectDB() *sql.DB {
	connStr := "postgresql://postgres:password@127.0.0.1:5432/test?sslmode=disable"
	var err error
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	db.SetConnMaxIdleTime(time.Minute * 2)
	pingErr := db.Ping()
	if pingErr != nil {
		log.Fatal(pingErr)
	}
	log.Println("Connected!")
	return db
}

func SetupMockDB(db *sql.DB, t *testing.T) error {
	_, err := db.Exec(`
		CREATE TABLE users (
				id                      SERIAL PRIMARY KEY,
				username                VARCHAR(100) UNIQUE,
				password                VARCHAR(1000)
		);
		CREATE TABLE habit_lists (
				id                      SERIAL PRIMARY KEY,
				owner_id                INT,
				habit_name              VARCHAR(100),
				icon_url                TEXT,
				color                   VARCHAR(30),
				default_repeat_count    INT,
				FOREIGN KEY(owner_id)   REFERENCES users(id) ON DELETE CASCADE
		);
		CREATE TABLE habits (
				id                          SERIAL PRIMARY KEY,
				owner_id                    INT,
				habit_list_id               INT,
				habit_name                  VARCHAR(100),
				date_created                DATE,
				comment                     TEXT,
				target_repeat_count         INT,
				repeat_count                INT,
				FOREIGN KEY(owner_id)       REFERENCES users(id) ON DELETE CASCADE,
				FOREIGN KEY(habit_list_id)  REFERENCES habit_lists(id) ON DELETE CASCADE ON UPDATE CASCADE
		); `)
	if err != nil {
		t.Fatalf("an error '%s' was not expected when setting up the db tables", err)
	}
	return nil
}

func ClearMockDB(db *sql.DB, t *testing.T) error {
	_, err := db.Exec(`DROP TABLE users; DROP TABLE habit_lists; DROP TABLE habits;`)
	if err != nil {
		t.Fatalf("an error '%s' was not expected when setting up the db tables", err)
	}
	return nil
}

func SetupMockAccount(db *sql.DB) (*http.Cookie, error) {
	var user = models.User{}
	password, _ := bcrypt.GenerateFromPassword([]byte("vErYSeCuRePaSsWoRd123!"), 10)
	user = models.User{
		Username: "demo",
		Password: password,
	}
	// saving user
	row2 := db.
		QueryRow("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id", user.Username, user.Password)
	// scanning and returning error
	if err := row2.Scan(&user.ID); err != nil {
		log.Println("Error: ", err.Error())
		return nil, err
	}
	// generating jwt token
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.RegisteredClaims{
		Issuer:    strconv.Itoa(int(user.ID)),
		ExpiresAt: jwt.NewNumericDate(time.Now().AddDate(0, 1, 0)),
	})
	token, err := claims.SignedString([]byte(SecretKey))
	if err != nil {
		return nil, err
	}

	// saving jwt to cookie
	cookie := http.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().AddDate(0, 1, 0),
		HttpOnly: true,
		SameSite: 1,
		Secure:   true,
	}
	log.Println("Successfully logged demo user in")
	return &cookie, nil
}
