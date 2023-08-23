import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import GroupTour from './Screens/GroupTour';
import About from './components/About';
import AboutTour from './Screens/AboutTour';
import TempleTour from './Screens/TempleTour';
import MedicalTour from './Screens/MedicalTour';
import EmiHoliday from './Screens/EmiHoliday';

const Stack = createNativeStackNavigator();


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Group Tour',
    background: "https://images.pexels.com/photos/4453153/pexels-photo-4453153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Temple Tour',
    background: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Medical Tour',
    background: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'EMI on Holiday',
    background: "https://images.pexels.com/photos/1352325/pexels-photo-1352325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

type ItemProps = {title: string , background: string};

const Item = ({title , background}: ItemProps) => (
    <ImageBackground source={{uri:background}} style={{ flex:1, marginVertical: 8 ,marginHorizontal: 16 , height:"auto"  }} resizeMode='cover'imageStyle={{borderRadius:10}}>
      <View style={{
        height:150,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}>
        
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>

);



function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown :false}}>
        <Stack.Screen name="Home" component={Home} />          
        <Stack.Screen name='Group' component={GroupTour} />
        <Stack.Screen name='AboutPage' component={AboutTour} />
        <Stack.Screen name="Temple" component={TempleTour} />          
        <Stack.Screen name='Medical' component={MedicalTour} />
        <Stack.Screen name='Emi' component={EmiHoliday} />
      </Stack.Navigator>

    </NavigationContainer>
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


export default App;
