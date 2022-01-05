/**
 * @fileoverview rn-style-calc
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

    const isCalcFn = (value) => {
      // TODO: a more accurate describing.
      return value.startsWith('calc(') && value.endsWith(')');
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      TemplateLiteral(node) {
        let value = '';
        for (const p of node.quasis) {
          value += p.value.cooked
        }

        if (isCalcFn(value)) {
          context.report({
            node: node,
            messageId: "doesNotSupport",
          });
        }
      },

      Literal(node) {
        const value = node.value;

        if (!isString(value)) {
          return;
        }

        if (isCalcFn(value)) {
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
