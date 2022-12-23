import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <News/>
    </main>
    </>
  );
}

export default App;
