import { Link } from "react-router-dom"
import "./HomePage.css"

function HomePage() {
  return (
    <>
      <div className="presentationPage">
        <h1>Olá, bem vindo!</h1>
        <Link to={"/presentationPage"}>
          <button className="presentationButton">Hello World</button>
        </Link>
      </div>
    </>
  )
}

export default HomePage
