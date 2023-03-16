import {readdirSync} from 'node:fs';
import {basename} from 'node:path';
import expect from 'expect.js';
import validateSchema from 'yaml-schema-validator';
import packageSchema from './schema.js';
import {isIso31662} from '../validators.js';

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
          schema: packageSchema,
        });
        expect(validationErrors).to.be.empty();
      });

      it('is well named', () => {
        expect(isIso31662(entry.split('_')[0])).to.be(true);
        expect(entry.split('_')[1]).to.match(/^[A-Za-z0-9-]+$/);
      });
    });
  });
});
