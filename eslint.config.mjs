import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
    {
        ignores: ["test-results", "playwright-report"]
    },
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true, jest: true, es2024: true }, node: true } } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
];
