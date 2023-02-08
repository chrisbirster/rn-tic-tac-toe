import { Pressable, StyleSheet, Text, View } from "react-native"

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
        borderWidth: 1,
        width: 80,
        height: 80,
      },
      squareText: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})