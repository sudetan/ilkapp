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
                <View style={styles.textView}>
                    <TouchableOpacity onPress={() => Actions.Homepage()}><Text style={styles.title}> Ana Sayfa </Text></TouchableOpacity>
                </View>

                <View style={styles.textView}>
                    <TouchableOpacity onPress={() => Actions.drawerClose()}><Text style={styles.title}> Kapat </Text></TouchableOpacity>
                </View>

                <View style={styles.textView}>
                    <TouchableOpacity onPress={() => Actions.pop()}><Text style={styles.title}> Geri </Text></TouchableOpacity>
                </View>

                <View style={{ width: "100%", height: .5, backgroundColor: 'gray' }} />

                <View style={[{ marginTop:15, paddingLeft: 30 }]}>
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
                            <Text style={styles.item}>Mercimek Çorbası</Text>
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
                            <Text style={styles.item}>Cheesecake</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 3 });
                            }}>
                            <Text style={styles.item}>Sütlaç</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Detail({ id: 4 });
                            }}>
                            <Text style={styles.item}>Güllaç</Text>
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
        paddingLeft:15
    }
});