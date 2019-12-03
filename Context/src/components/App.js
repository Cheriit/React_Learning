import React, { Component } from 'react';

import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

export default class App extends Component {
	render() {
		return (
			<div className='ui container'>
				<LanguageStore>
					<LanguageSelector />
					<ColorContext.Provider value='primary'>
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}
