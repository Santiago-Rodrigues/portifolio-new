import { useState } from "react"
import "../../assets/styles.css"

function Forca() {
  const wordsList = [
    "sorteio",
    "cachorro",
    "algoritmo",
    "dinamarca",
    "estreito",
  ]

  const [sortedWord, setSortedWord] = useState("")
  const [errors, setErrors] = useState(0)
  const spaces = "_"
  const showSpaces = spaces.repeat(sortedWord.length)

  const sortWord = () => {
    const sortNumber = Math.floor(Math.random() * wordsList.length) //sorteia um número aleatório para ser usado no array
    setSortedWord(wordsList[sortNumber])
  }

  const resetGame = () => {
    setSortedWord("")
    setErrors(0)
  }


  return (
    <h3>
      {sortedWord} <br />
      {sortedWord === "" ? (
        <>
          <button className="button" onClick={sortWord}>
            Sortear
          </button>
          <p>Sorteie uma palavra</p>
        </>
      ) : (
        <>
          <button className="button" onClick={resetGame}>
            Resetar
          </button>
          <p>A palavra sorteada tem: {sortedWord.length} letras</p>
          {showSpaces}
        </>
      )}
    </h3>
  )
}
export default Forca
