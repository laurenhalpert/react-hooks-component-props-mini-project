import React from 'react'

function Article({title, date="January 1, 1970", preview, minutes}) {
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}<span>{minutes} min. read</span></small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;