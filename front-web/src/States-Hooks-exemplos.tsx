import React, {useState, useEffect} from 'react';

const sampleApp = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = `Você clicou ${counter} vezes`;
    }, [counter] )

    return (
        <div className="container mt-5">
           <button 
                className="btn btn-primary mr-5"
                onClick={() => setCounter(counter - 1)}>
               -
               </button>

           <span>{counter}</span>

           <button 
           className="btn btn-primary ml-5"
           onClick={() => setCounter(counter + 1)}>
               +
            </button>
            {counter > 5 && <h1>Valor maior que 5</h1> }
            {counter <= 5 && <h1>Valor menor ou igual a 5</h1> }
        </div>        
    )
}

export default sampleApp;