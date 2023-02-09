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

      it('is well named', () => {
        // ^             start of the string
        // [A-Z]{2}      two uppercase characters (ISO 3166-2)
        // (-            optional: dash
        // [A-Z0-9]{1,3} 1 to 3 alphanumeric characters (ISO 3166-2 subdivision)
        // )?            end of optional
        // (_            optional: underscore
        // [A-Za-z0-9]+  at least 1 alphanumeric string
        // )?            end of optional
        // $             end of the string
        expect(entry).to.match(/^[A-Z]{2}(-[A-Z0-9]{1,3})?(_[A-Za-z0-9]+)?$/);
      });
    });
  });
});
