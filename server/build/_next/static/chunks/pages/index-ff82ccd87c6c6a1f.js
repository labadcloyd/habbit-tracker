(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7913:function(e,r,n){"use strict";var t=n(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(2199),c=n(1587),s=n(7215);var i={};function l(e,r,n,t){if(e&&u.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;i[r+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var r=u.resolveHref(o,e.href,!0),n=t(r,2),a=n[0],c=n[1];return{href:a,as:e.as?u.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),p=f.href,d=f.as,_=a.default.useRef(p),h=a.default.useRef(d),v=e.children,m=e.replace,g=e.shallow,b=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var k=(r=a.default.Children.only(v))&&"object"===typeof r&&r.ref,x=s.useIntersection({rootMargin:"200px"}),j=t(x,3),w=j[0],C=j[1],E=j[2],H=a.default.useCallback((function(e){h.current===d&&_.current===p||(E(),h.current=d,_.current=p),w(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[d,k,p,E,w]);a.default.useEffect((function(){var e=C&&n&&u.isLocalURL(p),r="undefined"!==typeof y?y:o&&o.locale,t=i[p+"%"+d+(r?"%"+r:"")];e&&!t&&l(o,p,d,{locale:r})}),[d,p,C,y,n,o]);var N={ref:H,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,c,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),r[o?"replace":"push"](n,t,{shallow:a,locale:s,scroll:c}))}(e,o,p,d,m,g,b,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u.isLocalURL(p)&&l(o,p,d,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var R="undefined"!==typeof y?y:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(d,R,o&&o.locales,o&&o.domainLocales);N.href=M||u.addBasePath(u.addLocale(d,R,o&&o.defaultLocale))}return a.default.cloneElement(r,N)};r.default=f,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},7215:function(e,r,n){"use strict";var t=n(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,i=e.disabled||!u,l=o.useRef(),f=o.useState(!1),p=t(f,2),d=p[0],_=p[1],h=o.useState(r?r.current:null),v=t(h,2),m=v[0],g=v[1],b=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),i||d||e&&e.tagName&&(l.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=c.get(t):(r=c.get(n),s.push(n));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(n,r={id:n,observer:a,elements:o}),r}(n),o=t.id,a=t.observer,u=t.elements;return u.set(e,r),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),c.delete(o);var r=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&s.splice(r,1)}}}(e,(function(e){return e&&_(e)}),{root:m,rootMargin:n}))}),[i,m,n,d]),y=o.useCallback((function(){_(!1)}),[]);return o.useEffect((function(){if(!u&&!d){var e=a.requestIdleCallback((function(){return _(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&g(r.current)}),[r]),[b,d,y]};var o=n(7294),a=n(8065),u="undefined"!==typeof IntersectionObserver;var c=new Map,s=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},8265:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var t=n(29),o=n(7794),a=n.n(o),u=n(1664),c=n.n(u),s=n(7160),i=n.n(s),l=n(712),f=n(1163),p=n(3404),d=n(8746),_=n(5893);function h(){var e=(0,f.useRouter)();function r(){return(r=(0,t.Z)(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,d.f$)();case 2:return r.next=4,(0,p.Y1)();case 4:return r.next=6,e.push("/dashboard");case 6:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return(0,_.jsx)("div",{className:i().pageWrapper,children:(0,_.jsxs)("div",{className:i().pageContainer,children:[(0,_.jsxs)("div",{className:i().headerWrapper,children:[(0,_.jsx)("h1",{children:"Build up Your Habits"}),(0,_.jsxs)("div",{className:i().buttonWrapper,children:[(0,_.jsx)("a",{onClick:function(){return r.apply(this,arguments)},children:" Demo "}),(0,_.jsx)(c(),{href:"/auth",passHref:!0,children:" Sign in / Sign up "})]})]}),(0,_.jsxs)("div",{className:i().mockupWrapper,children:[(0,_.jsx)("div",{className:i().mockupContainer,children:(0,_.jsx)(l.Fo,{})}),(0,_.jsx)("div",{className:i().mockupShadow})]}),(0,_.jsx)("div",{className:i().footer,children:(0,_.jsxs)("h6",{children:["Designed and developed by:",(0,_.jsx)("a",{href:"https://github.com/labadcloyd",target:"_blank",children:" Cloyd Abad"})]})})]})})}},8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8265)}])},7160:function(e){e.exports={pageWrapper:"Home_pageWrapper__hYdPM",pageContainer:"Home_pageContainer__wDxoE",headerWrapper:"Home_headerWrapper__snn3z",buttonWrapper:"Home_buttonWrapper__PAlwI",mockupWrapper:"Home_mockupWrapper___duBr",mockupContainer:"Home_mockupContainer__kNeYP","slide-top":"Home_slide-top__guXUc",mockupShadow:"Home_mockupShadow__VQwRm",enlarge:"Home_enlarge__c2HZJ",footer:"Home_footer____T7K",enlargeRes:"Home_enlargeRes__Zdf0R"}},1664:function(e,r,n){e.exports=n(7913)}},function(e){e.O(0,[885,75,260,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);