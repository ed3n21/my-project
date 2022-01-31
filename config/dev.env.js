'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"http://localhost:62542"',
  TOURNAMENTS_API: '"http://localhost:62542/api/tournaments"',
  PARTICIPANTS_API: '"http://localhost:62542/api/participants"'
})
