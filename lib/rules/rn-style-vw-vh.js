/**
 * @fileoverview rn-no-unsupported-vw-vh
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
      description: "rn-no-unsupported-vw-vh",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      doesNotSupportVW: "react native does not support `vw`",
      doesNotSupportVH: "react native does not support `vh`",
    }
  },

  create(context) {
    // variables should be defined here
    const Reg = {
      vw: /^\d{1,3}vw$/,
      vh: /^\d{1,3}vh$/,
    }

    const check = (value) => {
      if (!isString(value)) {
        return;
      }
      if (Reg.vw.test(value)) {
        return 'vw'
      }
      if (Reg.vh.test(value)) {
        return 'vh'
      }
    }

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      TemplateLiteral(node) {
        // `10vw`
        if (node.quasis.length === 1) {
          const result = check(node.quasis[0].value.cooked)
          if (result) {
            context.report({
              node,
              messageId: `doesNotSupport${result.toUpperCase()}`,
            })
          }
        }
      },

      Literal(node) {
        const result = check(node.value);
        if (result) {
          context.report({
            node,
            messageId: `doesNotSupport${result.toUpperCase()}`,
          })
        }
      }
    };
  },
};
