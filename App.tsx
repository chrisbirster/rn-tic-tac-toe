import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Square({text, index, handlePress}: {
  text: string, index: number, 
  handlePress: (i: number) => void
}) {
  return (
    <Pressable
      style={styles.square}
      onPress={() => handlePress(index)}
    >
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
    <View style={styles.container}>
      <Row>
        <Square text={squares[0]} index={0} handlePress={handlePress} />
        <Square text={squares[1]} index={1} handlePress={handlePress} />
        <Square text={squares[2]} index={2} handlePress={handlePress} />
      </Row>
      <Row>
        <Square text={squares[3]} index={3} handlePress={handlePress} />
        <Square text={squares[4]} index={4} handlePress={handlePress} />
        <Square text={squares[5]} index={5} handlePress={handlePress} />
      </Row>
      <Row>
        <Square text={squares[6]} index={6} handlePress={handlePress} />
        <Square text={squares[7]} index={7} handlePress={handlePress} />
        <Square text={squares[8]} index={8} handlePress={handlePress} />
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
