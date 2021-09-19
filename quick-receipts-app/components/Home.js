import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';



export default class Home extends React.Component {
  render() {
  return (

    
    <View style={styles.container}>
      
      <View style={styles.logoWrapper}>
      
      <Image 
        style= {{ width: 50, height: 45}}
        source= {require('../assets/logo_final.png')} />
        
        <Text style={styles.title} >QuickReceipts</Text>
      
      </View>
      

        <View style={styles.appButtonContainer}>
        <Text style={styles.appButtonText } onPress={() =>
        this.props.navigation.navigate('Camera', { name: 'Jane' }) }>Start</Text>
        </View>

        <View style={styles.appButton2Container}>
        <Text style={styles.appButtonText } onPress={() =>
        this.props.navigation.navigate('Receipts', { name: 'Jane' }) }>Show Receipts</Text>
        </View>
     
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    
  },
  title: {
    fontFamily: 'normal',
  
    fontSize: 34,
    color: "#FFFFFF",
    
  },
  logoWrapper:{
    paddingTop: 140,
    paddingHorizontal: 70,
    flexDirection: 'row',
    alignItems: 'center',

  },
  appButtonContainer:{
    position: 'absolute',
    bottom:100,
    left:150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'white',


  },
  appButton2Container:{
    position: 'absolute',
    bottom:50,
    left:110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'white',


  },
  appButtonText:{
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',

    
    

},
  
});
