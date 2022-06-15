import './App.css'
import Maindash from './components/Maindash/Maindash';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <Maindash />
          <div></div>
        </div>
    </div>
  );
}

export default App;
