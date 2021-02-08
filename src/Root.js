import React, { Component } from 'react';

import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';

import Homepage from './pages/Homepage';
import Favorites from './pages/Favorites';
import Detail from './pages/Detail';
import SideBar from './components/SideBar';




export default class Root extends Component {


    render() {
        return (
            <Router>
                          <Drawer drawerWidth={250} contentComponent={SideBar}>

                <Stack key="root">
                    <Scene
                        key="Homepage"
                        component={Homepage}
                        initial
                        hideNavBar
                    />
                    <Scene
                        key="Favorites"
                        component={Favorites}
                        hideNavBar

                    />
                    <Scene
                        key="Detail"
                        component={Detail}
                        hideNavBar

                    />

                </Stack>
                </Drawer>
            </Router>
        );
    }
}