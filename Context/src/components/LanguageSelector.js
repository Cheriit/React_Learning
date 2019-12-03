import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

export default class App extends Component {
	static contextType = LanguageContext;
	render() {
		return (
			<div>
				Select language:{' '}
				<i
					className='flag us'
					onClick={() => this.context.onLanguageChange('english')}
				/>
				<i
					className='flag pl'
					onClick={() => this.context.onLanguageChange('polish')}
				/>
			</div>
		);
	}
}
