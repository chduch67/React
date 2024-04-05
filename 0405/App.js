import logo from './logo.svg';
import './App.css';
import Header from './classComp/Header';
import Main from './classComp/Main';
import Footer from './classComp/Footer';
import MyComponent from './MyComponent';

function App() {
  return (
   <div>
   <MyComponent name="HTML" />
   <MyComponent name="React" />
   <MyComponent name="Javascript" />
   </div>
  )
}

export default App;
