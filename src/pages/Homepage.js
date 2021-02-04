import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'


export default class Homepage extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Image
                                        source={require('../../assets/anasayfa.png')}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                    <Text style={styles.text}>Welcome to the food paradise</Text>
                    <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
                </View>
            
        )
        }
    }



      
      
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: '#D14F15'
    },
    
    
    image: {
      top: 13,
      width:145,
      height: 190,
      position: "absolute",
      left: 0
    },
    text: {
      top: 88,
      left: 164,
      position: "absolute",
      color: "#121212",
      fontSize: 16,
      fontWeight:'bold'
      
    },
    wrapper: {
      height:200

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
text: {
  color: '#fff',
  fontSize: 30,
  fontWeight: 'bold'
}

   
})
