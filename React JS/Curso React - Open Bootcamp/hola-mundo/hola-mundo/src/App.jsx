import './App.css'
import TaskListComponent from './components/container/task_list.jsx'
import Ejemplo1 from './hooks/ejemplo1.jsx'
import Ejemplo2 from './hooks/Ejemplo2.jsx'

function App() {
  return (
    <>
      {/*Componente Greeting*/}
      {/* <Greeting name="Juan Diego"/> */}

      {/*Componente GreetingF*/}
      {/* <GreetingF name="Juan"></GreetingF> */}

      {/* Componente de listado de tareas
      <TaskListComponent></TaskListComponent> */}
    
      {/*Ejemplos de usos de Hooks*/}
      {/* <Ejemplo1 /> */}

      {/*Ejemplos de uso de useState, eseRef y useEffect*/}
      <Ejemplo2 />
    </>
  )
}

export default App
