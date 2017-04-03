import Web from './data/Web';
import Apple from './data/Apple';
import Mobile from './data/Mobile';
import Slack from './data/Slack';
import Ebola from './data/Ebola';
import Nasa from './data/Nasa';

const tsData = {
  web: {
    metadata: {
      name: 'Web Visits and Downloads',
      desc: 'Simple line series',
    },
    data: Web,
  },

  apple: {
    metadata: {
      name: 'Apple Stock',
      desc: 'Candle stick time series chart',
    },
    data: Apple,
  },

  mobile: {
    metadata: {
      name: 'Different Mobile OS',
      desc: 'Manipulate data',
    },
    data: Mobile,
  },

  slack: {
    metadata: {
      name: 'Slack Conversations',
      desc: 'Fetch data from a JSON URL',
    },
    data: Slack,
  },

  ebola: {
    metadata: {
      name: 'Ebola Outbreak',
      desc: 'Fetch and compare three differnet examples',
    },
    data: Ebola,
  },

  nasa: {
    metadata: {
      name: 'Global Temperature Avg',
      desc: 'GLOBAL LAND-OCEAN TEMPERATURE INDEX',
    },
    data: Nasa,
  },
};

// window.tsData = tsData;

export default tsData;
