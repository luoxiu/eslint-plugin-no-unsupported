/**
 * @fileoverview no unsupported position
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
      description: "no unsupported position",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      onlySupports: "react native only supports `postion:absolute|relative`",
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
      ObjectExpression(node) {
        for (const p of node.properties) {
          if (p.key.name === 'position' || p.key.value === 'position') {
            if (p.value.value !== "absolute" && p.value.value !== "relative") {
              context.report({
                node: p,
                messageId: "onlySupports",
              });
            }
          }
        }
      },

    };
  },
};
