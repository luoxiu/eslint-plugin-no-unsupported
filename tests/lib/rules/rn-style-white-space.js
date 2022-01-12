/**
 * @fileoverview rn-style-white-space
 * @author luoxiu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/rn-style-white-space"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run("rn-style-white-space", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const a = { whiteSpace: 0 }",
  ],

  invalid: [
    {
      code: "const a = { whiteSpace: 'normal' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { whiteSpace: 'pre-line' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "<Button style={{ whiteSpace: 'pre-line' }} />",
      errors: [{ 
        messageId: "doesNotSupport",
      }],
    },
  ],
});
