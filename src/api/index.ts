const files = require.context('./', false, /\.js$/)
const api:any = {}

files.keys().forEach((key) => {
  if (key.replace(/(\.\/|\.js)/g, '') !== 'index') {
    api[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
  }
})

export default api;
