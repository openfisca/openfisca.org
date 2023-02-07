import fs from 'fs';

import YAML from 'yaml';


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
  country: {
    type: String,
    required: true,
    length: {
      min: 2,
      max: 2,
    },
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

// This module is not compatible with the Module specification yet, and JSON imports are experimental at the time of writing
// <https://nodejs.org/dist/latest-v18.x/docs/api/esm.html#import-assertions>
const SPDXLicenseIds = JSON.parse(fs.readFileSync('./node_modules/spdx-license-ids/index.json', 'utf-8'));

function isUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol == 'https:';
  } catch (_) {
    return false;
  }
}

function isEmailAddress(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // source: https://stackoverflow.com/a/9204568/594053
}

function isISOdate(value) {
  return !isNaN(new Date(value)); // source: https://stackoverflow.com/a/67410020/594053
}


const VALID_AUTHOR_TYPES = Object.keys(CONFIG.showcase.author.types.icons);

function isValidAuthorType(value) {
  return VALID_AUTHOR_TYPES.includes(value);
}

function isSPDX(value) {
  return SPDXLicenseIds.includes(value);
}
