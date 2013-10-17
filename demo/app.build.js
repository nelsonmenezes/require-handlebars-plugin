({
    appDir: "./",
    baseUrl: "./",
    dir: "../demo-build",

    optimizeCss: "standard",
    // optimize: "none",
    // inlining ftw
    inlineText: true,

    pragmasOnSave: {
        hbsExcludeAfterBuild: true
    },

    paths: {
      "hbs"                : "../hbs",
      "handlebars"         : "../hbs/handlebars",
      "handlebars.runtime" : "../hbs/handlebars.runtime"
    },

    locale: "en_ca",

    // default plugin settings, listing here just as a reference
    hbs : {
        templateExtension : 'hbs',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n : false
    },

    modules: [
        {
            name: "main"
        }
    ]
})
