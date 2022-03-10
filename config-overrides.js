const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    'Router': 'src/router',
    'Modules' : 'src/modules',
    'Styles': 'src/styles',
    'Pages': 'src/pages',
    'Services' : 'src/services',
    'Layouts': 'src/layouts',
    'Components': 'src/components',
    'Localization' : 'src/localization',
    'Assets': 'src/assets',
    'Util': 'src/util'
  })(config)

  return config
}