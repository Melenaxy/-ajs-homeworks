import './App.css'
import { Stars } from './components/Stars';

function App() {
  let count: number = 4;
  return (
    <Stars count={count}/>
  )
}

export default App
