const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      components: path.resolve(__dirname, 'src', 'app', 'components'),
      routes: path.resolve(__dirname, 'src', 'app', 'routes'),
      screens: path.resolve(__dirname, 'src', 'app', 'screens'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      configs: path.resolve(__dirname, 'src', 'configs'),
      forms: path.resolve(__dirname, 'src', 'core', 'forms'),
      hooks: path.resolve(__dirname, 'src', 'core', 'hooks'),
      interfaces: path.resolve(__dirname, 'src', 'core', 'interfaces'),
      services: path.resolve(__dirname, 'src', 'core', 'services'),
      api: path.resolve(__dirname, 'src', 'core', 'services', 'api'),
      store: path.resolve(__dirname, 'src', 'core', 'store'),
      sagas: path.resolve(__dirname, 'src', 'core', 'store', 'sagas'),
      slices: path.resolve(__dirname, 'src', 'core', 'store', 'slices'),
      utils: path.resolve(__dirname, 'src', 'utils'),
    },
  };

  return config;
};
