const middleware = {}

middleware['auth-admin'] = require('../middleware/auth-admin.js')
middleware['auth-admin'] = middleware['auth-admin'].default || middleware['auth-admin']

middleware['auth-login'] = require('../middleware/auth-login.js')
middleware['auth-login'] = middleware['auth-login'].default || middleware['auth-login']

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

export default middleware
