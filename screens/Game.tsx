import { StatusBar } from "expo-status-bar";
import Board from "../components/Board";
import MainLayout from "../layouts/MainLayout";

export default function GameScreen({ navigation }: { navigation: any}) {
    return (
        <MainLayout>
            <StatusBar style="auto" />
            <Board navigation={navigation} />
        </MainLayout>
    )
}