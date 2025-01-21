import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import dashBoardStyles from './styles.js';
import { FakeActivity } from '../../fakeData/fakeActivity.js';

const Home = () => {
  return (
    <ScrollView>
      {/*DEBUT  du Header*/}
      <View style ={dashBoardStyles.header}>
      <Text style ={dashBoardStyles.userName}>Nareolle</Text>
      <Image source={require('./../../assets/nareollebb.jpg')}style={dashBoardStyles.userImg}/> 
      </View>     
      {/*FIN  du Header*/}


      {/*liste des activitées*/}
      <FlatList 
      data={FakeActivity}
      keyExtractor={item =>item.id}
      horizontal ={true}
      showsHorizontalScrollIndicator={false}
      style={dashBoardStyles.scrollableList}

      renderItem = {({item})=>{
       return(
       <TouchableOpacity style={dashBoardStyles.scrollableItem}>
        <Text style={dashBoardStyles.mainText}>{item.mainText}</Text>
        <Text style={dashBoardStyles.subtext}>{item.subText}</Text>
      </TouchableOpacity>); 
      }}
      />
      {/*liste des activitées fin*/}



    </ScrollView>
  )
}

export default Home