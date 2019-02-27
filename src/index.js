// Import the React and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';


// Create a react component
const App = () => {
    let props = [
        {
            author: "Ash",
            time: "Today at 9:00AM",
            content: "Oh no, it's Team Rocket!",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMWtylyOUIxvns1UEFAzR3USLhjYRBc9HfPakblIoLrt-D4ru"
        },
        {
            author: "Jessie",
            time: "Yesterday at 19:00AM",
            content: "Prepare for trouble...",
            avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/bc9ffd43-db87-475c-a8f0-0e57fc3d5c43/d79ban0-538575d2-96df-44dd-91a6-dd10e23beffc.jpg"
        },
        {
            author: "James",
            time: "20th Dec 2018 at 8:00PM",
            content: "And make it double!",
            avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/bc9ffd43-db87-475c-a8f0-0e57fc3d5c43/d797lak-ed8d0475-2453-4aa4-a122-f415bc27c025.jpg"
        }
    ];
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author={props[0].author}
                time={props[0].time}
                content={props[0].content}
                avatar={props[0].avatar}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author={props[1].author}
                time={props[1].time}
                content={props[1].content}
                avatar={props[1].avatar}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author={props[2].author}
                time={props[2].time}
                content={props[2].content}
                avatar={props[2].avatar}
                />
            </ApprovalCard>
        </div>
    );
};


// Show comp on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root') 
);