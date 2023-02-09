import {readdirSync} from 'node:fs';
import {basename} from 'node:path';
import expect from 'expect.js';
import validateSchema from 'yaml-schema-validator';
import pacakgesEntrySchema from './schema.js';

const PACKAGES_DIR = 'data/packages';

describe('packages entries', () => {
  const entries = readdirSync(PACKAGES_DIR);

  entries.forEach((entry) => {
    entry = basename(entry, '.yml');

    if (entry == '.DS_Store') {
      return;
    }

    describe(entry, () => {
      it('has a valid description', () => {
        const validationErrors = validateSchema(`${PACKAGES_DIR}/${entry}.yml`, {
          schema: pacakgesEntrySchema,
        });
        expect(validationErrors).to.be.empty();
      });
    });
  });
});
