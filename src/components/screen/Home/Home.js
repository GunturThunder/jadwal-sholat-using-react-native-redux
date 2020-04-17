import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import bg from '../../../bg.png'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { getAll } from '../../redux/action/jadwal'

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
        width: '35%',
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
    state = {
        date: '',
        month: '',
        year: '',
        hours: '',
        date: '',
        min: '',
        sec: '',

    }
    getAll() {
        this.props.dispatch(getAll())
    }

    componentDidMount() {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        this.setState({
            date: date,
            month: month,
            year: year,
            hours: hours,
            min: min,
            sec: sec,
          });
        this.getAll()
    }
    render() {
        const { jadwal } = this.props
        return (
            <View style={styles.wrap}>
                <StatusBar backgroundColor="#5B0C9F" barStyle="light-content" />
                <View style={styles.content1}>
                    <Image style={styles.imageBg} source={bg} resizeMode="contain" />
                    <View style={styles.wrapDate}>
                        <View style={styles.date}>
                            <Text style={styles.dateText1}>Hari ini</Text>
                            <Text style={styles.dateText2}>Jum'at, {this.state.date} - {this.state.month} - {this.state.year}</Text>
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
                            <Text style={styles.informationTimes}>Dzhuhur {jadwal.Dhuhr}</Text>
                            <Text style={styles.informationPray}>2 Jam 25 Menit Lagi</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content2}>
                    <View style={styles.wrapSchedule}>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Subuh</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Fajr}</Text>
                                <TouchableOpacity>
                                    <Icon style={styles.wrapScheduleDetailIcon} name="md-notifications" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Dzhuhur</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Dhuhr}</Text>
                                <TouchableOpacity>
                                    <Icon style={styles.wrapScheduleDetailIcon} name="md-notifications" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Asar</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Asr}</Text>
                                <TouchableOpacity>
                                    <Icon style={styles.wrapScheduleDetailIcon} name="md-notifications" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Magrib</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Maghrib}</Text>
                                <TouchableOpacity>
                                    <Icon style={styles.wrapScheduleDetailIcon} name="md-notifications" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>'Isya</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Isha}</Text>
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

const mapStateToProps = (state) => {
    // console.log('home ',state.jadwal.dayJadwal)
    return {
        jadwal: state.jadwal.dayJadwal
    }
}

export default connect(mapStateToProps)(Home)