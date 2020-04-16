import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import bg from '../../../bg.png'
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'white'
    },
    content1: {
        height: '50%',
    },
    content2: {
        height: '50%',
    },
    imageBg: {
        width: '100%',
        height: '76%'
    },
    wrapDate: {
        flex: 1,
        backgroundColor: '#58306C',
    },
    date: {
        marginHorizontal: 34,
        flex: 1,
        justifyContent: 'center'
    },
    menuWrap: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    menu: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 17
    },
    menuText: {
        color: 'white',
        fontSize: 16,
    },
    menuIcon: {
        color: 'white',
        fontSize: 25
    },
    dateText1: {
        color: 'white',
        fontSize: 18
    },
    dateText2: {
        color: 'white'
    },
    information: {
        marginTop: 32,
        alignItems: 'center'
    },
    informationTimes: {
        fontSize: 41,
        color: 'white'
    },
    informationPray: {
        fontSize: 16,
        color: 'white'
    },
    wrapSchedule: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 30,
        justifyContent: 'space-between'
    },
    wrapScheduleDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    wrapScheduleDetail1: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between'
    },
    wrapScheduleDetailText: {
        fontSize: 18,
        color: '#848484'
    },
    wrapScheduleDetailIcon: {
        fontSize: 25,
        color: '#848484'
    }
})

class Home extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <StatusBar backgroundColor="#5B0C9F" barStyle="light-content" />
                <View style={styles.content1}>
                    <Image style={styles.imageBg} source={bg} resizeMode="contain" />
                    <View style={styles.wrapDate}>
                        <View style={styles.date}>
                            <Text style={styles.dateText1}>Hari ini</Text>
                            <Text style={styles.dateText2}>Jum'at, 30 Juni 2020</Text>
                        </View>
                    </View>
                    <View style={styles.menuWrap}>
                        <View style={styles.menu}>
                            <TouchableOpacity>
                                <Icon style={styles.menuIcon} name="md-options" />
                            </TouchableOpacity>
                            <Text style={styles.menuText}>Waktu Sholat</Text>
                            <TouchableOpacity>
                                <Icon style={styles.menuIcon} name="md-settings" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.information}>
                            <Text style={styles.informationTimes}>Isya 07:06</Text>
                            <Text style={styles.informationPray}>2 Jam 25 Menit Lagi</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content2}>
                    <View style={styles.wrapSchedule}>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Subuh</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>04.43 AM</Text>
                                <TouchableOpacity>
                                    <Icon style={styles.wrapScheduleDetailIcon} name="md-notifications" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Dzhuhur</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>04.43 AM</Text>
                                <TouchableOpacity>
                                    <Icon style={styles.wrapScheduleDetailIcon} name="md-notifications" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Asar</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>04.43 AM</Text>
                                <TouchableOpacity>
                                    <Icon style={styles.wrapScheduleDetailIcon} name="md-notifications" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Magrib</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>04.43 AM</Text>
                                <TouchableOpacity>
                                    <Icon style={styles.wrapScheduleDetailIcon} name="md-notifications" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>'Isya'</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>04.43 AM</Text>
                                <TouchableOpacity>
                                    <Icon style={styles.wrapScheduleDetailIcon} name="md-notifications" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default Home