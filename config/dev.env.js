'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"https://localhost:44342/"',
  TOURNAMENTS_API: '"https://localhost:44342/api/tournaments"',
  PARTICIPANTS_API: '"https://localhost:44342/api/participants"',
  LOGIN_API: '"https://localhost:44342/api/account/authenticate"',

  ROOT_API_V8: '"http://localhost:62542"',
  TOURNAMENTS_API_V8: '"http://localhost:62542/api/tournaments"',
  PARTICIPANTS_API_V8: '"http://localhost:62542/api/participants"'
})