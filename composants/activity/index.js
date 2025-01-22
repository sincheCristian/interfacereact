import { Text,TouchableOpacity } from 'react-native'
import React from 'react'
import SVG_HOPITAL from '../../svg/icone.svg';
import dashBoardStyles from '../../ecran/Home/styles';

const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={dashBoardStyles.scrollableItem}>
    < SVG_HOPITAL width={60} height={60} />
    <Text style={dashBoardStyles.mainText}>{item.mainText}</Text>
    <Text style={dashBoardStyles.subtext}>{item.subText}</Text>
  </TouchableOpacity>
  );  
}

export default ActivityItem;