const execSync = require('child_process').execSync
const VERSION = require('../package.json').version
const GIT_COMMIT = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '')

const ghpages = require('gh-pages')
execSync('npm run build:docs')
ghpages.publish('dist', {
  user: {
    name: 'BolinWang',
    email: '454949876@qq.com'
  },
  repo: 'https://github.com/BolinWang/vue-ui-doc.git',
  message: `[deploy] ${GIT_COMMIT} - [release] ${VERSION}`
})
