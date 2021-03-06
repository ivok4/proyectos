import React,{useState, useEffect} from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight, StyleSheet, Button, Data} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Draggable from 'react-draggable'; 
import {DraggableCore} from 'react-draggable'; 
 


state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
const styles = StyleSheet.create({
	container: {
        backgroundColor: '#F5F5F5',       
        flex: 1,

    },   
});


const Players = (props) => {
    const { navigate } = props.navigation
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    return (
    <ScrollView  style={styles.container}>
        <View style={[styles.logo]}>
            <Text >Library</Text>
        </View>               
    </ScrollView>
    )
}
export default withNavigation(Players)