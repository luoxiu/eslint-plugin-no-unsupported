/**
 * @fileoverview rn-style-position
 * @author luoxiu
 */
"use strict";

const { isString } = require("lodash");
const _ = require("lodash");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: `problem`, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "rn-style-position",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      doesNotSupport: "react native does not support `postion:{{ position }}`",
    }
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Property(node) {
        if (node.key.name === 'position' || node.key.value === 'position') {

          let value = '';
          if (node.value.type === 'Literal') {
            const v = node.value.value;
            if (isString(v)) {
              value = v;
            }
          }
          if (node.value.type === 'TemplateLiteral') {
            node.value.quasis.forEach(q => {
              value += q.value.cooked;
            })
          }
  
          const syntaxRegexp = /^(absolute|relative|fixed|sticky|static|inherit|initial|revert|inset|unset)$/;

          const supportedSyntexRegexp = /^(absolute|relative)$/;

          // if `value` is not in unsupported value list, then this is probably not css `position`, we do not report. 😉
          if (syntaxRegexp.test(value) && !supportedSyntexRegexp.test(value)) {
            context.report({
              node,
              messageId: "doesNotSupport",
              data: {
                position: value
              }
            });
          }
        }
      }
    };
  },
};
