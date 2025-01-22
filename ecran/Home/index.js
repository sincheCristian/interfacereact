import { View, Text, ScrollView, Image, FlatList,  } from 'react-native'
import React from 'react'
import dashBoardStyles from './styles.js';
import { FakeActivity } from '../../fakeData/fakeActivity.js';
import ActivityItem from '../../composants/activity/index.js';
import { fakeSymptome } from '../../fakeData/fakeSymptome.js';
import style from '../../ecran/Home/styles.js';
import SymptomeItem from '../../composants/symptomeItem/index.js';



const Home = () => {
  return (
    <ScrollView>
{/*DEBUT  du Header*/}
      <View style ={dashBoardStyles.header}>
      <Text style ={dashBoardStyles.userName}>Nareolle</Text>
      <Image source={require('../../assets/nareolle_bb.jpg')} style ={dashBoardStyles.userImg}/>
      </View>     
{/*FIN du Header*/}


{/*liste des activitées*/}
      <FlatList 
      data={FakeActivity}
      keyExtractor={item =>item.id}
      horizontal ={true}
      showsHorizontalScrollIndicator={false}
      style={style.scrollableList}
      renderItem = {({item})=>{
       return <ActivityItem item={item} />; 
      }}
      />
{/*liste des activitées fin*/}


{/*liste des symptomes*/}
    <View style={dashBoardStyles.title}>
      <Text>Quel symptome avez vous .?</Text></View>

    <FlatList 
      data={fakeSymptome}
      keyExtractor={item =>item.id}
      horizontal ={true}
      showsHorizontalScrollIndicator={false}
      style={style.scrollableList}
      renderItem = {({item})=>{
       return <SymptomeItem item={item} />; 
      }}
      /> 
{/*liste des symptomes fin*/}

      <View style={dashBoardStyles.title_space_between}>
      <Text>Nos Docteurs</Text>
      <Text>Afficher Tout</Text>
      </View>
    </ScrollView>
  )
}

export default Home