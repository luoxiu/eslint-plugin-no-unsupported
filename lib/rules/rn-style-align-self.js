/**
 * @fileoverview rn-style-align-self
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
      description: "rn-style-align-self",
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

          if (!isString(value)) {
            return
          }

          const syntaxRegexp = /^(auto|normal|stretch|(((first|last) )?baseline)|(((unsafe|safe) )?(center|start|end|self-start|self-end|flex-start|flex-end)))$/;

          const supportedSyntexRegexp = /^(auto|flex-start|flex-end|center|stretch|baseline)$/;

          // if `value` is not a valid `alignSelf` value, then this is probably not css `alignSelf`, we do not report. 😉
          if (syntaxRegexp.test(value) && !supportedSyntexRegexp.test(value)) {
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
