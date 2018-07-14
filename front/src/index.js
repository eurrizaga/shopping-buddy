import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from 'AppWrapper';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';
import ListPurchases from 'components/ListPurchases';
import PurchaseForm from 'components/PurchaseForm';
import MainView from 'components/MainView';

ReactDOM.render(
<AppWrapper>
    <BrowserRouter>
        <App>
            <Route path="/list" component={ListPurchases}/>
            <Route path="/edit" component={PurchaseForm}/>
            <Route path="/" exact component={MainView}/>
        </App>    
    </BrowserRouter>
</AppWrapper>, document.getElementById('root'));
registerServiceWorker();
