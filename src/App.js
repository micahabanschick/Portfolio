<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/stylesheets/App.css';
import Header from './components/semantics/Header'
// import Nav from './components/semantics/Nav'
import Section from './components/semantics/Section'
import Footer from './components/semantics/Footer'

function App() {
  return (
    <main className="App">
      <Header />
      <Section colorType="App-light-section"/>
      <Section colorType="App-dark-section"/>
      <Section colorType="App-light-section"/>
      <Footer />
    </main>
  );
}

export default App;
>>>>>>> setup
