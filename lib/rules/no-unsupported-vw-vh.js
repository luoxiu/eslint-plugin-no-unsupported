/**
 * @fileoverview no unsupported vw vh
 * @author luoxiu
 */
"use strict";

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
      description: "no unsupported vw vh",
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

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      TemplateElement(node) {
        if (Reg.vw.test(node.value.cooked)) {
          context.report({
            node,
            messageId: "doesNotSupportVW",
          })
        }

        if (Reg.vh.test(node.value.cooked)) {
          context.report({
            node,
            messageId: "doesNotSupportVH",
          })
        }
      },

      Literal(node) {
        if (Reg.vw.test(node.value)) {
          context.report({
            node,
            messageId: "doesNotSupportVW",
          });
        }

        if (Reg.vh.test(node.value)) {
          context.report({
            node,
            messageId: "doesNotSupportVH",
          });
        }
      }
    };
  },
};
