const files = require.context('./', false, /\.(js|ts)$/)
const utils:any = {}

files.keys().forEach((key) => {
  if (key.replace(/(\.\/|\.js)/g, '') !== 'index') {
    utils[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
  }
})

export default utils;
