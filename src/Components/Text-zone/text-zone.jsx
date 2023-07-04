function TextZone({title, text, text2, textItems}) {
    return (
        <div className="textZone">
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{text2}</p>
            <div className= "textItems">{textItems}</div>
        </div>
    )
}

export default TextZone