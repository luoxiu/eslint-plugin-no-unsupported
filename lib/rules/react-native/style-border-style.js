/**
 * @fileoverview style-border-style
 * @author luoxiu
 */
"use strict";

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
      description: "style-border-style",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      doesNotSupport: "react native does not support `borderStyle:{{ borderStyle }}`",
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
        if (node.key.name === 'borderStyle' || node.key.value === 'borderStyle') {

          let value;
          if (node.value.type === 'Literal') {
            value = node.value.value;
          }
          if (node.value.type === 'TemplateLiteral') {
            node.value.quasis.forEach(q => {
              value = q.value.cooked;
            })
          }
  
          const allValues = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'inherit', 'initial', 'revert', 'unset'];
          const supportedValues = ['solid', 'dotted', 'dashed'];
          const unsupportedValues = _.without(allValues, ...supportedValues);
          
          // if `value` is not in unsupported value list, then this is probably not css `borderStyle`, we do not report. 😉

          const unsupported = _.intersection(value.split(' '), unsupportedValues)
          if (unsupported.length > 0) {
            context.report({
              node,
              messageId: "doesNotSupport",
              data: {
                borderStyle: value
              }
            });
          }
        }
      }
    };
  },
};
