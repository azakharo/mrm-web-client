import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

/* eslint-disable-next-line unicorn/prefer-query-selector */
const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  // Have to comment this, because 2 requests for the auth token happened.
  // One from those request succeeded, another failed which sometime broke the app's flow.
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
