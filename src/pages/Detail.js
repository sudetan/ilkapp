import React, { Component } from 'react'
import { ActivityIndicator, Text, View, Image, StyleSheet, ScrollView, } from 'react-native'
import { Rating, RecipeRating } from 'react-native-ratings';



import recipesData from '../data/Recipes'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.getTitle()
    }

    getTitle() {
        recipesData.forEach(recipe => {
            if (recipe.id == this.props.id) {
                this.setState({ recipe })
            }
        });
    }
    ingredients = (items) => (
        items.map((item, i) => {
            return (
                <Text key={i} style={styles.sude}
                >{item.ingredient}

                </Text>

            );
        })
    );
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '' }}>
                {this.state.recipe ?
                    <View style={{ backgroundColor: '', flex: 1, width: '100%' }}>
                        <Image style={styles.image} source={this.state.recipe.image} />
                        <Text style={styles.ratetext}>Puan : {this.state.recipe.rate} </Text>
                        <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={20}
                            startingValue={parseFloat(this.state.recipe.rate)}
                            readonly
                            ratingColor={'red'}
                            style={styles.star1}
                            
                        />
                        <Text style={styles.titletext}> {this.state.recipe.title}</Text>
                        <ScrollView style={styles.scrollview}>
                            <Text style={styles.malzemelertext}> Malzemeler : </Text>
                            {this.state.recipe.ingredients ? this.ingredients(this.state.recipe.ingredients) : <ActivityIndicator color={'black'} />}
                            <Text style={styles.malzemelertext}> Tarif : </Text>

                            <Text style={styles.recipetext}>  {this.state.recipe.recipe}</Text>




                        </ScrollView>
                    </View> :

                    <ActivityIndicator color={'black'} />





                }


            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 200,
        height: 300,
        left: 10,
        borderWidth: 15,
        borderRadius: 12,
        top: 48,
        marginBottom: 30,
        marginTop:10
    },
    sude: {
        fontSize: 17,
        color: '#453235',
        left: 15,



    },
    ratetext: {
        color: '#E0B707',
        fontWeight: 'bold',
        fontSize: 25,
        left: 245,
        bottom: 150
    },
    titletext: {
        color: '#94421B',
        fontWeight: 'bold',
        fontSize: 25,


    },
    recipetext: {
        fontSize: 17,
        left:7,
        bottom: 30,
        zIndex:999,
        marginTop:25
        

    },
    malzemelertext: {
        color: '#094270',
        fontWeight: 'bold',
        fontSize: 19,
        left: 10

    },
    scrollview: {
        width: '100%',

        flex: 1,



    },
    star1: {
        
        left:110,
        bottom: 140,
    


    }

})