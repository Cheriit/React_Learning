// Import the React and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js';

// Create a react component

const App = () => {
    let props = [
        {

        },
        {

        },
        {
            
        }
    ];
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    );
}


// Show comp on screen

ReactDOM.render(
    <App />,
    document.querySelector('#root') 
);