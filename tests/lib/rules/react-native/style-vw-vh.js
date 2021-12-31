/**
 * @fileoverview no unsupported vw vh
 * @author luoxiu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../../lib/rules/react-native/style-vw-vh"),
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
ruleTester.run("react-native/style-vw-vh", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "const style = { width: '100vw' }",
      errors: [{ messageId: "doesNotSupportVW" }],
    },
    {
      code: "const width = '100vw'",
      errors: [{ messageId: "doesNotSupportVW" }],
    },
    {
      code: "style.width = `100vh`",
      errors: [{ messageId: "doesNotSupportVH" }],
    },
  ],
});
