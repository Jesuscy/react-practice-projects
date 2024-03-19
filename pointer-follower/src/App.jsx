import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const FollowMouse = () => {


  //UseState de enabled inicado en false
  const [enabled, setEnabled] = useState(false)
  //UseState de position inicado en (0,0)
  const [position, setPosition] = useState({ x: 0, y: 0 })


  useEffect(() => {
    /*Evento para detectar la ubicación del cursor.(Dentro del useEffect para controlar cuando se suscribe al evento,
      no cada vez que se ejecute el componente, si no cuando cambie el valor de enabled)*/
    const handleMove = (event) => {
      //Guardo las cordenadas en las que se encuentra el cursor.
      const { clientX, clientY } = event
      //Cambio la posicion de pointer-follower a la posición del puntero pasandole la posicion al css del puntero.
      setPosition({ x: clientX, y: clientY })
    }
    //Solo inicio el evento seguir puntero si enabled es true cuando pare de serlo elimino el envento.
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    /*-CLEANUP
      El return se ejecuta cuando el componente se desmonta/desaparece y cuando cambia la dependencia ([enabled]). 
      Aprovecho para pasar al return una funcion anónima que limpia el efecto (lo borra).*/
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <main>
      <div style={
        {
          position: 'absolute',
          backgroundColor: '#09f',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`


        }
      }></div>
      <h3>Proyecto</h3>
      <button onClick={() =>
        //Al pulsar el boton cambio el valor de enabled al contrario.
        setEnabled(!enabled)
      }>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button >
    </main >
  )
}

function App() {

  //Desmonta el evento FollowMouse.
  const [mounted, setMounted] = useState(false)


  return (
    <>
      {mounted && <FollowMouse />}
      <button onClick={() => {
        setMounted(!mounted)
      }}>{mounted ? 'Desmontar' : 'Montar'} FollowMouse component.</button>
    </>
  )
}

export default App
