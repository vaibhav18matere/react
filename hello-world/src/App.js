import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Toggle from './components/Toggle';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman"><p>This is info about superhero</p></Greet>
      <Greet name="Diana" heroName="Wonder Women" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Women" />
      <Toggle />
      <Message />
      {/* <img src={logo} /> */}
      <ClassClick />
      <FunctionClick />
    </div>
  );
}

export default App;
