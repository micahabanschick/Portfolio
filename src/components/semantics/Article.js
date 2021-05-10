import Button from 'react-bootstrap/Button'

const Article = props => {
    return (
        <article className={props.colorType}>
            <p>
                This is the base template for the article
                <details>
                    <summary><h3>{props.title} Description</h3></summary>
                    <h6 className="App-description">
                        {props.description}
                    </h6>
                </details>
                <form action={props.github} target="_blank">
                    <Button variant="secondary" src={props.visit} type="submit">Github</Button>
                </form>
            </p>
        </article>
    );
}
  
export default Article;