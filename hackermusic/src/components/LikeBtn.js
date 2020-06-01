import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import '../App.css';
class LikeBtn extends React.Component {
    state = {
      likes: 0
    };
  
    addLike = () => {
      let newCount = this.state.likes + 1;
       this.setState({
       likes: newCount
       });
    };
  
    render() {
      const likes = this.state.likes;
      if (likes === 0) {
        return (
          <div>
            <button
              className="likebtn"
              onClick={this.addLike}
            >
              <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "#33c3f0" }} />
            </button>
          </div>
        );
      }
      if (likes === 1) {
        return (
          <div>
            <button className="likebtn" onClick={this.addLike}>
              <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "red" }} />
            </button>
          </div>
        );
      }
      if (likes > 1) {
        return (
          <div>
            <button className="likebtn" onClick={this.addLike}>
              <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "red" }} />
              {/* {" "}{likes} */}
            </button>
          </div>
        );
      }
    }
  }


export default LikeBtn;