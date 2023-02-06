import {readdirSync} from 'node:fs';
import {basename} from 'node:path'

import expect from 'expect.js';
import imageSize from 'image-size';
import validateSchema from 'yaml-schema-validator';

import showcaseEntrySchema from './schema.js';


const SHOWCASE_DIR = 'data/showcase';
const IMAGE_DIR = 'static/img/showcase';

describe('Showcase entries', () => {
  const entries = readdirSync(SHOWCASE_DIR);

  entries.forEach(entry => {
    entry = basename(entry, '.yml');

    describe(entry, () => {
      it('has a valid description', () => {
        const validationErrors = validateSchema(`${SHOWCASE_DIR}/${entry}.yml`, {
          schema: showcaseEntrySchema,
        });
        expect(validationErrors).to.be.empty();
      });

      it('has a valid image', () => {
        const dimensions = imageSize(`${IMAGE_DIR}/${entry}.png`);
        expect(dimensions.width).to.be.greaterThan(1279);
        expect(dimensions.height).to.be.greaterThan(719);
        expect(dimensions.width / dimensions.height).to.be.within(1.7, 1.8);  // expect a 16:9 ratio
      });
    });
  });
});
