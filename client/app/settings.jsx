import {Text, View} from 'react-native'
import Navbar from '../components/Navbar'

import {styles} from '../styles'

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.text, styles.title}>settings</Text>
            <Navbar></Navbar>
        </View>
    );
}