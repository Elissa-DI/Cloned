import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import FirstDiv from './components/firstDiv';
import SecondDiv from './components/secondDiv';
import ThirdDiv from './components/thirdDiv';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      < Nav/>
      <FirstDiv />
      <SecondDiv />
      <br />
      <ThirdDiv />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
