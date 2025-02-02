import React from 'react';
import Article from "./Article"

function ArticleList({posts}){
    let arr = posts;
    console.log(arr);
    return(
        <main>
            {arr.map(elem=>(
                <Article key={elem.id} title={elem.title} date={elem.date} preview={elem.preview} minutes={elem.minutes}/>
            ))}
        </main>
    )
}

export default ArticleList;