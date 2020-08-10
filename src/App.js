import React from 'react';
import Header from './components/Header'
import OrdersList from './components/all_orders'
import LatestOrders from './components/latest_orders'
import PendingOrders from './components/pending_orders'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Details from './components/details'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>

          <Route path='/' exact component={OrdersList}/>
          <Route path='/latest' component={LatestOrders}/>
          <Route path='/pending' component={PendingOrders}/>
          <Route path='/details' component={Details}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
