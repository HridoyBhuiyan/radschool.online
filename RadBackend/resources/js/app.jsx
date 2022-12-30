import './bootstrap';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import AppRoute from "./support/AppRoute";
import './assets/css/components.css'
import './assets/css/custom.css'
import './assets/css/style.css'
import './assets/css/overright.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'


if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));
    Index.render(<AppRoute/>)
}
