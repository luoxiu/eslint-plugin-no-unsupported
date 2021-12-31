/**
 * @fileoverview no unsupported calc
 * @author luoxiu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-unsupported-calc"),
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
ruleTester.run("no-unsupported-calc", rule, {
  valid: [
    `{ width: "100%" }`,
    `{ width: "10px" }`,
  ],

  invalid: [
    {
      code: "{ width: 'calc(100% - 10px)' }",
      errors: [{ 
        messageId: "doesNotSupport",
      }],
    },
    {
      code: "const width = 'calc(100% - 10px)'",
      errors: [{ 
        messageId: "doesNotSupport",
      }],
    },
    {
      code: "const width = `calc(100% - ${inset}px)`",
      errors: [{ 
        messageId: "doesNotSupport",
      }],
    },
  ],
});
