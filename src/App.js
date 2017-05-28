import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';

// Understands how to render Instagram

const cards = [
  {
    user: {username: "Beyoncé Carter-Knowles", profilePic: "http://placebeyonce.com/20-20"},
    picture: "http://placebeyonce.com/500-500",
    isLiked: false,
    isBookmarked: false,
    timeCreated: "36 seconds ago",
    comments: [
      {comment: "Sickening.", user: {username: "Adele Britishlady", profilePic: "http://placebeyonce.com/20-20" }},
    ]
  },
  {
    user: {username: "Beyoncé Carter-Knowles", profilePic: "http://placebeyonce.com/20-20"},
    picture: "http://placebeyonce.com/500-500",
    isLiked: false,
    isBookmarked: false,
    timeCreated: "36 seconds ago",
    comments: [
      {comment: "Sickening.", user: {username: "Adele Britishlady", profilePic: "http://placebeyonce.com/20-20" }},
    ]
  }

]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="card-collection">
          {cards.map((card, i) => {
            return <Card
              picInfo={card}
              key={i}
              />
          })}
        </div>
      </div>
    );
  }
}

export default App;
