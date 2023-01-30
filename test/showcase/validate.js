import {readdir} from 'node:fs/promises';

import validateSchema from 'yaml-schema-validator';

import showcaseEntrySchema from './schema.js';


const SHOWCASE_DIR = 'data/showcase';

const entries = await readdir(SHOWCASE_DIR);

const errorCount = entries.map((entry) => {
  console.log(entry);
  return validateSchema(`${SHOWCASE_DIR}/${entry}`, {
    schema: showcaseEntrySchema,
  });
}).reduce((errorCount, errors) => {
  return errorCount + errors.length;
}, 0);

process.exitCode = errorCount;
