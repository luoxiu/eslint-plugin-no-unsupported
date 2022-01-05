/**
 * @fileoverview react native
 * @author luoxiu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  configs: {
    "react-native": {
      rules: {
        
      }
    }
  },
  rules: requireIndex(__dirname + "/rules"),
}