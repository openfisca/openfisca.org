export default {
  title: {
    type: String,
    required: true,
    length: {
      min: 2,
      max: 80
    },
  },
  website: {
    type: String,
    required: true,
    use: { isUrl }
  },
  author: {
    name: {
      type: String,
      required: true,
      length: {
        min: 3,
        max: 120
      },
    },
    contact: {
      type: String,
      required: true,
      use: { isEmailAddress }
    },
    link: {
      type: String,
      use: { isUrl }
    }
  },
  description: {
    en: {
      type: String,
      required: true,
      length: {
        min: 20,
        max: 200
      }
    },
    fr: {
      type: String,
      required: true,
      length: {
        min: 20,
        max: 200
      }
    }
  },
  country: {
    type: String,
    required: true,
    length: {
      min: 2,
      max: 2
    }
  },
  until: {
    type: String,
    use: { isISOdate }
  }
};



function isUrl(value) {
  try {
    return new URL(value);
  } catch (_) {
    return false;
  }
}

function isEmailAddress(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);  // source: https://stackoverflow.com/a/9204568/594053
}

function isISOdate(value) {
  return isNaN(new Date(value));  // source: https://stackoverflow.com/a/67410020/594053
}
