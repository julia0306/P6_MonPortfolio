function TextZone({title, text, textItems}) {
    return (
        <div className="textZone">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className= "textItems">{textItems}</div>
        </div>
    )
}

export default TextZone