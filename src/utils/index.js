const files = require.context('./', false, /\.(js|ts)$/)
const utils = {}

files.keys().forEach((key) => {
  if (key.replace(/(\.\/|\.js)/g, '') !== 'index') {
    // @ts-ignore
    utils[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
  }
})

export default utils;
