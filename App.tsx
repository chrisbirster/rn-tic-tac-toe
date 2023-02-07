import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Square() {
  return (
    <Pressable style={styles.square}>
      <View>
        <Text style={styles.squareText}>X</Text>
      </View>
    </Pressable>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Square />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  squareText: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
