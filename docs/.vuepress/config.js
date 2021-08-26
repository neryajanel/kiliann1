const { description } = require("../../package");

module.exports = {
  plugins: [
    ["@vuepress/back-to-top", true],
    ["@vuepress/medium-zoom", true],
    [
      "@vuepress/pwa", {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  locales: {
    "https://kiche.netlify.app/home/lang/all_lang/": {
      lang: "Todos los Idiomas Disponibles",
      // title: "jw2",
      // description: "El mejor lugar para Aprender todos los Idiomas gt, Xinca y Garifuna",
    },
    "/": {  
      lang: "Pipil", // this will be set as the lang attribute on <html>
      title: "Pipil",
      description: "El mejor lugar para Aprender Pipil gratis",
    },
    "/gt/mop/": {  
      lang: "Mopán", // this will be set as the lang attribute on <html>
      title: "Mopán",
      description: "El mejor lugar para Aprender Mopán gratis",
    },
    "/gt/qum/": {  
      lang: "Sipakapense", // this will be set as the lang attribute on <html>
      title: "Sipakapense",
      description: "El mejor lugar para Aprender Sipakapense gratis",
    },
    "/gt/quv/": {  
      lang: "Sakapulteko", // this will be set as the lang attribute on <html>
      title: "Sakapulteko",
      description: "El mejor lugar para Aprender Sakapulteko gratis",
    },
    "/gt/ttc/": {  
      lang: "Tektiteko", // this will be set as the lang attribute on <html>
      title: "Tektiteko",
      description: "El mejor lugar para Aprender Tektiteko gratis",
    },
    "/gt/tzj/": {  
      lang: "Tzutujil", // this will be set as the lang attribute on <html>
      title: "Tzutujil",
      description: "El mejor lugar para Aprender Tzutujil gratis",
    },
    "/gt/usp/": {  
      lang: "Uspanteko", // this will be set as the lang attribute on <html>
      title: "Uspanteko",
      description: "El mejor lugar para Aprender Uspanteko gratis",
    },
    "/cr/bocota/": {  
      lang: "Bocotá", // this will be set as the lang attribute on <html>
      title: "Bocotá",
      description: "El mejor lugar para Aprender Bocotá gratis",
    },
    "/cr/bribri/": {  
      lang: "Bribri", // this will be set as the lang attribute on <html>
      title: "Bribri",
      description: "El mejor lugar para Aprender Bribri gratis",
    },
    "/cr/cabecar/": {  
      lang: "Cabecar", // this will be set as the lang attribute on <html>
      title: "Cabecar",
      description: "El mejor lugar para Aprender Cabecar gratis",
    },
    "/cr/guaymi/": {  
      lang: "Guaymi", // this will be set as the lang attribute on <html>
      title: "Guaymi",
      description: "El mejor lugar para Aprender Guaymi gratis",
    },
    "/cr/malecu/": {  
      lang: "Malecu", // this will be set as the lang attribute on <html>
      title: "Malecu",
      description: "El mejor lugar para Aprender Malecu gratis",
    },
    "/hn/lenca/": {  
      lang: "Lenca", // this will be set as the lang attribute on <html>
      title: "Lenca",
      description: "El mejor lugar para Aprender Lenca gratis",
    },
    "/hn/misquito/": {  
      lang: "Misquito", // this will be set as the lang attribute on <html>
      title: "Misquito",
      description: "El mejor lugar para Aprender Misquito gratis",
    },
    "/hn/pechi/": {  
      lang: "Pech", // this will be set as the lang attribute on <html>
      title: "Pech",
      description: "El mejor lugar para Aprender Pech gratis",
    },
    "/hn/tawhaka/": {  
      lang: "Tawhaka", // this will be set as the lang attribute on <html>
      title: "Tawhaka",
      description: "El mejor lugar para Aprender Tawhaka gratis",
    },
    "/hn/tol/": {  
      lang: "Tol", // this will be set as the lang attribute on <html>
      title: "Tol",
      description: "El mejor lugar para Aprender Tol gratis",
    },
    "/ni/mayangna/": {  
      lang: "Mayangna", // this will be set as the lang attribute on <html>
      title: "Mayangna",
      description: "El mejor lugar para Aprender Mayangna gratis",
    },
    "/ni/rama/": {  
      lang: "Rama", // this will be set as the lang attribute on <html>
      title: "Rama",
      description: "El mejor lugar para Aprender Rama gratis",
    },
    "/ni/ulwa/": {  
      lang: "Ulwa", // this will be set as the lang attribute on <html>
      title: "Ulwa",
      description: "El mejor lugar para Aprender Ulwa gratis",
    },
  },

  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],

  themeConfig: {
    locales: {     
      "/": {
        label: "Pipil",
        selectText: "Pipil",
        nav: require("./nav/pipil"),
        sidebar: {
          "/pipil": [
            /* ... */
          ],
          "/pipil/guide/": [
            /* ... */
          ],
        },
      },
      "/gt/mop/": {
        label: "Mopán",
        selectText: "Mopán",
        nav: require("./nav/mop"),
        sidebar: {
          "/gt/mop": [
            /* ... */
          ],
          "/gt/mop/guide/": [
            /* ... */
          ],
        },
      },  
      "/gt/qum/": {
        label: "Sipakapense",
        selectText: "Sipakapense",
        nav: require("./nav/qum"),
        sidebar: {
          "/gt/qum": [
            /* ... */
          ],
          "/gt/qum/guide/": [
            /* ... */
          ],
        },
      },
      "/gt/quv/": {
        label: "Sakapulteko",
        selectText: "Sakapulteko",
        nav: require("./nav/quv"),
        sidebar: {
          "/gt/quv": [
            /* ... */
          ],
          "/gt/quv/guide/": [
            /* ... */
          ],
        },
      },
      "/gt/ttc/": {
        label: "Tektiteko",
        selectText: "Tektiteko",
        nav: require("./nav/ttc"),
        sidebar: {
          "/gt/ttc": [
            /* ... */
          ],
          "/gt/ttc/guide/": [
            /* ... */
          ],
        },
      },
      "/gt/tzj/": {
        label: "Tzutujil",
        selectText: "Tzutujil",
        nav: require("./nav/tzj"),
        sidebar: {
          "/gt/tzj": [
            /* ... */
          ],
          "/gt/tzj/guide/": [
            /* ... */
          ],
        },
      },  
      "/gt/usp/": {
        label: "Uspanteko",
        selectText: "Uspanteko",
        nav: require("./nav/usp"),
        sidebar: {
          "/gt/usp": [
            /* ... */
          ],
          "/gt/usp/guide/": [
            /* ... */
          ],
        },
      },
      "/cr/bocota/": {
        label: "Bocotá",
        selectText: "Bocotá",
        nav: require("./nav/bocota"),
        sidebar: {
          "/cr/bocota": [
            /* ... */
          ],
          "/cr/bocota/guide/": [
            /* ... */
          ],
        },
      },
      "/cr/bribri/": {
        label: "Bribri",
        selectText: "Bribri",
        nav: require("./nav/bribri"),
        sidebar: {
          "/cr/bribri": [
            /* ... */
          ],
          "/cr/bribri/guide/": [
            /* ... */
          ],
        },
      },
      "/cr/cabecar/": {
        label: "Cabecar",
        selectText: "Cabecar",
        nav: require("./nav/cabecar"),
        sidebar: {
          "/cr/cabecar": [
            /* ... */
          ],
          "/cr/cabecar/guide/": [
            /* ... */
          ],
        },
      },
      "/cr/guaymi/": {
        label: "Guaymi",
        selectText: "Guaymi",
        nav: require("./nav/guaymi"),
        sidebar: {
          "/cr/guaymi": [
            /* ... */
          ],
          "/cr/guaymi/guide/": [
            /* ... */
          ],
        },
      },
      "/cr/malecu/": {
        label: "Malecu",
        selectText: "Malecu",
        nav: require("./nav/malecu"),
        sidebar: {
          "/cr/malecu": [
            /* ... */
          ],
          "/cr/malecu/guide/": [
            /* ... */
          ],
        },
      },
      "/hn/lenca/": {
        label: "Lenca",
        selectText: "Lenca",
        nav: require("./nav/lenca"),
        sidebar: {
          "/hn/lenca": [
            /* ... */
          ],
          "/hn/lenca/guide/": [
            /* ... */
          ],
        },
      },
      "/hn/misquito/": {
        label: "Misquito",
        selectText: "Misquito",
        nav: require("./nav/misquito"),
        sidebar: {
          "/hn/misquito": [
            /* ... */
          ],
          "/hn/misquito/guide/": [
            /* ... */
          ],
        },
      },
      "/hn/pechi/": {
        label: "Pech",
        selectText: "Pech",
        nav: require("./nav/pechi"),
        sidebar: {
          "/hn/pechi": [
            /* ... */
          ],
          "/hn/pechi/guide/": [
            /* ... */
          ],
        },
      },
      "/hn/tawhaka/": {
        label: "Tawhaka",
        selectText: "Tawhaka",
        nav: require("./nav/tawhaka"),
        sidebar: {
          "/hn/tawhaka": [
            /* ... */
          ],
          "/hn/tawhaka/guide/": [
            /* ... */
          ],
        },
      },
      "/hn/tol/": {
        label: "Tol",
        selectText: "Tol",
        nav: require("./nav/tol"),
        sidebar: {
          "/hn/tol": [
            /* ...*/
          ],
          "/hn/tol/guide/": [
            /* ... */
          ],
        },
      },
      "/ni/mayangna/": {
        label: "Mayangna",
        selectText: "Mayangna",
        nav: require("./nav/mayangna"),
        sidebar: {
          "/ni/mayangna": [
            /* ... */
          ],
          "/ni/mayangna/guide/": [
            /* ... */
          ],
        },
      },
      "/ni/rama/": {
        label: "Rama",
        selectText: "Rama",
        nav: require("./nav/rama"),
        sidebar: {
          "/ni/rama": [
            /* ... */
          ],
          "/ni/rama/guide/": [
            /* ... */
          ],
        },
      },
      "/ni/ulwa/": {
        label: "Ulwa",
        selectText: "Ulwa",
        nav: require("./nav/ulwa"),
        sidebar: {
          "/ni/ulwa": [
            /* ... */
          ],
          "/ni/ulwa/guide/": [
            /* ... */
          ],
        },
      },
    },
  },
}
