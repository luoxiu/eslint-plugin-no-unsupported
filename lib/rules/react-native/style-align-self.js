/**
 * @fileoverview style-align-self
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
      description: "style-align-self",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      doesNotSupport: "react native does not support `alignSelf:{{ alignSelf }}`",
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
        if (node.key.name === 'alignSelf' || node.key.value === 'alignSelf') {

          let value;
          if (node.value.type === 'Literal') {
            value = node.value.value;
          }
          if (node.value.type === 'TemplateLiteral') {
            node.value.quasis.forEach(q => {
              value = q.value.cooked;
            })
          }
  
          const allValues = ['auto', 'normal', 'center', 'start', 'end', 'self-start', 'self-end', 'flex-start', 'flex-end', 'baseline', 'first baseline', 'last baseline', 'stretch', 'safe center', 'unsafe center', 'inherit', 'initial', 'unset'];
          const supportedValues = ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
          const unsupportedValues = _.without(allValues, ...supportedValues);
          
          // if `value` is not in unsupported value list, then this is probably not css position, we do not report. 😉
          if (unsupportedValues.includes(value)) {
            context.report({
              node,
              messageId: "doesNotSupport",
              data: {
                alignSelf: value
              }
            });
          }
        }
      }
    };
  },
};
