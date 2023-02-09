import { Button, Text, View } from "react-native";

export default function GameOverScreen({ route, navigation }: { route: any, navigation: any } ) {

    const { winner } = route.params;

    return (
        <View>
            <Text>{ winner ? `Winner: ${winner}` : 'It was a Draw.'}</Text>
            <Button title="Reset Game" onPress={() => navigation.navigate('Start')} />
        </View>
    )
}