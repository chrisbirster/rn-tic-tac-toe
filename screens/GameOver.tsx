import { Image, StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";
import Colors from "../constants/colors";

export default function GameOverScreen({ route, navigation }: { route: any, navigation: any } ) {
    const { winner } = route.params;

    return (
        <MainLayout>
            <Text style={styles.text}>{ winner ? `Winner: ${winner}` : 'It was a Draw.'}</Text>
            <View style={styles.spacer}/>
            <Image style={styles.img} source={require('../assets/images/finish.jpg')} />
            <Button title="Reset" onPress={() => navigation.navigate('Start')} />
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.accent500,
        fontSize: 60,
        letterSpacing: 10,
        lineHeight: 100,
        fontWeight: '900',
        textAlign: 'center',
    },
    spacer: {
        height: 50,
    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 200,
        margin: 20,
    }
});

