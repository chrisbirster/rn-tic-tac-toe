import { StatusBar } from "expo-status-bar";
import Board from "../components/Board";

export default function GameScreen({ navigation }: { navigation: any}) {
    return (
        <>
            <StatusBar style="auto" />
            <Board navigation={navigation} />
        </>
    )
}