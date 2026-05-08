import img from "../assets/TecnologiesImage.png"

function Tecnologies() {
  return (
    <>
      <p>
        <h3>Minhas Habilidades</h3>
        <p>Tenho experiência com as tecnologias e ferramentas:</p>
        <ul>
          <li>Linguagens: HTML, CSS, JavaScript, Python</li>
          <li>Frameworks: React, Bootstrap, CoreUi</li>
          <li>Ferramentas: Figma, Git, Pacote Office, AirTable</li>
          <li>Outros: Manutenção de Computadores</li>
        </ul>
        <img style={{ width: "300px" }} src={img} alt="Tecnologias" />
      </p>
    </>
  )
}

export default Tecnologies
