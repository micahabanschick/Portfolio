import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/stylesheets/App.css';
import './assets/stylesheets/responsive.css';
import Header from './components/semantics/Header'
// import NavBar from './components/semantics/NavBar'
import Section from './components/semantics/Section'
import Footer from './components/semantics/Footer'

function App() {
  return (
    <main className="App">
      <Header />
      <Section 
        colorType="App-dark-section"
        title="InContact"
        image=""
        description=""
        github=""
        tutorial=""
        technologies={["js",""]}
        articleTitle=""
        articleDescription=""
      />
      
      <Section 
        colorType="App-light-section"
        
        title="AweSum"
        description=""

        articleTitle=""
        articleDescription=""
      />

      <Section 
        colorType="App-dark-section"
        
        title="Love Life"
        description=""

        articleTitle=""
        articleDescription=""
      />

      <Section 
        colorType="App-light-section"

        title="Carb Container"
        description=""
        technologies={["js",""]}
        articleTitle=""
        articleDescription=""
      />

      <Section 
        colorType="App-dark-section"

        title="Acoustic Karma"
        description=""
        technologies={["js",""]}
        articleTitle=""
        articleDescription=""
      />

      <Section 
        colorType="App-light-section"

        title="Anilector"
        description=""
        technologies={["js",""]}
        articleTitle=""
        articleDescription=""
      />
      <Section colorType="App-dark-section"/>
      <Footer />
    </main>
  );
}

export default App;
