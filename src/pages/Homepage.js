import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'


export default class Homepage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.shadow}>

            <Image
              source={require('../../assets/anasayfa.png')}
              resizeMode="contain"

              style={styles.image}
            ></Image>         
            <Text style={styles.entryText}>Hello,Sude!</Text>

          </View>
     
          <Text style={styles.baseText}>Welcome to the food<Text
            style={styles.innerText}> paradise</Text>
          </Text>
        </View>


        <View style={styles.swiperContainer}>
          <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Öne Çıkanlar</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}></Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}></Text>
            </View>
          </Swiper>
        </View>
      </View>

    )
  }
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    paddingTop: 75


  },
  swiperContainer: {
    height: 230,
    top: 175







  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    borderRadius:45,

    elevation: 20,
    width: 100,
    height: 100,
    backgroundColor: 'white',
    flexDirection:'row',
    alignItems:'center',
    

  },
  header: {






  },


  image: {
    width: 100,
    height: 100,
    borderRadius:25,











  },
  text: {
    color: "#121212",
    fontWeight: 'bold',
    elevation: 20


  },
  entryText: {
    fontWeight:'bold',
    fontSize:18,
    color:'rgba(0,0,0,0.4)',
    left:65
  },
  baseText: {
    fontWeight: 'bold',
    top:15,
    fontSize: 30

  },
  innerText: {
    color: 'red'
  },


  wrapper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },



})
