import "./App.css"
import Routes from "./routes.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from "../@/components/Particles.jsx"

function App() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <Particles
          particleColors={["#ffffff"]}
          particleCount={500}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
        <Routes />
    </>
  )
}

export default App
