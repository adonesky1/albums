//import a libary to help create a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'



//create a component
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    )
}



//render it to a device 
AppRegistry.registerComponent('albums', () => App)