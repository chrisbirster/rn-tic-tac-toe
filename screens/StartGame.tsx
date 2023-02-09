import { Button, StyleSheet, Text, View } from "react-native";

export default function GameStartScreen({ navigation }: { navigation: any}) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Would you like to play?</Text>
            <Button title="Start Game" onPress={() => navigation.navigate('Game')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    }
});
