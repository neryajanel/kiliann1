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
    "https://kiche.netlify.app/home/lang/mayas/": {
      lang: "Todos los Idiomas Disponibles",
      // title: "jw2",
      // description: "El mejor lugar para Aprender todos los Idiomas Mayas, Xinca y Garifuna",
    },
    "/": {  
      lang: "Mopán", // this will be set as the lang attribute on <html>
      title: "Mopán",
      description: "El mejor lugar para Aprender Mopán gratis",
    },
    "/mayas/mocho/": {  
      lang: "Mochó", // this will be set as the lang attribute on <html>
      title: "Mochó",
      description: "El mejor lugar para Aprender Mochó gratis",
    },
    "/mayas/popti/": {  
      lang: "Jakalteko - Popti", // this will be set as the lang attribute on <html>
      title: "Jakalteko - Popti",
      description: "El mejor lugar para Aprender Jakalteko - Popti gratis",
    },
    "/mayas/poqomam/": {  
      lang: "Poqomam", // this will be set as the lang attribute on <html>
      title: "Poqomam",
      description: "El mejor lugar para Aprender Poqomam gratis",
    },
    "/mayas/poqomchi/": {  
      lang: "poqomchi", // this will be set as the lang attribute on <html>
      title: "poqomchi",
      description: "El mejor lugar para Aprender poqomchi gratis",
    },
    "/mayas/qanjobal/": {  
      lang: "Q'anjob'al", // this will be set as the lang attribute on <html>
      title: "Q'anjob'al",
      description: "El mejor lugar para Aprender Q'anjob'al gratis",
    },
    "/mayas/qeqchi/": {  
      lang: "Qeqchi", // this will be set as the lang attribute on <html>
      title: "Qeqchi",
      description: "El mejor lugar para Aprender Qeqchi gratis",
    },
    "/mayas/sakapulteko/": {  
      lang: "Sakapulteko", // this will be set as the lang attribute on <html>
      title: "Sakapulteko",
      description: "El mejor lugar para Aprender Sakapulteko gratis",
    },
    "/mayas/sipakapense/": {  
      lang: "Sipakapense", // this will be set as the lang attribute on <html>
      title: "Sipakapense",
      description: "El mejor lugar para Aprender Sipakapense gratis",
    },
    "/mayas/tektiteko/": {  
      lang: "Tektiteko", // this will be set as the lang attribute on <html>
      title: "Tektiteko",
      description: "El mejor lugar para Aprender Tektiteko gratis",
    },
    "/mayas/tojolabal/": {  
      lang: "Tojolabal", // this will be set as the lang attribute on <html>
      title: "Tojolabal",
      description: "El mejor lugar para Aprender Tojolabal gratis",
    },
    "/mayas/tzetzal/": {  
      lang: "Tzetzal", // this will be set as the lang attribute on <html>
      title: "Tzetzal",
      description: "El mejor lugar para Aprender Tzetzal gratis",
    },
    "/mayas/tzotzil/": {  
      lang: "Tzotzil", // this will be set as the lang attribute on <html>
      title: "tzTzotzilotzil",
      description: "El mejor lugar para Aprender Tzotzil gratis",
    },
    "/mayas/tzutujil/": {  
      lang: "Tzutujil", // this will be set as the lang attribute on <html>
      title: "Tzutujil",
      description: "El mejor lugar para Aprender Tzutujil gratis",
    },
    "/mayas/uspanteko/": {  
      lang: "Uspanteko", // this will be set as the lang attribute on <html>
      title: "Uspanteko",
      description: "El mejor lugar para Aprender Uspanteko gratis",
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
        label: "Mopán",
        selectText: "Mopán",
        nav: require("./nav/mopan"),
        sidebar: {
          "/mopan": [
            /* ... */
          ],
          "/mopan/guide/": [
            /* ... */
          ],
        },
      },  
      "/mayas/mocho/": {
        label: "Mochó",
        selectText: "Mochó",
        nav: require("./nav/mocho"),
        sidebar: {
          "/mayas/mocho": [
            /* ... */
          ],
          "/mayas/mocho/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/popti/": {
        label: "Jakalteko - Popti",
        selectText: "Jakalteko - Popti",
        nav: require("./nav/popti"),
        sidebar: {
          "/mayas/popti": [
            /* ... */
          ],
          "/mayas/popti/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/poqomam/": {
        label: "Poqomam",
        selectText: "Poqomam",
        nav: require("./nav/poqomam"),
        sidebar: {
          "/mayas/poqomam": [
            /* ... */
          ],
          "/mayas/poqomam/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/poqomchi/": {
        label: "Poqomchi",
        selectText: "Poqomchi",
        nav: require("./nav/poqomchi"),
        sidebar: {
          "/mayas/poqomchi": [
            /* ... */
          ],
          "/mayas/poqomchi/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/qanjobal/": {
        label: "Qanjobal",
        selectText: "Qanjobal",
        nav: require("./nav/qanjobal"),
        sidebar: {
          "/mayas/qanjobal": [
            /* ... */
          ],
          "/mayas/qanjobal/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/qeqchi/": {
        label: "Qeqchi",
        selectText: "Qeqchi",
        nav: require("./nav/qeqchi"),
        sidebar: {
          "/mayas/qeqchi": [
            /* ... */
          ],
          "/mayas/qeqchi/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/sakapulteko/": {
        label: "Sakapulteko",
        selectText: "Sakapulteko",
        nav: require("./nav/sakapulteko"),
        sidebar: {
          "/mayas/sakapulteko": [
            /* ... */
          ],
          "/mayas/sakapulteko/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/sipakapense/": {
        label: "Sipakapense",
        selectText: "Sipakapense",
        nav: require("./nav/sipakapense"),
        sidebar: {
          "/mayas/sipakapense": [
            /* ... */
          ],
          "/mayas/sipakapense/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/tektiteko/": {
        label: "Tektiteko",
        selectText: "Tektiteko",
        nav: require("./nav/tektiteko"),
        sidebar: {
          "/mayas/tektiteko": [
            /* ... */
          ],
          "/mayas/tektiteko/guide/": [
            /* ... */
          ],
        },
      "/mayas/tojolabal/": {
        label: "Tojolabal",
        selectText: "Tojolabal",
        nav: require("./nav/tojolabal"),
        sidebar: {
          "/mayas/tojolabal": [
            /* ... */
          ],
          "/mayas/tojolabal/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/tzetzal/": {
        label: "Tzetzal",
        selectText: "Tzetzal",
        nav: require("./nav/tzetzal"),
        sidebar: {
          "/mayas/tzetzal": [
            /* ... */
          ],
          "/mayas/tzetzal/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/tzotzil/": {
        label: "Tzotzil",
        selectText: "Tzotzil",
        nav: require("./nav/tzotzil"),
        sidebar: {
          "/mayas/tzotzil": [
            /* ... */
          ],
          "/mayas/tzotzil/guide/": [
            /* ... */
          ],
        },
      },
      "/mayas/tzutujil/": {
        label: "Tzutujil",
        selectText: "Tzutujil",
        nav: require("./nav/tzutujil"),
        sidebar: {
          "/mayas/tzutujil": [
            /* ... */
          ],
          "/mayas/tzutujil/guide/": [
            /* ... */
          ],
        },
      },  
      "/mayas/uspanteko/": {
        label: "Uspanteko",
        selectText: "Uspanteko",
        nav: require("./nav/uspanteko"),
        sidebar: {
          "/mayas/uspanteko": [
            /* ... */
          ],
          "/mayas/uspanteko/guide/": [
            /* ... */
          ],
        },
      },
    },
  },
}
}
