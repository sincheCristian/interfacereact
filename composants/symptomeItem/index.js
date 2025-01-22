import {  Text,TouchableOpacity,Image, View } from 'react-native'
import React from 'react';
import SymptomStyle from './style';


const SymptomeItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style ={SymptomStyle.item}>
      <Image  
        source={require('../../assets/img.jpeg')} 
        style ={SymptomStyle.itemImg} />
        <Text style={{}}>{item.libele}</Text>
      </View>
    
  </TouchableOpacity>
  )
}
export default SymptomeItem;