import React, { Component } from 'react'
import { Text, View,StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import recipesData from '../data/Recipes.json'

export default class Categories extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : ""
        }
        
    }

    componentDidMount(){
        let tempArr = []
        recipesData.forEach(recipe => {
            if (this.props.category == recipe.category) {
                tempArr.push(recipe)
            }
        });
        this.setState({data:tempArr})
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Kategoriler </Text>
                {this.state.data ? <FlatList
                    data={this.state.data}
                    renderItem={(data) => (
                    <TouchableOpacity
                    onPress={()=>Actions.Detail({id:data.item.id})}>
                        <Text style={styles.item}> {data.item.title} </Text>
                    </TouchableOpacity>)}
                    style={{paddingHorizontal:5}}
                /> : <ActivityIndicator/>}
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
    title:{
        fontSize:30
    },
    item:{
        backgroundColor:'green',
        padding:5,
        borderRadius:10,
        color:'white',
        fontSize:20,
        marginVertical:5
    }
  })
  