import Web from './data/Web';
import Apple from './data/Apple';
import Mobile from './data/Mobile';
import Slack from './data/Slack';
import Ebola from './data/Ebola';

const tsData = {
	web: {
		metadata: {
			name: "Web Visits and Downloads",
			desc: ""
		},
		data: Web
	},

	apple: {
		metadata: {
			name: "Apple Stock",
			desc: ""
		},
		data: Apple
	},

	mobile: {
		metadata: {
			name: "Different Mobile OS",
			desc: ""
		},
		data: Mobile
	},

	slack: {
		metadata: {
			name: "Slack Conversations",
			desc: ""
		},
		data: Slack
	},

  ebola: {
    metadata: {
      name: 'Ebola Outbreak',
      desc: ''
    },
    data: Ebola
  },

};

window.tsData = tsData;

export default tsData;
