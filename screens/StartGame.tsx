import { StyleSheet, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";
import Colors from "../constants/colors";

export default function GameStartScreen({ navigation }: { navigation: any }) {

    return (
        <MainLayout>
            <Text style={styles.text}>TIC</Text>
            <Text style={styles.text}>TAC</Text>
            <Text style={styles.text}>TOE</Text>
            <Button title="Play" onPress={() => navigation.navigate('Game')} />
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    text: {
        color: Colors.accent500,
        fontSize: 60,
        letterSpacing: 10,
        lineHeight: 100,
        fontWeight: '900',
        margin: 20,
    },
});
