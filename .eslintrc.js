module.exports = {
  extends: ["@react-native-community", "eslint-config-prettier"],
  rules: {
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/function-component-definition": ["off"],
    "no-unused-vars": 1,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-unused-expressions": 0,
    "@typescript-eslint/naming-convention": 0,
    "import/default": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "react/prop-types": "warn",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/button-has-type": "off",
    "no-nested-ternary": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "react/destructuring-assignment": "off",
    "jsx-no-constructed-context-values": "off",
    "no-self-compare": "off",
    "no-useless-escape": "warn",
    "no-plusplus": "warn",
    "react/no-unstable-nested-components": "off",
    "react/require-default-props": [
      "off",
      {
        forbidDefaultForRequired: true,
        functions: "defaultArguments",
      },
    ],
  },
};
