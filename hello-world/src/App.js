import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Toggle from './components/Toggle';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import Message from './components/Message';
import Counter from './components/Counter';
import Eb from './components/Eb'
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman"><p>This is info about superhero</p></Greet>
      <Greet name="Diana" heroName="Wonder Women" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Women" />
      <ClassClick />
      <FunctionClick />
      <Message />
      <Counter />
      <Eb />
      <ParentComponent />
      <img src={logo} alt="logo-react" />
      <Hello />
      <Toggle />
    </div>
  );
}

export default App;
