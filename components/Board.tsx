import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Row from "./Row";

export default function Board() {
    const [squares, setSquares] = useState<Array<string>>(Array<string>(9).fill(''));
    const [xIsNext, setXIsNext] = useState(true);

    const handlePlayer = () => xIsNext ? 'X' : 'O';

    const handlePress = (i: number) => {

        // create a copy of the squares array
        const squaresCopy = squares.slice();

        // set the square to the current player
        squaresCopy[i] = handlePlayer();
        // set the squares state to the copy
        setSquares(squaresCopy);

        // set the next player
        setXIsNext(!xIsNext);
    }

    return (
        <View style={styles.board}>
            <Row handlePress={handlePress} ids={[0, 1, 2]} squares={squares} />
            <Row handlePress={handlePress} ids={[3, 4, 5]} squares={squares} />
            <Row handlePress={handlePress} ids={[6, 7, 8]} squares={squares} />
        </View>
    );
}

const styles = StyleSheet.create({
    board: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})