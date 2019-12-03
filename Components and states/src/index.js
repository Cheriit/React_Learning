//Importing modules
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
	const [lat, errorMsg] = useLocation();

	let content;
	if (errorMsg) {
		content = <div>Error: {errorMsg}</div>;
	} else if (lat) {
		content = (
			<div>
				<SeasonDisplay lat={lat} />
			</div>
		);
	} else {
		content = <Spinner message='Please accept location request' />;
	}

	return <div className='border-red'>{content}</div>;
};

//Rendering app
ReactDOM.render(<App />, document.querySelector('#root'));
