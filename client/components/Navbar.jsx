import {Text, View} from 'react-native'
import {Link} from 'expo-router'

export default function Navbar() {
    return(
        <View>
            <Link href='/'>Home</Link>
            <Link href='/settings'>settings</Link>

        </View>
    );
}