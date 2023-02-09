import { Pressable, StyleSheet, Text, View } from "react-native"
import Colors from "../constants/colors"

export default function Square({ text, index, handlePress }: {
    text: string, index: number,
    handlePress: (i: number) => void
}) {
    return (
        <Pressable
            style={styles.square}
            onPress={() => handlePress(index)}
        >
            <View>
                <Text style={styles.squareText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    square: {
        justifyContent: 'center',
        backgroundColor: Colors.secondary500,
        borderWidth: 1,
        borderColor: Colors.primary500,
        width: 80,
        height: 80,
        margin: 2,
        borderRadius: 10,
      },
      squareText: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primary600,
    },
})