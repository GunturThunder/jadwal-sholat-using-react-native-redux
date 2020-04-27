import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PushNotification from 'react-native-push-notification'

class Test5 extends Component {
    constructor() {
        super();
        PushNotification.configure({
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                //   notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            // senderID: "YOUR GCM (OR FCM) SENDER ID",
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
        });
    }
    testPush = () => {
        PushNotification.localNotification({
            title: "My Notification Title", // (optional)
            message: "My Notification Message", // (required)
        });
    }
    render() {
        return (
            <View>
                <Text>Test5</Text>
            </View>
        )
    }
}

export default Test5