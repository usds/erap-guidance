// Paths
//
var build = "_site";

module.exports = {
  browsers: ["> 2%", "Last 2 versions", "IE 11"],
  // BrowserSync
  browsersync: {
    development: {
      server: {
        baseDir: [build]
      },
      port: 8080,
      notify: false
    }
  },

  // Watch source files
  watch: {
    jekyll: [
      "_config.yml",
      "_data/*.yml",
      "_includes/**/*.html",
      "_hr-tasks/*.md",
      "_sme-tasks/*.md",
      "assets/img/*.{png,jpg,svg}",
      "assets/js/*.js",
      "_layouts/*.html",
      "toolkit/**/*.{html,markdown,md,yml,json,txt,pptx}",
      "pages/**/*.{html,markdown,md,yml,json,txt,xml}",
      "index.html",
      "_faqs/*.{html,md}",
      "_data/*.{json,csv}"
    ],
    styles: [
      "_scss/*.scss",
      "_scss/components/*.scss",
      "_scss/layouts/*.scss"
    ]
  },

  jekyll: {
    development: {
      config: "_config.yml,_config-dev.yml"
    }
  }
};
