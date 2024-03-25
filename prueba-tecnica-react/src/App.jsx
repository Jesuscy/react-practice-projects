import { useEffect, useState } from 'react'

import './App.css'

function App() {
  //Variable en la que se va a guardar el fact de cada gato.
  const [fact, setFact] = useState("Default Fact")
  //Variable en la que se guarda la modalidad de uso.
  const [autoText, setAutoText] = useState(false)

  const CAT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'
  const CAT_IMG_URL = `https://cataas.com/cat/says/${fact}?fontSize=50&fontColor=red`


  const getRandomFact = () =>{
    fetch(CAT_RANDOM_FACT_URL)
    .then((res) => res.json() //--> res.json() = pormise, por eso el .then
      .then((data) => {
        const { fact } = data //-->Este fact no es el del useState, es destructuring de data.
        const resumedFact = fact.split(' ', 9).join(' ')
        setFact(resumedFact)
      }))
  }
  //useEffect en el que hago el fetching de datos.
  useEffect(() => {

    getRandomFact()

  }, []);

  const getInputValue = (event) => {
    const inputElement = event.target.previousElementSibling;
    const inputValue = inputElement.value;
    setFact(inputValue)
  }

  const handleNewFact = () => {
    getRandomFact()

  }
  return (
    <>
      {autoText ? (<>
        <h1>App de gatitos</h1>
        <button onClick={() => setAutoText(true)}>
          <p>Auto Generar texto.</p>
        </button>
        <button onClick={() => setAutoText(false)}>
          <p>Escribir texto.</p>
        </button>
        <br></br>
        <button onClick={() => handleNewFact()}>Get new Fact</button>
        <main>

          {fact &&
            <div>
              <img src={CAT_IMG_URL} />
            </div>
          }
        </main>
      </>) : (<>  
        <h1>App de gatitos</h1>
        <button onClick={() => setAutoText(true)}>
          <p>Auto Generar texto.</p>
        </button>
        <button onClick={() => setAutoText(false)}>
          <p>Escribir texto.</p>
        </button>
        <br></br>
      <input></input>
      <button onClick={(event) => getInputValue(event)}>Generar</button>
      <main>

        {fact &&
          <div>
            <p>{fact}</p>
            <img src={CAT_IMG_URL} />
          </div>
        }
      </main></>)}
     
    </>
  )
}

export default App
