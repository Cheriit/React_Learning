import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import StreamShow from './streams/SteramShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';

export const App = () => {
	return (
		<div className='ui container'>
			<HashRouter>
				<Header />
				<div>
					<Route path='/' exact component={StreamList} />
					<Route path='/streams/new' component={StreamCreate} />
					<Route path='/streams/edit' component={StreamEdit} />
					<Route path='/streams/delete' component={StreamDelete} />
					<Route path='/streams/show' component={StreamShow} />
				</div>
			</HashRouter>
		</div>
	);
};

export default App;
