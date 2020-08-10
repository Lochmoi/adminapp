<Switch>

          <Route path='/' exact component={OrdersList}/>
          <Route path='/latest' component={LatestOrders}/>
          <Route path='/pending' component={PendingOrders}/>
          
</Switch>

{JSON.parse(props.order_details.location).apartment}