import fs from 'fs';
import path from 'path';

import YAML from 'yaml';

import {isUrl, isEmailAddress, isISOdate, isSPDX} from '../validators.js';

export default {
  title: {
    type: String,
    required: true,
    length: {
      min: 2,
      max: 80,
    },
  },
  website: {
    type: String,
    required: true,
    use: {isUrl},
  },
  author: {
    name: {
      type: String,
      required: true,
      length: {
        min: 3,
        max: 120,
      },
    },
    contact: {
      type: String,
      required: true,
      use: {isEmailAddress},
    },
    type: {
      type: String,
      required: true,
      use: {isValidAuthorType},
    },
    link: {
      type: String,
      use: {isUrl},
    },
  },
  description: {
    en: {
      type: String,
      required: true,
      length: {
        min: 20,
        max: 200,
      },
    },
    fr: {
      type: String,
      required: true,
      length: {
        min: 20,
        max: 200,
      },
    },
  },
  package: {
    type: String,
    required: true,
    use: {isValidPackage},
  },
  until: {
    type: Date,
    required: false,
    use: {isISOdate},
  },
  source: {
    repository: {
      type: String,
      required: false,
      use: {isUrl},
    },
    license: {
      type: String,
      required: false,
      use: {isSPDX},
    },
  },
};


const CONFIG = YAML.parse(fs.readFileSync('./config/_default/params.yaml', 'utf8'));

const VALID_AUTHOR_TYPES = Object.keys(CONFIG.showcase.author.types.icons);

function isValidAuthorType(value) {
  return VALID_AUTHOR_TYPES.includes(value);
}

const PACKAGES_PATH = './data/packages';
const packagesFiles = fs.readdirSync(PACKAGES_PATH);

function isValidPackage(value) {
  return packagesFiles.some((file) => {
    const packageDoc = YAML.parse(fs.readFileSync(path.join(PACKAGES_PATH, file), 'utf8'));
    return packageDoc.hasOwnProperty('name') && (packageDoc['name'] === value);
  });
}
