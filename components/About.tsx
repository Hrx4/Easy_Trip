import { View, Text, Button } from 'react-native'
import React from 'react'

const About = ({props}:any) => {
  return (
    <View style={{ margin:20}}>
      <Text style={{fontSize:42 }}>About Us</Text>
      <Text style={{fontSize:20 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus praesentium doloribus ex at quae corrupti cum porro aliquid facere aut voluptate, nam doloremque quibusdam blanditiis vel ut error, nemo magnam commodi inventore, delectus quo autem. Sint nam velit blanditiis asperiores debitis, minus, nisi dolore ipsam, eveniet impedit libero magni possimus quidem itaque eligendi exercitationem eum! Cumque temporibus incidunt obcaecati dolorem distinctio reiciendis facere sed impedit odit eaque, quaerat praesentium nihil ratione, illum voluptas recusandae, eos quod rem inventore? Consequuntur nam vitae repellendus hic, iusto facere quam non amet, optio aperiam, corporis porro distinctio exercitationem rem harum tempora nostrum ut minima.
      </Text>
      <View style={{width:"40%" , marginTop:10 }}>
      <Button title='press me' onPress={()=>{props.navigation.navigate("AboutPage")}} />
      </View>
      
    </View>
  )
}

export default About