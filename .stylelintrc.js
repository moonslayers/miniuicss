export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global', 'v-deep']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'utility', 'screen', 'each', 'include', 'mixin', 'use', 'forward', 'extend', 'at-root', 'error', 'warn', 'debug', 'if', 'else', 'for', 'return']
      }
    ],
    'block-no-empty': null,
    'no-descending-specificity': null,
    'scss/at-import-partial-extension': 'always',
    'scss/dollar-variable-pattern': null,
    'scss/selector-no-redundant-nesting-selector': true,
    'declaration-block-no-redundant-longhand-properties': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null
  }
}
