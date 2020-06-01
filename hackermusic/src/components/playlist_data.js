import React from 'react';
import '../App.css';
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

class Playlist {
    constructor(id, name, author, img, audio) {
      this.id = id;
      this.name = name;
      this.author = author;
      this.img = img;
      this.audio = audio;
    }
  }

  
playlist = new Playlist(1, 'Catch Me When I Fall', 'Arc North ft. Sarah de Warren', bg1, track1), 
    (2, 'Clear My Head', 'Ellis', bg2, track2),
    (3, 'Ruby', 'Jim Yosef & Alex Skrindo', bg3, track3),
    (4, 'Lie 2 You',  'Leonell Cassio', bg4, track4),
    (5, 'Dreams', 'Lost Sky',  bg5, track5),
    (6, 'Till Dawn', 'Spce Cadex & Exede', bg6, track6),
    (7, 'Memories', 'VETA', bg7, track7);  
export default playlist_data;
