import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Square({text}: {text: string}) {
  return (
    <Pressable style={styles.square}>
      <View>
        <Text style={styles.squareText}>{text}</Text>
      </View>
    </Pressable>
  )
}
export function Row({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.row}>
      {children}
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Row>
        <Square text='1'/>
        <Square text='2'/>
        <Square text='3'/>
      </Row>
      <Row>
        <Square text='4'/>
        <Square text='5'/>
        <Square text='6'/>
      </Row>
      <Row>
        <Square text='7'/>
        <Square text='8'/>
        <Square text='9'/>
      </Row>
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
    justifyContent: 'center',
    borderWidth: 1,
    width: 80,
    height: 80,
  },
  squareText: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  }
});
