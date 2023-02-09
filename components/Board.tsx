import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Row from "./Row";
import type { HistoryData } from "../types";
import BoardHistory from "./BoardHistory";

const initialData: HistoryData = { id: 0, move: 'Go to game start', xIsNext: true, snapshot: Array<string>(9).fill("") }

export default function Board({ navigation }: { navigation: any }) {
    const [squares, setSquares] = useState<Array<string>>(Array<string>(9).fill(''));
    const [history, setHistory] = useState<Array<HistoryData>>([initialData])
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

        // set the history state to the current environment
        setHistory([...history, { id: history.length, move: `Go to move #${history.length}`, xIsNext: !xIsNext, snapshot: squaresCopy }])

        setSquares(squaresCopy);

        // set the next player
        setXIsNext(!xIsNext);

        const winnerMaybe = checkWinner(squaresCopy);
        if (winnerMaybe) {
            console.log(`Winner is ${winnerMaybe}`);
            navigation.navigate('End', { winner: winnerMaybe });
        }

        if (checkDraw(squaresCopy)) {
            console.log('Draw');
            navigation.navigate('End', { winner: null });
        }

    }

    const handleHistory = (id: number) => {
        const historyCopy = history.slice();
        console.log("historyCopy: ", historyCopy)
        const historyData = historyCopy.slice(0, id + 1);
        const currentMove = historyData.find((move) => move.id === id);
        if (!currentMove) {
            return;
        }
        console.log("historyData: ", historyData)
        setHistory(historyData);
        setXIsNext(currentMove.xIsNext);
        setSquares(currentMove.snapshot);
    }

    return (
        <>
            <View style={styles.board}>
                <Row handlePress={handlePress} ids={[0, 1, 2]} squares={squares} />
                <Row handlePress={handlePress} ids={[3, 4, 5]} squares={squares} />
                <Row handlePress={handlePress} ids={[6, 7, 8]} squares={squares} />
            </View>
            <BoardHistory history={history} setHistory={handleHistory} />
        </>
    );
}

const styles = StyleSheet.create({
    board: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    history: {
        flex: 0.4,
        width: '100%',
    }
})