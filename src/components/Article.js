import React from 'react'

function Article({title, date="January 1, 1970", preview, minutes}) {
    let num = 0;
    const coffee = []
    let joinedStr="";
    const bentos =[]
    
    if (minutes <30) {
        num = Math.ceil(minutes/5)*5
        function numberCoffees() {
            let numCoffee = num/5;
            coffee.length=numCoffee;
            for (let i =0; i <numCoffee; i++){
                coffee[i] = "☕️"
            }
            joinedStr = coffee.join('')
        }
        numberCoffees()
    } else {
        num = Math.ceil(minutes/10)*10
        function numberBentos() {
            let numBentos = num/10;
            bentos.length=numBentos;
            for (let i=0; i<numBentos; i++){
                bentos[i] ="🍱"
            }
            joinedStr = bentos.join('')
        }
        numberBentos()
    }
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}<span> | {joinedStr} {minutes} min. read</span></small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;