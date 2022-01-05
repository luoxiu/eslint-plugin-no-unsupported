/**
 * @fileoverview style-z-index
 * @author luoxiu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../../lib/rules/react-native/style-z-index"),
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
ruleTester.run("style-z-index", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const a = { zIndex: 10 }",
    "const a = { zIndex: -10 }",
    "const a = { zIndex: 10.1 }",
    "const a = { zIndex: 'xq.jin' }",
  ],

  invalid: [
    {
      code: "const a = { zIndex: '10' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { zIndex: '-10' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { zIndex: '10.1' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "<Button style={{ zIndex: '10' }} />",
      errors: [{ 
        messageId: "doesNotSupport",
      }],
    },
  ],
});
