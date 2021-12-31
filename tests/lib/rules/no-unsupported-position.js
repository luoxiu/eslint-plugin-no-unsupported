/**
 * @fileoverview no unsupported position
 * @author luoxiu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-unsupported-position"),
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
ruleTester.run("no-unsupported-position", rule, {
  valid: [
    "const a = { position: 'absolute' }",
    "const a = { 'position': 'absolute' }",
    "const a = { position: `absolute` }",
    "const a = { position: 'xq.jin' }",
  ],

  invalid: [
    {
      code: "const a = { position: 'fixed' }",
      errors: [{ messageId: "onlySupports" }],
    },
    {
      code: "const a = { 'position': 'fixed' }",
      errors: [{ messageId: "onlySupports" }],
    },
    {
      code: "const a = { position: `sticky` }",
      errors: [{ messageId: "onlySupports" }],
    },
    {
      code: "const v = <button style={{ position: 'fixed' }} />",
      errors: [{ messageId: "onlySupports" }],
    },
  ],
});
