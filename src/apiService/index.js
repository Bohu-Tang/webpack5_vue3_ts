const files = require.context('./', false, /\.js$/)
const apiService = {}

files.keys().forEach((key) => {
  if (key.replace(/(\.\/|\.js)/g, '') !== 'index') {
    apiService[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
  }
})

export default apiService;
