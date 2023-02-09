import { FlatList, Button, StyleSheet, View } from "react-native"
import type { HistoryData } from "../types"

export default function BoardHistory({ history, setHistory }: {
    history: Array<HistoryData>,
    setHistory: (id: number) => void,
}) {
    return (
        <FlatList
            style={styles.list}
            data={history}
            renderItem={({ item }) => {
                return (
                    <>
                        <Button
                            title={item.move}
                            onPress={() => setHistory(item.id)}
                        />
                        <View style={styles.spacer} />
                    </>
                )
            }}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

const styles = StyleSheet.create({
    spacer: {
        height: 10,
    },
    list: {
        flex: 1,
        width: '60%',
        padding: 10,
    }
});