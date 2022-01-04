/**
 * @fileoverview style-border-style
 * @author luoxiu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../../lib/rules/react-native/style-border-style"),
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
ruleTester.run("react-native/style-border-style", rule, {
  valid: [
    "const a = { borderStyle: 'solid' }",
    "const a = { 'borderStyle': 'solid' }",
    "const a = { borderStyle: `solid` }",
    "const a = { borderStyle: 'xq.jin' }",
    "const a = { borderStyle: 'solid dotted dashed' }",
  ],

  invalid: [
    {
      code: "const a = { borderStyle: 'none' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { 'borderStyle': 'none' }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const a = { borderStyle: `none` }",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const v = <button style={{ borderStyle: 'none' }} />",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const v = <button style={{ borderStyle: 'none solid' }} />",
      errors: [{ messageId: "doesNotSupport" }],
    },
    {
      code: "const v = <button style={{ borderStyle: 'none hidden' }} />",
      errors: [{ messageId: "doesNotSupport" }],
    },
  ],
});
