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
  }
}

export default config