import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { FontAwesome5 } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
//

export default class Homepage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesome5 name={'ellipsis-v'}
          size={45}
          color={'#7225A8'}
          style={styles.drawerIcon}
          onPress={() => {
            Actions.drawerToggle()
          }}
        />
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.newview}>
              <View style={styles.shadow}>
                <Image
                  source={require('../../assets/logo.png')}
                  resizeMode="contain"
                  style={styles.logo}
                ></Image>
              </View>
              <Image
                source={require('../../assets/isim.png')}
                resizeMode="contain"
                style={[styles.logo, { marginTop: -15, }]}
              ></Image>
            </View>
            <Text style={styles.entryText}>Hello,Sude!</Text>
          </View>
          <Text style={styles.baseText}>Welcome to the food
            <Text style={styles.innerText}> paradise</Text>
          </Text>
        </View>
        <View style={styles.swiperContainer}>
          <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Öne Çıkanlar</Text>
              <Image
                source={require('../../assets/onecikan1.jpg')}
                style={styles.image}
              />
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Öne Çıkanlar</Text>
              <Image
                source={require('../../assets/onecikan8.jpg')}
                style={styles.image}
              />
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Öne Çıkanlar</Text>
              <Image
                source={require('../../assets/onecikan5.jpg')}
                style={styles.image}
              />
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
    top: 75
  },
  image: {
    resizeMode: 'cover',
    width: "100%",
    height: "100%"
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
    borderWidth:5,
    borderColor:'#fff',
  },
  logoContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {

  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  text: {
    color: "white",
    backgroundColor: 'black',
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 16,
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 3,
    top: 10,
    left: 10,
    zIndex: 9999
  },
  entryText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'rgba(0,0,0,0.4)',
    left: 65,
    width:100
  },
  baseText: {
    fontWeight: 'bold',
    top: 35,
    fontSize: 30
  },
  innerText: {
    color: 'red'
  },
  wrapper: {

  },
  slide1: {
    width: "100%",
    height: 250,
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    width: "100%",
    height: 250,
    backgroundColor: '#97CAE5'
  },
  slide3: {
    width: "100%",
    height: 250,
    backgroundColor: '#92BBD9'
  },
  newview: {
    alignItems:'center',
  }
})
