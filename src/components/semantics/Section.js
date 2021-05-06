import Article from './Article'

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
            <Article colorType={articleColor()} />
            <p>
                This is the base template for the sections.
            </p>
        </section>
    );
}
  
export default Section;