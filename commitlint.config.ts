import type {UserConfig} from '@commitlint/types';
import {RuleConfigSeverity} from '@commitlint/types';

const config: UserConfig = {
  "extends": [
    "@commitlint/config-conventional"
  ],
  parserPreset: "conventional-changelog-atom",
  formatter: "@commitlint/format",
  rules: {
    "type-empty": [RuleConfigSeverity.Warning, "never"],
    "type-enum": [RuleConfigSeverity.Warning, "always", ["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "revert"]],
  },
  helpUrl:
    '❌ Invalid commit message format!\n\n' +
    'Commit message must follow the convention:\n' +
    'type(scope?): subject\n\n' +
    'Examples:\n' +
    '✅ feat: add new button component\n' +
    '✅ fix(button): resolve click event issue\n' +
    '✅ docs: update README installation steps\n' +
    '✅ chore: update dependencies\n\n' +
    'Available types: feat, fix, docs, style, refactor, perf, test, chore, revert'
}

export default config