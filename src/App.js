import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import router from './router'


class App extends Component {

	render() {
		return (
			<div>
				<HashRouter>
					{router}
				</HashRouter>
			</div>
		);
	}
}

export default App;