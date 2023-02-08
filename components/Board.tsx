import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Row from "./Row";

export default function Board() {
    const [squares, setSquares] = useState<Array<string>>(Array<string>(9).fill(''));
    const [xIsNext, setXIsNext] = useState(true);

    const handlePlayer = () => xIsNext ? 'X' : 'O';

    const checkWinner = (squares: Array<string>) => {
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const checkDraw = (squares: Array<string>) => {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === '') {
                return false;
            }
        }
        return true;
    }

    const handlePress = (i: number) => {
        if (squares[i]) {
            return;
        }

        // create a copy of the squares array
        const squaresCopy = squares.slice();

        // set the square to the current player
        squaresCopy[i] = handlePlayer();

        // set the squares state to the copy
        setSquares(squaresCopy);

        // set the next player
        setXIsNext(!xIsNext);

        const winnerMaybe = checkWinner(squaresCopy);
        if (winnerMaybe) {
            console.log(`Winner is ${winnerMaybe}`);
            return;
        }

        if (checkDraw(squaresCopy)) {
            console.log('Draw');
            return;
        }

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