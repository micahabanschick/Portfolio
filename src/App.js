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
