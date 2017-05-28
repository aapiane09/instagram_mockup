import React, { Component } from 'react';
import './../../App.css';

// Understands how to display individual cards

export default class Card extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isLiked: this.props.picInfo.isLiked,
      isBookmarked: this.props.picInfo.isBookmarked

    }
  }

  toggleLike() {
    this.setState({isLiked: !this.state.isLiked});
    console.log(this.state.isLiked)
  }

  toggleBookmark() {
    this.setState({isBookmarked: !this.state.isBookmarked});
    console.log(this.state.isBookmarked)
  }


  render() {
    return (
      <div className="card">
        <div className="row user-info">
          <img src={this.props.picInfo.user.profilePic} />
          <span>{this.props.picInfo.user.username}</span>
          <span> ... </span>
          {/* UserInfo */}
        </div>
        <div className="row picture">
          <img src={this.props.picInfo.picture} />
        </div>

        <div className="row pic-info">
          <div className="icons">
            <div className="floatLeft">
              <button onClick={this.toggleLike.bind(this)}> {this.state.isLiked ? "Liked" : "Not Liked"} </button>
              <img src="http://placebeyonce.com/20-20" />
              <img src="http://placebeyonce.com/20-20" />
            </div>
            <div className="floatRight">
              <button onClick={this.toggleBookmark.bind(this)}> {this.state.isBookmarked ? "Bookmarked" : "Not Bookmarked"} </button>
            </div>
          </div>
          <div className="comments">
            <p>{this.props.picInfo.comments[0].user.username}</p>
            <p>{this.props.picInfo.comments[0].comment}</p>
          </div>
          <p className="timestamp"> {this.props.picInfo.timeCreated} </p>
        </div>
        {/* PicInfo */}
      </div>    );
  }
}
