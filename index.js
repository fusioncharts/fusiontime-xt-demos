import Web from './data/Web';
import Apple from './data/Apple';
import Mobile from './data/Mobile';
import Slack from './data/Slack';
import Ebola from './data/Ebola';
import Nasa from './data/Nasa';
import GDP from './data/GDP';

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
      name: 'Global Temperature Average',
      desc: 'The change in global surface temperature',
    },
    data: Nasa,
  },

  gdp: {
    metadata: {
      name: 'GDP (current US$)',
      desc: 'World Bank national accounts data'
    },
    data: GDP
  }
};

window.tsData = tsData;

export default tsData;
