import conventional from '@commitlint/config-conventional';
import type { UserConfig } from '@commitlint/types';

const configs: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [...conventional.rules['type-enum'][2], 'blog']],
  },
};

export default configs;
