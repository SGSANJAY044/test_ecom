import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
    {
        ignores: ["test-results", "playwright-report"]
    },
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                    jest: true,
                    es2024: true
                }
            }
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.serviceworker,
            }
        }
    },
    {
        languageOptions: {
            globals: {
                "it": "readonly",
                "describe": "readonly",
                "cy": "readonly",
                "module": "readonly",
                "process": "readonly",
                "require": "readonly",
                "Cypress": "readonly",
                "expect": "readonly"
            }
        }
    },
    {
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    pluginJs.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
];
