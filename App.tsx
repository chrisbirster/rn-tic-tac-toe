import { StatusBar } from 'expo-status-bar';
import Board from './components/Board';


export default function App() {
  return (
    <>
      <Board />
      <StatusBar style="auto" />
    </>
  );
}