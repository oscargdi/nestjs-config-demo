import { Logger } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

export default () => {
  const logger = new Logger('Configuration');
  const node_env = process.env.NODE_ENV;
  logger.log(`Loading configuration for ${node_env}`);
  return yaml.load(
    readFileSync(join(__dirname, `env/${node_env}.yml`), 'utf8'),
  ) as Record<string, any>;
};
