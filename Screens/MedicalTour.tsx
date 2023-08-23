import { View, Text, Button, ScrollView,SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Choose from '../components/Choose'
import Testimonials from '../components/Testimonials'
import TourForm from '../components/Form'
import Header from '../components/Header'

export default function MedicalTour({navigation  }:any) {
  return (
    <SafeAreaView>
      <Header navigation={navigation} headerContent={"Medical Tour"}/>
      <ScrollView>
      <View>
        <View style={{margin:20}}>
        <Text style={{fontSize:34 }}>Easy Trip Medical Tour</Text>
        <Text style={{fontSize:20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit voluptates explicabo rem quis. Illum placeat fuga distinctio nam esse dolorum tempore enim! Quod consequuntur suscipit aliquam soluta tempora nulla magni blanditiis facere obcaecati. Voluptate expedita nihil quis consequuntur vel!
        </Text>
        <ImageBackground source={{uri:"https://img.freepik.com/premium-photo/joint-trip-mountains-big-company_275234-73.jpg?w=1060"}}>
          <View style={{height:240  }}>

          </View>
        </ImageBackground>
        </View>
      <Choose/>
      <Testimonials/>
      <TourForm/>
      
      <Button title='back' onPress={()=>{navigation.goBack()}}/>
        
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}