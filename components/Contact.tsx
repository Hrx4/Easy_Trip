import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

export default function Contact() {
  return (
    <View>
      <Text style={{fontSize:42 , margin:20}}>Contact Us</Text>
      <Text style={{fontSize:18 , marginLeft:20}}>
        +91 8273972645{"\n"}
        dragkamal71@gmail.com{"\n"}
        Street : 47209 Schmitt Summit {"\n"}
        City : durgapur{"\n"}
        State : West Bengal{"\n"}
        pin: 713352
      </Text>
      <MapView
        style={{height:400 , width:"80%" , marginRight:'auto' , marginLeft:'auto' , marginTop:10}}
        initialRegion={{
        latitude: 23.533440,
        longitude: 87.321930,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
        />

    </View>
  )
}