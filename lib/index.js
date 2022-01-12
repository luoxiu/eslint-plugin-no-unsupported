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
      plugins: [
        "no-unsupported"
      ],
      rules: {
        "no-unsupported/rn-style-position": "error",
        "no-unsupported/rn-style-calc": "error",
        "no-unsupported/rn-style-vw-vh": "error",
        "no-unsupported/rn-style-align-self": "error",
        "no-unsupported/rn-style-border-style": "error",
        "no-unsupported/rn-style-cursor": "error",
        "no-unsupported/rn-style-z-index": "error",
        "no-unsupported/rn-style-white-space": "error",
      }
    }
  },
  rules: requireIndex(__dirname + "/rules"),
}
