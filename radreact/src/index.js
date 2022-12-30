import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';
import '../src/Assets/Css/globals.css';
import '../src/Assets/Css/override.css';
import '../src/Assets/Css/responsive.css';
import '../src/Assets/Css/style.css';

import 'react-multi-carousel/lib/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Fragment>
		<App />
	</Fragment>
);
reportWebVitals();
