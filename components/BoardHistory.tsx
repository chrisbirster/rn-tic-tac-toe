import { Button, FlatList, StyleSheet, View } from "react-native"
import Colors from "../constants/colors";
import type { HistoryData } from "../types"

export default function BoardHistory({ history, setHistory }: {
    history: Array<HistoryData>,
    setHistory: (id: number) => void,
}) {
    return (
        <View style={styles.container}>
        <FlatList
            style={styles.list}
            data={history}
            renderItem={({ item }) => {
                return (
                    <>
                        <Button
                            color={Colors.primary500}
                            title={item.move}
                            onPress={() => setHistory(item.id)}
                        />
                        <View style={styles.spacer} />
                    </>
                )
            }}
            keyExtractor={(item) => item.id.toString()}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        borderColor: Colors.primary500,
        backgroundColor: Colors.secondary500,
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 4,
        minWidth: 250,
        marginBottom: 50,
    },
    spacer: {
        height: 10,
    },
    list: {
        margin: 10,
        width: '90%',
    }
});