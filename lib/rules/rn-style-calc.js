/**
 * @fileoverview rn-style-calc
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
      description: "rn-style-calc",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      doesNotSupport: "react native does not support `calc`",
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
      TemplateLiteral(node) {
        for (const p of node.quasis) {
          if (p.value.cooked.startsWith("calc(")) {
            context.report({
              node: p,
              messageId: "doesNotSupport",
            });
          }
        }
      },
      
      Literal(node) {
        if (node.value.startsWith("calc(")) {
          context.report({
            node: node,
            messageId: "doesNotSupport",
          });
        }
      }
      // visitor functions for different types of nodes
    };
  },
};
