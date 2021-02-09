import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import recipesData from '../data/Recipes.json'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount(){
        this.getTitle()
    }

    getTitle() {
        recipesData.forEach(recipe => {
            if (recipe.id == this.props.id) {
                this.setState({ recipe })
            }
        });
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                {this.state.recipe ?
                    <View>
                        <Text>Yemek Adı : {this.state.recipe.title}</Text>
                        <Text>Puan : {this.state.recipe.rate}</Text>
                    </View> : 
                    <ActivityIndicator color={'black'} />
                }
            </View>
        )
    }
}
