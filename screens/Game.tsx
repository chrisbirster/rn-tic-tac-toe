import { StatusBar } from "expo-status-bar";
import Board from "../components/Board";

export default function GameScreen() {
    return (
        <>
            <StatusBar style="auto" />
            <Board />
        </>
    )
}