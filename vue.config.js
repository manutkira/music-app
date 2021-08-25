module.exports = {
  css: { extract: false },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
    },
  },
  pwa: {
    name: 'ManutMusic',
    themeColor: '#ff5e3a',
    manifestOptions: {
      short_name: 'MM',

    },
  },
};
