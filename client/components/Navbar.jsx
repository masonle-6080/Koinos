import {Text, View} from 'react-native'
import {Link} from 'expo-router'
import {styles} from '../styles'

export default function Navbar() {
    return(
        <View style={styles.navbar}>
            <Link href='/'>home</Link>
            <Link href='/settings'>settings</Link>
            <Link href='/list'>list</Link>

        </View>
    );
}