import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import Swiper from 'react-native-swiper'
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';




export default class Homepage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesome name={'ellipsis-v'}
          size={45}
          color={'#7225A8'}
          style={styles.drawerIcon}
          onPress={() => {
            Actions.drawerToggle()
          }}

        />

        <View style={styles.header}>
          <View style={styles.shadow}>

            <Image
              source={require('../../assets/anasayfa.png')}
              resizeMode="contain"

              style={styles.logo}
            ></Image>
            <Text style={styles.entryText}>Hello,Sude!</Text>



          </View>

          <Text style={styles.baseText}>Welcome to the food<Text
            style={styles.innerText}> paradise</Text>
          </Text>
        </View>
<TextInput
style={styles.searchbarstyle}
placeholder={'search...'}
ref={this.value}
/>

        <View style={styles.swiperContainer}>
          <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Öne Çıkanlar</Text>

            </View>
            <View style={styles.slide2}>
              <Image
                source={require('../../assets/onecikan1.jpg')}
                resizeMode='center'



                style={styles.image}
              ></Image>
            </View>
            <View style={styles.slide3}>
              <Image
                source={require('../../assets/onecikan5.jpg')}
                resizeMode="center"



                style={styles.image}
              ></Image>


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
    height: 290,
    top: 175







  },
searchbarstyle:{
  width:'100%',
  height:50,
  borderColor:'black',
  borderWidth:5,
  borderRadius:6,
  top:80,
  paddingLeft:9

},

  image: {
    resizeMode: 'stretch'


  },
  drawerIcon: {
    position: 'absolute',
    top: 100,
    right: 25


  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    borderRadius: 45,

    elevation: 20,
    width: 100,
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',


  },
  header: {






  },


  logo: {
    width: 100,
    height: 100,
    borderRadius: 25,











  },
  text: {
    color: "#121212",
    fontWeight: 'bold',
    elevation: 20


  },
  entryText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'rgba(0,0,0,0.4)',
    left: 65
  },
  baseText: {
    fontWeight: 'bold',
    top: 15,
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
