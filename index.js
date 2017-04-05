import Web from './data/Web';
import Apple from './data/Apple';
import Mobile from './data/Mobile';
import Slack from './data/Slack';
import Ebola from './data/Ebola';
import Nasa from './data/Nasa';
import GDP from './data/GDP';
import Sun from './data/Sun';


const tsData = {
  web: {
    metadata: {
      name: 'Web Visits and Downloads',
      desc: 'Number of Visits and Downloads',
    },
    data: Web,
  },

  apple: {
    metadata: {
      name: 'Apple Stock',
      desc: 'Candle stick time series chart of Apple',
    },
    data: Apple,
  },

  mobile: {
    metadata: {
      name: 'Mobile OS',
      desc: 'Differnet Mobile OS growth with time',
    },
    data: Mobile,
  },

  slack: {
    metadata: {
      name: 'Slack Conversations',
      desc: 'Usage history and frequency',
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
  },
  sun: {
    metadata: {
      name: 'Sunspot',
      desc: 'Monthly numbers of sunspots, as from the World Data Center'
    },
    data: Sun
  }
};

window.tsData = tsData;

export default tsData;
