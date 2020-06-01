import React from 'react';
import '../App.css';
// Lightweight library for audio playing
import ReactAudioPlayer from 'react-audio-player';
import LikeBtn from './LikeBtn';
import Shuffle from '../img/shuffle_bg.jpg';
// Imports from music audio files
import track1 from '../music/Arc North - Catch Me When I Fall (ft. Sarah de Warren) [Magic Release].mp3';
import track2 from '../music/Ellis - Clear My Head.mp3';
import track3 from '../music/Jim Yosef & Alex Skrindo - Ruby [NCS Release].mp3';
import track4 from '../music/Leonell Cassio - Lie 2 You (ft. Dylan Emmet).mp3';
import track5 from '../music/Lost Sky - Dreams.mp3';
import track6 from '../music/Spce Cadex & Exede - Till Dawn.mp3';
import track7 from '../music/VETA - Memories.mp3';
// Import music covers
import bg1 from '../img/song_covers/42388294_800_800.jpg';
import bg2 from '../img/song_covers/clearhead.jpg';
import bg3 from '../img/song_covers/000377402250.jpg';
import bg4 from '../img/song_covers/lie2you.jpg';
import bg5 from '../img/song_covers/dreams.jpg';
import bg6 from '../img/song_covers/41855982.jpg';
import bg7 from '../img/song_covers/memories.jpg';


class Player2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playlist: [
      {id: 1, name:'Catch Me When I Fall', author: 'Arc North ft. Sarah de Warren', img: bg1, audio: track1}, 
      {id: 2, name:'Clear My Head', author: 'Ellis', img: bg2, audio:track2},
      {id: 3, name:'Ruby', author: 'Jim Yosef & Alex Skrindo', img: bg3, audio:track3},
      {id: 4, name:'Lie 2 You', author: 'Leonell Cassio', img: bg4, audio:track4},
      {id: 5, name:'Dreams', author: 'Lost Sky', img: bg5, audio:track5},
      {id: 6, name:'Till Dawn', author: 'Spce Cadex & Exede', img: bg6, audio:track6},
      {id: 7, name:'Memories', author: 'VETA', img: bg7, audio:track7}],
      random: 0,
      afterFirst: false,
    }
    this.handleClick = this.handleClick.bind(this);
  };

    handleClick() {
      if(this.state.afterFirst === false){
        this.state.afterFirst = true;
      }
      let rand = 0;
      let max = this.state.playlist.length;
      rand = Math.floor(Math.random() * max);
      this.setState({ random: rand });
    }

render(){
  const { playlist, random, afterFirst, playlistName } = this.state;
    return (
        <div className="App-player">
            <h2>Shuffle Play</h2>
            <div className="banner" style={{ backgroundImage: "url(" + Shuffle + ")"}}>
            <p>{playlist[random].name} by<br></br> {playlist[random].author}</p>
            <ReactAudioPlayer src={playlist[random].audio} autoPlay={false} controls onEnded={this.handleClick.bind(this)} autoPlay={afterFirst} />
            <button onClick={this.handleClick.bind(this)}>Shuffle</button>
            </div>

          {this.state.playlist.map(item =>
          <div key={item.id}>
            <div className="banner" style={{ backgroundImage: "url(" + item.img + ")"}}>
          <p>{item.name} by<br></br> {item.author}</p>
            <ReactAudioPlayer src={item.audio} autoPlay={false} controls />
            <LikeBtn />
            </div>
          </div>
          )}
        </div>
    );
  }
}
export default Player2;