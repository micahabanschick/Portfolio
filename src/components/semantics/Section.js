import Article from './Article'
import NavBar from './NavBar'
import Button from 'react-bootstrap/Button'

const Section = props => {

    const articleColor = () => {
        let colors = ""
        if (props.colorType === "App-light-section") {
            colors = "App-dark-article"
        } else if (props.colorType === "App-dark-section") {
            colors = "App-light-article"
        }
        return colors
    }

    return (
        <section className={props.colorType}>
            <NavBar/>
            <header>{props.title}</header>
            <Article 
                colorType={articleColor()} 

                title={props.articleTitle}
                description={props.articleDescription}
            />
            <p>
                This is the base template for the sections.
            </p>
            <footer>
                <p>
                    This is the where I will list the various languages and frameworks.
                </p>
                <Button variant="primary" type="submit">Visit</Button>
            </footer>
        </section>
    );
}
  
export default Section;