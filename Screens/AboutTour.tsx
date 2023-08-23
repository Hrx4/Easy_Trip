import { View, Text,SafeAreaView,ScrollView , ImageBackground} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Choose from '../components/Choose'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const AboutTour = (props:any) => {
  return (
    <SafeAreaView>
        <Header navigation={props.navigation} headerContent={"About"}/>
        <ScrollView>
                <View style={{margin:20}}>
                    <Text style={{fontSize:36 }}>Easy Trip Group Tour</Text>
                    <Text style={{fontSize:20 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit voluptates explicabo rem quis. Illum placeat fuga distinctio nam esse dolorum tempore enim! Quod consequuntur suscipit aliquam soluta tempora nulla magni blanditiis facere obcaecati. Voluptate expedita nihil quis consequuntur vel!
                    </Text>
                    <ImageBackground source={{uri:"https://img.freepik.com/premium-photo/joint-trip-mountains-big-company_275234-73.jpg?w=1060"}}>
                    <View style={{height:240 }}>

                    </View>
                    </ImageBackground>
                    <Text style={{fontSize:36 }}>Our Mission</Text>
                    <Text style={{fontSize:20 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit voluptates explicabo rem quis. Illum placeat fuga distinctio nam esse dolorum tempore enim! Quod consequuntur suscipit aliquam soluta tempora nulla magni blanditiis facere obcaecati. Voluptate expedita nihil quis consequuntur vel!
                    </Text>
                    <Text style={{fontSize:36 }}>Our Vision</Text>
                    <Text style={{fontSize:20 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit voluptates explicabo rem quis. Illum placeat fuga distinctio nam esse dolorum tempore enim! Quod consequuntur suscipit aliquam soluta tempora nulla magni blanditiis facere obcaecati. Voluptate expedita nihil quis consequuntur vel!
                    </Text>
                </View>
                <Choose/>
                <Testimonials/>
                <Contact/>
        </ScrollView>
    </SafeAreaView>


  )
}

export default AboutTour