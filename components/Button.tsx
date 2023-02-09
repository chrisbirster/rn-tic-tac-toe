import { Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";

export default function Button ({ title, onPress }: { title: string, onPress: () => void }) {

    return (
        <Pressable 
            style={({pressed}) => [
                {
                    backgroundColor: pressed ? Colors.primary600: Colors.primary500, 
                },
                styles.button,
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    }
});
