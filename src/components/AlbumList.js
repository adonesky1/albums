import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'
// export default AlbumList = () => {
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
        this.setState({albums: response.data})
       )
    }

    render(){
        console.log("STATES", this.state)
        return (
            <View>
             <Text>Album List!!!</Text>
            </View>    
     ) ; 
    }
};

export default AlbumList
