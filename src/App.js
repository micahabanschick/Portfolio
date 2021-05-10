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

        description="An easy-to-use portfolio generator. With InContact, entrepreneurs can market themselves to the fullest extent. No more long job searches. Now your clients and employers will come to YOU! Developed with a React-Redux Framework, and backed by a powerful Rails API, there's almost nothing you can't present with InContact."

        github="https://github.com/micahabanschick/InContact"
        tutorial=""
        technologies={["js",""]}

        visit="https://github.com/micahabanschick/InContact"
      />
      
      <Section 
        colorType="App-light-section"
        title="AweSum"

        description="An educational application that facilitates a basic mathematics quiz for young learners"

        github="https://github.com/micahabanschick/AweSum/"
        visit="https://micahabanschick.github.io/AweSum/"
      />

      <Section 
        colorType="App-dark-section"
        title="Love Life"

        description="A Single Page Application (SPA) that tracks the users monthly expenses based on their inputs for their selected bill options. Behind the hood, it utilizes a powerful Rails-API-backend in conjunction with a smooth Javascript frontend aesthetic."

        github="https://github.com/micahabanschick/Love_Life/"
        visit="https://github.com/micahabanschick/Love_Life"
      />

      <Section 
        colorType="App-light-section"
        title="Carb Container"

        description="An open source tool used to store, record, and calculate your diet macro intake. Once you create your personal account, you will be able to add different foods you eat throughout the day. Once you see the results of the day and want to reset for the coming day, just click the 'Goodnight' and your stats will be reset."

        github="https://github.com/micahabanschick/Carb_Container/"
        visit="https://github.com/micahabanschick/Carb_Container"
      />

      <Section 
        colorType="App-dark-section"
        title="Acoustic Karma"

        description="An open source tool used to store, market, and archive your music. Once you create your personal account, you will have access to a 'Song' tool for storing a new song's data, and a 'Post' tool for writing about your new songs."

        github="https://github.com/micahabanschick/Acoustic_Karma/"
        visit="https://github.com/micahabanschick/Acoustic_Karma"
      />

      <Section 
        colorType="App-light-section"
        title="Anilector"

        description="The anime selector of the ages. This CLI Application provides a short and effective test for determining the most eligible anime to start one off on their Otaku career. All one needs is to list three genre names, according to their preference, and the rest is sorted out by the application."

        github="https://github.com/micahabanschick/Anilector/"
        visit="https://github.com/micahabanschick/Anilector"
      />
      <Section colorType="App-dark-section"/>
      <Footer />
    </main>
  );
}

export default App;
