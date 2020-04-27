import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Tabs, Tab, ScrollableTab, Container, Header } from 'native-base'
import Home from './Home'
import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4'
import Test5 from './Test5'


class Footer extends Component {
    render() {
        return (
            <Container>
                <Tabs tabBarPosition="bottom" renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Tab1">
                        <Home />
                    </Tab>
                    <Tab heading="Tab2">
                        <Test2 />
                    </Tab>
                    <Tab heading="Tab3">
                        <Test3 />
                    </Tab>
                    <Tab heading="Tab4">
                        <Test4 />
                    </Tab>
                    <Tab heading="Tab5">
                        <Test5 />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default Footer