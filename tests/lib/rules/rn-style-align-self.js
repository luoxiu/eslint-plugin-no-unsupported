/**
 * @fileoverview style-align-self
 * @author luoxiu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/rn-style-align-self"),
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
ruleTester.run("react-native/style-align-self", rule, {
  valid: [
    "const a = { alignSelf: 'flex-start' }",
    "const a = { 'alignSelf': 'flex-start' }",
    "const a = { alignSelf: `flex-start` }",
    "const a = { alignSelf: 'xq.jin' }",
    "const a = { alignSelf: 1 }",
  ],

  invalid: [
    {
      code: "const a = { alignSelf: 'start' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { 'alignSelf': 'start' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { alignSelf: `self-start` }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const v = <button style={{ alignSelf: 'self-start' }} />",
      errors: [{ messageId: "doesNotSupport" }],
    },
  ],
});
