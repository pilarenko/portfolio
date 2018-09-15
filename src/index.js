import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { IntlProvider, addLocaleData } from "react-intl";


ReactDOM.render(<IntlProvider><App /></IntlProvider>, document.getElementById('root'));
registerServiceWorker();
