const Article = props => {
    return (
        <article className={props.colorType}>
            <p>
                This is the base template for the article
                <details>
                    <summary>Project Description</summary>
                    <p>
                        This is the base template for the Project Description.
                    </p>
                </details>
            </p>
        </article>
    );
}
  
export default Article;