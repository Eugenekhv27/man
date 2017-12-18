import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home'
import Main from './Main'

export default () =>(

<BrowserRouter>
	<Switch>
		<Route path="/home"   render={props => <Home {...props} />}/>
		<Route path="/"  component={Main}/>
	</Switch>
</BrowserRouter>
	);