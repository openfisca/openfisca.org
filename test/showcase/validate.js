import {readdirSync, statSync} from 'node:fs';
import {basename} from 'node:path';

import expect from 'expect.js';
import imageSize from 'image-size';
import validateSchema from 'yaml-schema-validator';

import showcaseSchema from './schema.js';


const SHOWCASE_DIR = 'data/showcase';
const ILLUSTRATIONS_DIR = 'assets/img/showcase';

describe('Showcase entries', () => {
  const entries = readdirSync(SHOWCASE_DIR);

  entries.forEach((entry) => {
    entry = basename(entry, '.yml');

    if (entry == '.DS_Store') {
      return;
    }

    describe(entry, () => {
      it('has a valid description', () => {
        const validationErrors = validateSchema(`${SHOWCASE_DIR}/${entry}.yml`, {
          schema: showcaseSchema,
        });
        expect(validationErrors).to.be.empty();
      });

      describe('illustration', () => {
        const path = `${ILLUSTRATIONS_DIR}/${entry}.png`;
        let stats;

        it('exists', () => {
          stats = statSync(path);
        });

        it('is not too heavy', () => {
          expect(stats.size).to.be.below(400 * 1024); // 400 kiB
        });

        it('is large enough', () => {
          const dimensions = imageSize(path);
          expect(dimensions.width).to.be.greaterThan(1279);
          expect(dimensions.height).to.be.greaterThan(719);
          expect(dimensions.width / dimensions.height).to.be.within(1.7, 1.8); // expect a 16:9 ratio
        });
      });
    });
  });
});
