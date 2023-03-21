import React from 'react';
import Article from "./Article"

function ArticleList({post}){
    console.log(post);
    const mappedPost = post.map(elem=>(
        <Article key={elem.id} title={elem.title} date={elem.date} preview={elem.preview} minutes={elem.minutes}/>
    ))
    return(
        <main>
            {mappedPost}
        </main>
    )
}

export default ArticleList;