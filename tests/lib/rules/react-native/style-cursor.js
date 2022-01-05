/**
 * @fileoverview style-cursor
 * @author luoxiu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../../lib/rules/react-native/style-cursor"),
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
ruleTester.run("react-native/style-cursor", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const a = { cursor: 'xq.jin' }",
  ],

  invalid: [
    {
      code: "const a = { cursor: 'help' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { cursor: 'url(x.png), help' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { cursor: 'url(x.png) 1 1, help' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { cursor: 'url(x.png) 1 1, url(x.png) 1 1, help' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "<Button style={{ cursor: 'help' }} />",
      errors: [{ 
        messageId: "doesNotSupport",
      }],
    },
  ],
});
