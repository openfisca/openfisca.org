import {readdirSync} from 'node:fs';

import expect from 'expect.js';
import validateSchema from 'yaml-schema-validator';

import showcaseEntrySchema from './schema.js';


const SHOWCASE_DIR = 'data/showcase';

describe('Showcase entries', () => {
  const entries = readdirSync(SHOWCASE_DIR);
  entries.forEach(entry => {
    describe(entry, () => {
      it('has a valid description', () => {
        const validationErrors = validateSchema(`${SHOWCASE_DIR}/${entry}`, {
          schema: showcaseEntrySchema,
        });
        expect(validationErrors).to.be.empty();
      });
    });
  });
});
