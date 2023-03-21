import React from 'react';
import Article from "./Article"

function ArticleList({post}){
    return(
        <main>
            {post.map(elem=>(
        <Article key={elem.id} title={elem.title} date={elem.date} preview={elem.preview} minutes={elem.minutes}/>
    ))}
        </main>
    )
}

export default ArticleList;