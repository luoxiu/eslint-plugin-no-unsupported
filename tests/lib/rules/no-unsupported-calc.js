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
    "const style = { width: '100%' }",
    "style.width = `100%`",
    "const width = '${inset}px'",
    "<Button style={{ width: '100%' }} />",
  ],

  invalid: [
    {
      code: "const style = { width: 'calc(100% - 10px)' }",
      errors: [{ 
        messageId: "doesNotSupport",
      }],
    },
    {
      code: "style.width = 'calc(100% - 10px)'",
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
    {
      code: "<Button style={{ width: 'calc(100% - 10px)' }} />",
      errors: [{ 
        messageId: "doesNotSupport",
      }],
    },
  ],
});
