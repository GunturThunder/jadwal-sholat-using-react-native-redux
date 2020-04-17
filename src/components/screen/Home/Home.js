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
        day: '',
        date: '',
        month: '',
        year: '',
        hours: '',
        date: '',
        min: '',
        sec: '',
        showPray: '',
        showPrayTime: ''

    }
    getAll() {
        this.props.dispatch(getAll())
    }
    dateCondition() {
        var day = new Date().getDay();
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        this.setState({
            day: day,
            date: date,
            month: month,
            year: year,
            hours: hours,
            min: min,
            sec: sec,
        });
        // month condition
        if (month === 1) {
            this.setState({
                month: 'Januari'
            })
        }
        else if (month == 2) {
            this.setState({
                month: 'Februari'
            })
        }
        else if (month == 3) {
            this.setState({
                month: 'Maret'
            })
        }
        else if (month == 4) {
            this.setState({
                month: 'April'
            })
        }
        else if (month == 5) {
            this.setState({
                month: 'Mei'
            })
        }
        else if (month == 6) {
            this.setState({
                month: 'Juni'
            })
        }
        else if (month == 7) {
            this.setState({
                month: 'Juli'
            })
        }
        else if (month == 8) {
            this.setState({
                month: 'Agustus'
            })
        }
        else if (month == 9) {
            this.setState({
                month: 'September'
            })
        }
        else if (month == 10) {
            this.setState({
                month: 'Oktober'
            })
        }
        else if (month == 11) {
            this.setState({
                month: 'November'
            })
        }
        else if (month == 12) {
            this.setState({
                month: 'Desember'
            })
        }
        // day condition
        if (day == 1) {
            this.setState({
                day: 'Senin'
            })
        }
        else if (day == 2) {
            this.setState({
                day: 'Selasa'
            })
        }
        else if (day == 3) {
            this.setState({
                day: 'Rabu'
            })
        }
        else if (day == 4) {
            this.setState({
                day: 'Kamis'
            })
        }
        else if (day == 5) {
            this.setState({
                day: `Jum'at`
            })
        }
        else if (day == 6) {
            this.setState({
                day: 'Sabtu'
            })
        }
        else if (day == 7) {
            this.setState({
                day: 'Ahad'
            })
        }
    }
    prayTimeCondition(){
        if(this.state.hours<this.props.jadwal.Dhuhr && this.props.jadwal.Dhuhr>this.state.hours) {
            this.setState({
                showPray: 'Subuh',
                showPrayTime: this.props.jadwal.Fajr
            })
        }
        // console.log(this.state.hours<this.props.jadwal.Dhuhr && this.props.jadwal.Dhuhr>this.state.hours)
        // else if(this.props.jadwal.Fajr<this.props.jadwal.Dhuhr && this.props.jadwal.Dhuhr>this.props.jadwal.Fajr) {
        //     this.setState({
        //         showPray: 'Subuh',
        //         showPrayTime: this.props.jadwal.Fajr
        //     })
        // }
    }
    componentDidMount() {
        this.getAll()
        this.dateCondition()
        this.prayTimeCondition()
    }
    render() {
        const { jadwal } = this.props
        // console.log(this.state.showPray,this.state.showPrayTime)
        // console.log("Sholat ",this.state.showPray,"Jam ",this.state.showPrayTime)
        // console.log("subuh < duhur dan duhur > subuh",jadwal.Fajr<jadwal.Dhuhr && jadwal.Dhuhr>jadwal.Fajr)
        // console.log("zuhur < asar",jadwal.Dhuhr<jadwal.Asr)
        // console.log("asar < magrib",jadwal.Asr<jadwal.Maghrib)
        // console.log("magrib < isya",jadwal.Maghrib<jadwal.Isha)
        return (
            <View style={styles.wrap}>
                <StatusBar backgroundColor="#5B0C9F" barStyle="light-content" />
                <View style={styles.content1}>
                    <Image style={styles.imageBg} source={bg} resizeMode="contain" />
                    <View style={styles.wrapDate}>
                        <View style={styles.date}>
                            <Text style={styles.dateText1}>Hari ini</Text>
                            <Text style={styles.dateText2}>{this.state.day}, {this.state.date} - {this.state.month} - {this.state.year}</Text>
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
                            <Text style={styles.informationTimes}>Maghrib {jadwal.Maghrib}</Text>
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
                            <Text style={styles.wrapScheduleDetailText}>Dzuhur</Text>
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
    return {
        jadwal: state.jadwal.dayJadwal
    }
}

export default connect(mapStateToProps)(Home)