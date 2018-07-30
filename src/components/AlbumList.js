import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios'
import AlbumDetail from './albumDetail'

class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            albums: []
        }
    }

    componentWillMount(){
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => 
        this.setState({albums: response.data}, ()=> console.log("albums state", this.state.albums))
       )
    }

    renderAlbums(){
        console.log("when called:", this.state.albums)
        return this.state.albums.map(album =>{
            return <AlbumDetail album={album} key={album.title} />
            })
    }


    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>    
     ) ; 
    }
};

export default AlbumList
