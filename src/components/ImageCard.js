import './ImageList.css';
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0};

    this.imageRef = React.createRef();
    console.log(props.image);
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil( height / 10 ) + 13;
    this.setState({ spans });
  }
  
  render(){
    const { description, urls, user} = this.props.image;
    return(
      <div style={{ gridRowEnd: `span ${this.state.spans}`}} className="main">
       <div className="ui card">
           <div className="image">
             <img 
            ref={this.imageRef}
            src={urls.regular}
            alt={description} />
          </div>
          <div className="content">
            <a className="header">{user.name}</a>
            <div className="meta">
              <span className="date">{user.location}</span>
            </div>
            <small>
              <a className="header" target="_blank">{user.portfolio_url}</a>
            </small>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
              {user.twitter_username}
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default ImageCard;

