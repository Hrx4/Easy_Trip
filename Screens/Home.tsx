import React from 'react';
import {
    Button,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../components/About';
import Choose from '../components/Choose';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import GroupTour from './GroupTour';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Group Tour',
    background: "https://images.pexels.com/photos/4453153/pexels-photo-4453153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route:"Group"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Temple Tour',
    background: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route:"Temple"

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Medical Tour',
    background: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route:"Medical"

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'EMI on Holiday',
    background: "https://images.pexels.com/photos/1352325/pexels-photo-1352325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route:"Emi"

  },
];

type ItemProps = {title: string , background: string , props:any , route:string , id:string};

const Item = ({title , background,props , route,id}: ItemProps) => (
    <ImageBackground source={{uri:background}} style={{ flex:1, marginVertical: 8 ,marginHorizontal: 16 , height:"auto"  }} resizeMode='cover'imageStyle={{borderRadius:10}} key={id} >
      <View style={{
        height:150,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}
      
      >
        
        <Text style={styles.title} onPress={()=>{props.navigation.navigate(route)}}>{title}</Text>
      </View>
    </ImageBackground>

);



const Home = ( props:any   )=> {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
  return (
      <SafeAreaView style={styles.container}>
        <View style={{ height:"12%" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
          <Image style={{height:80 , width:80 , borderRadius:100 , marginLeft:5}} source={require('../assets/logo.png')}/>
          <Icon name='menu' size={50} style={{marginRight:5}} />
        </View>

        
        <ScrollView>
          {
            DATA.map((item) => (
              <Item title={item.title} background={item.background} key={item.id} props={props} route={item.route} id={item.id}/>
            ))
          }

          <About props = {props}/>
          <Choose/>
          <Testimonials/>
          <Contact/>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  item: {
    
  },
  title: {
    color:"white",
    opacity:1,
    fontSize: 32,
  },
});


export default Home;
