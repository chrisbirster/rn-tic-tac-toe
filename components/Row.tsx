import { StyleSheet, View } from "react-native";
import Square from "./Square";

function renderSquare(handlePress: (i: number) => void, index: number, squares: Array<string>) {
    return (
        <Square
            key={index}
            text={squares[index]}
            index={index}
            handlePress={handlePress}
        />
    )
}

export default function Row({ handlePress, ids, squares }:
    {
        handlePress: (i: number) => void,
        ids: Array<number>,
        squares: Array<string>
    }) {
    return (
        <View style={styles.row}>
            {ids && ids.map((id) => renderSquare(handlePress, id, squares))}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    }
})