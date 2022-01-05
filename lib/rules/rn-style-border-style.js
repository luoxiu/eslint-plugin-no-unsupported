/**
 * @fileoverview rn-style-border-style
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
      description: "rn-style-border-style",
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
  
          const syntaxRegexp = /^(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)( (none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)){0,3}$/;

          const supportedSyntexRegexp = /^(solid|dotted|dashed)( (solid|dotted|dashed)){0,3}$/;
          
          // if `value` is not a valid `borderStyle` value, then this is probably not css `borderStyle`, we do not report. 😉
          if (syntaxRegexp.test(value) && !supportedSyntexRegexp.test(value)) {
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
