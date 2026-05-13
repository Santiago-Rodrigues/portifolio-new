import { Link } from "react-router-dom"
import img from "../assets/ProfileImage.png"
import AboutMe from "../components/AboutMe.jsx"
import Tecnologies from "../components/Tecnologies.jsx"
import { useState } from "react"
import Projects from "../components/Projects.jsx"
import "./PresentationPage.css"
import "../assets/styles.css"

function PresentationPage() {
  const [id, setId] = useState("aboutme")
  const showSection = (id) => {
    if (id === "aboutme") {
      return <AboutMe />
    }
    if (id === "tecnologies") {
      return <Tecnologies />
    }
  }

  return (
    <>
      <header
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          padding: "0.3rem",
          background: "#001a4b",
        }}
      >
        <h2>Santiago Rodrigues</h2>
        <Link to={"/"}>
          <button
            className="button"
            style={{
              position: "absolute",
              right: 30,
              top: 10,
              bottom: 10,
              background: "rgba(255, 255, 255, 0)",
              border: "none",
              cursor: "pointer",
              borderRadius: "10%",
              color: "white",
            }}
          >
            Sair
          </button>
        </Link>
      </header>
      <div className="presentation-card">
        <div
          style={{
            flex: 1,
            padding: "10px",
            textAlign: "center",
          }}
        >
          <img
            src={img}
            width={350}
            style={{ borderRadius: "50%", padding: "10px" }}
            alt="Foto de Perfil"
          />
          <h3>Santiago</h3>
          Estudade de Engenharia de Software <br />
          Desenvolvedor Front-End
        </div>
        <div
          style={{
            flex: 2,
            margin: 10,
            textAlign: "left",
            padding: "10px",
          }}
        >
          {id === "tecnologies" ? (
            <button
              className="button"
              onClick={() => {
                setId("aboutme")
              }}
            >
              Sobre Mim
            </button>
          ) : (
            <button
              className="button"
              onClick={() => {
                setId("tecnologies")
              }}
            >
              Tecnologias
            </button>
          )}
          {showSection(id)}
        </div>
      </div>
      <div className="presentation-card ">
        <Projects />
      </div>
    </>
  )
}

export default PresentationPage
