import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import bg from '../../../bg.png'
import publicIP from 'react-native-public-ip';
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
        fullDate: '',
        showPray: '',
        showPrayTime: '',
        timeNow: '',
        prayTimeHour: '',
        prayTimeMin: '',
        iconSubuh: "md-notifications",
        iconDzuhur: "md-notifications",
        iconAsar: "md-notifications",
        iconMagrib: "md-notifications",
        iconIsya: "md-notifications",
        ipPublic: ''
    }
    async getAll() {
        await this.getIp()
        await this.dateCondition()
        await this.props.dispatch(getAll(this.state.fullDate, this.state.ipPublic))
        this.prayTimeCondition()
        this.countDownCondition()
    }
    async dateCondition() {
        var day = new Date().getDay();
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        if ((month.toString().length) < 2) {
            month = '0' + month
        }
        else {
            month = month
        }
        this.setState({
            day: day,
            date: date,
            month: month,
            year: year,
            hours: hours,
            min: min,
            sec: sec,
            timeNow: `${hours}:${min}`,
            fullDate: `${year}-${month}-${date}`
        });

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
        else if (day == 0) {
            this.setState({
                day: 'Ahad'
            })
        }
    }
    prayTimeCondition() {
        if (this.state.timeNow < this.props.jadwal.Fajr && this.state.timeNow < this.props.jadwal.Dhuhr) {
            this.setState({
                showPray: 'Subuh',
                showPrayTime: this.props.jadwal.Fajr
            })
        }
        else if (this.state.timeNow < this.props.jadwal.Dhuhr && this.state.timeNow < this.props.jadwal.Asr) {
            this.setState({
                showPray: 'Dzuhur',
                showPrayTime: this.props.jadwal.Dhuhr
            })
        }
        else if (this.state.timeNow < this.props.jadwal.Asr && this.state.timeNow < this.props.jadwal.Maghrib) {
            this.setState({
                showPray: 'Asar',
                showPrayTime: this.props.jadwal.Asr
            })
        }
        else if (this.state.timeNow < this.props.jadwal.Maghrib && this.state.timeNow < this.props.jadwal.Isha) {
            this.setState({
                showPray: 'Magrib',
                showPrayTime: this.props.jadwal.Maghrib
            })
        }
        else if (this.state.timeNow < this.props.jadwal.Isha && this.state.timeNow < this.props.jadwal.Fajr) {
            this.setState({
                showPray: `'Isya`,
                showPrayTime: this.props.jadwal.Isha
            })
        }
        else {
            this.setState({
                showPray: 'Subuh',
                showPrayTime: this.props.jadwal.Fajr
            })
        }

    }
    countDownCondition() {
        const prayTimeHourNow = (this.state.showPrayTime).substring(0, 2)
        const prayTimeMinNow = (this.state.showPrayTime).substring(3, 5)
        const Timenow = (((this.state.hours) * 60) + this.state.min)
        const prayTime = (((parseInt(prayTimeHourNow)) * 60) + parseInt(prayTimeMinNow))
        const prayTimeResultHour = (parseInt((prayTime - Timenow) / 60))
        const prayTimeResultMin = ((prayTime - Timenow) % 60)
        // console.log("gede",prayTime," - "," sekarang ",Timenow)
        if (this.state.timeNow > this.props.jadwal.Isha) {
            this.setState({
                prayTimeHour: prayTimeResultHour + (23),
                prayTimeMin: prayTimeResultMin + 60
            })
        }
        else {
            this.setState({
                prayTimeHour: prayTimeResultHour,
                prayTimeMin: prayTimeResultMin
            })
        }
    }
    async getIp() {
        await publicIP()
            .then(ip => {
                console.log(ip)
                this.setState({
                    ipPublic: ip
                })
            })
            .catch(error => {
                console.log(error);
                // 'Unable to get IP address.'
            });
    }
    async componentDidMount() {
        this.getAll()
    }
    render() {
        const { jadwal, isLoading } = this.props
        console.log(isLoading)
        return (
            <View style={styles.wrap}>
                <StatusBar backgroundColor="#5B0C9F" barStyle="light-content" />
                <Modal visible={isLoading} transparent={true} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                </Modal>
                <View style={styles.content1}>
                    <Image style={styles.imageBg} source={bg} resizeMode="contain" />
                    <View style={styles.wrapDate}>
                        <View style={styles.date}>
                            <Text style={styles.dateText1}>Hari ini</Text>
                            <Text style={styles.dateText2}>{this.state.day}, {this.state.date}-{this.state.month}-{this.state.year}</Text>
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
                            <Text style={styles.informationTimes}>{this.state.showPray} {this.state.showPrayTime}</Text>
                            <Text style={styles.informationPray}>{this.state.prayTimeHour} Jam {this.state.prayTimeMin} Menit Lagi</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content2}>
                    <View style={styles.wrapSchedule}>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Subuh</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Fajr}</Text>
                                <TouchableOpacity onPress={() => this.setState({ iconSubuh: this.state.iconSubuh == "md-notifications" ? "md-notifications-off" : "md-notifications" })}>
                                    <Icon style={styles.wrapScheduleDetailIcon} name={this.state.iconSubuh} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Dzuhur</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Dhuhr}</Text>
                                <TouchableOpacity onPress={() => this.setState({ iconDzuhur: this.state.iconDzuhur == "md-notifications" ? "md-notifications-off" : "md-notifications" })}>
                                    <Icon style={styles.wrapScheduleDetailIcon} name={this.state.iconDzuhur} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Asar</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Asr}</Text>
                                <TouchableOpacity onPress={() => this.setState({ iconAsar: this.state.iconAsar == "md-notifications" ? "md-notifications-off" : "md-notifications" })}>
                                    <Icon style={styles.wrapScheduleDetailIcon} name={this.state.iconAsar} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>Magrib</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Maghrib}</Text>
                                <TouchableOpacity onPress={() => this.setState({ iconMagrib: this.state.iconMagrib == "md-notifications" ? "md-notifications-off" : "md-notifications" })}>
                                    <Icon style={styles.wrapScheduleDetailIcon} name={this.state.iconMagrib} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.wrapScheduleDetail}>
                            <Text style={styles.wrapScheduleDetailText}>'Isya</Text>
                            <View style={styles.wrapScheduleDetail1}>
                                <Text style={styles.wrapScheduleDetailText}>{jadwal.Isha}</Text>
                                <TouchableOpacity onPress={() => this.setState({ iconIsya: this.state.iconIsya == "md-notifications" ? "md-notifications-off" : "md-notifications" })}>
                                    <Icon style={styles.wrapScheduleDetailIcon} name={this.state.iconIsya} />
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
    console.log(state)
    return {
        jadwal: state.jadwal.dayJadwal,
        isLoading: state.jadwal.isLoading
    }
}

export default connect(mapStateToProps)(Home)