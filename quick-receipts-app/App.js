import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



export default class App extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      
      <View style={styles.logoWrapper}>
      
      <Image 
        style= {{ width: 50, height: 45}}
        source= {require('./assets/logo_final.png')} />
        
        <Text style={styles.title} >QuickReceipts</Text>
      
      </View>

      <TouchableOpacity>
        <View style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Start</Text>
        </View>
      </TouchableOpacity>
     
      
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
    bottom:-550,
    left:150,
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
