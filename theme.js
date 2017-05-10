/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Liberty-flat theme for the Livre-HTML engine.
 * Part of the Livre project.
 */

'use strict';

const templates = require'./lib/templates.js';

function makeHeader(options) {
  var user = options && options.user ? options.user : null;
  return templates.header(user);
}

module.exports = {
  makeHeader: makeHeader
};
