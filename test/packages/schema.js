import {isUrl, isIso31662, isSPDX} from '../validators.js';

export default {
  name: {
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
    repository: {
      type: String,
      required: true,
      use: {isUrl},
    },
    license: {
      type: String,
      required: true,
      use: {isSPDX},
    },
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
