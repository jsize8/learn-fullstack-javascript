import React from 'react';
import reactDOM from 'react-dom';

import data from './testData';
import App from './components/App'

reactDOM.render(
  <App contests={data.contests} />,
  document.getElementById('root')
);
