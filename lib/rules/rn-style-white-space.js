/**
 * @fileoverview rn-style-white-space
 * @author luoxiu
 */
"use strict";

const { isString } = require('lodash');

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
      description: "rn-style-white-space",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      doesNotSupport: "react native does not support `whiteSpace`",
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
        if (node.key.name === 'whiteSpace' || node.key.value === 'whiteSpace') {

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

          const syntaxRegexp = /^(normal|pre|nowarp|pre-wrap|pre-line|break-spaces)$/;
          
          // if `value` is not a valid `cursor` value, then this is probably not css `cursor`, we do not report. 😉
          if (syntaxRegexp.test(value)) {
            context.report({
              node,
              messageId: "doesNotSupport"
            });
          }
        }
      }
    };
  },
};
