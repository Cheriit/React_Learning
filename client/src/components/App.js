import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import StreamShow from './streams/SteramShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';

export const App = () => {
	return (
		<div className='ui container'>
			<Router history={history}>
				<Header />
				<div>
					<Route path='/' exact component={StreamList} />
					<Route path='/streams/new' exact component={StreamCreate} />
					<Route path='/streams/edit/:id' exact component={StreamEdit} />
					<Route
						path='/streams/delete/:id'
						exact
						component={StreamDelete}
					/>
					<Route path='/streams/show' exact component={StreamShow} />
				</div>
			</Router>
		</div>
	);
};

export default App;
