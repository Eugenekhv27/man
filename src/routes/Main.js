import React from 'react';
import Login from './login';
export default class extends React.Component{

	render(	){
		
		if(localStorage.getItem('auth') === 'true'){
			return <div>Main page </div>;	
		}else{
			return <Login />;
		}
		
	}
}