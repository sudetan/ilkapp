import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>



                <View style={{ width: "100%", height: .5, backgroundColor: 'gray' }} />

                <View style={[{ marginTop: 15, paddingLeft: 30 }]}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Categories({ category: "soup" });
                            }}>
                            <Text style={styles.header}>Çorbalar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 1 });
                            }}>
                            <Text style={styles.item}>Yeşil Mercimek Çorbası</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 5 });
                            }}>
                            <Text style={styles.item}>Domates Çorbası</Text>
                        </TouchableOpacity>
                       
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Categories({ category: "dessert" });
                            }}>
                            <Text style={styles.header}>Tatlılar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 2 });
                            }}>
                            <Text style={styles.item}>Tahinli Kek</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 3 });
                            }}>
                            <Text style={styles.item}>Çilekli Rulo Pasta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 4 });
                            }}>
                            <Text style={styles.item}>Limonlu Cheesecake</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Categories({ category: "salad" });
                            }}>
                            <Text style={styles.header}>Salatalar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 6 });
                            }}>
                            <Text style={styles.item}>Avokado Soslu Brokoli Salatası</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 8 });
                            }}>
                            <Text style={styles.item}>Bal Kabaklı Siyah Mercimek Salatası</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Categories({ category: "maincourse" });
                            }}>
                            <Text style={styles.header}>Ana Yemekler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 7 });
                            }}>
                            <Text style={styles.item}>İmambayıldı</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 9 });
                            }}>
                            <Text style={styles.item}>Çökertme Kebabı</Text>
                        </TouchableOpacity>
                        
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        top: 72
    },
    textView: {
        height: 50,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#2C143D'
    },
    header: {
        fontSize: 20,
        color: 'black',
    },
    item: {
        fontSize: 18,
        color: 'gray',
        paddingLeft: 15
    }
});