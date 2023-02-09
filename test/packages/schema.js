import {isUrl} from '../uses.js';
import {iso31662} from 'iso-3166';

export default {
  package_name: {
    type: String,
    required: true,
    length: {
      min: 2,
      max: 200,
    },
  },
  title: {
    en: {
      type: String,
      required: true,
      length: {
        min: 4,
        max: 200,
      },
    },
    fr: {
      type: String,
      required: true,
      length: {
        min: 4,
        max: 200,
      },
    },
  },
  jurisdiction: {
    type: String,
    required: true,
    use: {isIso31662},
  },
  source: {
    type: String,
    required: true,
    use: {isUrl},
  },
  website: {
    type: String,
    use: {isUrl},
  },
  legislation_explorer: {
    type: String,
    use: {isUrl},
  },
  openapi_spec: {
    type: String,
    use: {isUrl},
  },
};

function isIso31662(value) {
  return iso31662.some((entry) => {
    return (entry.code === value) || (entry.parent === value) || (value === 'ZZ');
  });
}
