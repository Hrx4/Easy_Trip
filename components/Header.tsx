import { View, Text,Dimensions,SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';


const Header = ({navigation , headerContent} :any) => {
    const windowWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView>
        <View style={{flexDirection:"row" , width:"100%" }}>
      <Icon name='arrowleft' size={34} style={{margin:5}} onPress={()=>{navigation.goBack()}} />
      <Text style={{fontSize:30  ,marginLeft:"20%" , justifyContent:"center" , alignItems:"center" }}>{headerContent}</Text>
    </View>
    </SafeAreaView>
  )
}

export default Header