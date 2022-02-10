module.exports = {
  customSyntax: "postcss-scss",
  plugins: ["stylelint-scss", "stylelint-order"],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier",
  ],
  rules: {
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules",
    ],
    "order/properties-alphabetical-order": null,
    "scss/percent-placeholder-pattern": null,
    "scss/dollar-variable-pattern": null,
    "scss/dollar-variable-empty-line-before": null,
    "scss/double-slash-comment-empty-line-before": null,
    "scss/operator-no-newline-after": null,
    "scss/at-function-pattern": null,
    "scss/at-rule-conditional-no-parentheses": null,
    "scss/at-rule-no-unknown": [true, { ignoreAtRules: ["container"] }],
    "max-nesting-depth": 6,
    "selector-max-compound-selectors": 5,
    "color-named": null,
    "selector-class-pattern": null,
    "selector-no-qualifying-type": [true, { ignore: ["attribute"] }],
    "comment-empty-line-before": null,
    "custom-property-pattern": null,
    "color-function-notation": null, // TBD
    "alpha-value-notation": null, // TBD
    "rule-empty-line-before": null,
    "keyframes-name-pattern": null, // TBD
    "declaration-empty-line-before": null,
    "rule-empty-line-before": null,
    "value-keyword-case": ["lower", { camelCaseSvgKeywords: true }],
  },
};
