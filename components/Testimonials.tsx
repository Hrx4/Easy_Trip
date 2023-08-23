import React from 'react'
import { View, Text, Button, Image,Dimensions, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Group Tour',
      background: "https://images.pexels.com/photos/4453153/pexels-photo-4453153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      backgroundColor: "#EAFFD5"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Temple Tour',
      background: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      backgroundColor: "#D5D5FF"

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Medical Tour',
      background: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      backgroundColor: "#FFFFD5"

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'EMI on Holiday',
      background: "https://images.pexels.com/photos/1352325/pexels-photo-1352325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      backgroundColor: "#D5EAFF"

    },
  ];


export default function Testimonials() {
  return (
    <View style={{ width:"100%"}}>
      <Text style={{fontSize:42 , margin:20  }}>Testimonials</Text>

      <Carousel
      loop={true}
      layout='tinder'
      data={DATA}
      renderItem={({item , index }) => 
      {
        return(
          <View style={{height:450 , marginLeft:'auto' , marginRight:"auto"  }}>
            <View style={{backgroundColor:item.backgroundColor, width:300 , height:400 , justifyContent:"space-evenly" , alignItems:"center"  }}>
              <ImageBackground source={{uri:item.background}} style={{height:100 , width:100  }} imageStyle={{borderRadius:100}}/>
              <Text style={{fontSize:30}}>
                Kamal Paul
              </Text>
              <Text style={{fontSize:14 , margin:10}}>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur a id perspiciatis ducimus quo tenetur esse corrupti voluptatibus laboriosam, sequi, modi vel libero fuga vitae sed error, fugit mollitia labore. Eius ex placeat repellat ab."              
                </Text>
            
            </View>

             
          </View>
        )
      }    
    }
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={Dimensions.get('screen').width}
      
      />


            
    </View>
  )
}