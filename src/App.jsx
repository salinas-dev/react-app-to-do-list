import { useState } from "react";
import Tarea from "./components/Tarea";
import Button from "./components/Button";
import Formulario from "./components/Formulario";


function App() {
  const [tarea,setTarea]=useState("");
  const [contadorID,setcontadorID]=useState(0);
  const [listaTareas, setlistaTarea]=useState([])

  const agregarTarea = (task)=>{
    let nuevaTarea = {
      id:contadorID,
      tarea:task,
      status:true,
    }
    setcontadorID(contadorID+1);
    setlistaTarea([...listaTareas, nuevaTarea])
  }

  const editarTarea = (id)=>{

    let listaTemporal=[]

    listaTareas.map(({status,id:idTarea,tarea})=>{
      if(idTarea === id){
       listaTemporal=[...listaTemporal,{
        status:!status,
        id:idTarea,
        tarea:tarea
       }]
      }else{
        listaTemporal=[...listaTemporal,{
          status:status,
          id:idTarea,
          tarea:tarea
        }]
      }
    })

    setlistaTarea(listaTemporal);
  }

  const eliminarTarea = (id) => {
    let nuevaListaTareas = listaTareas.filter((tarea) => tarea.id !== id);
    setlistaTarea(nuevaListaTareas);
  };

  return (
    <div className="container-fluid mt-5 d-flex flex-column align-items-center">
      <Formulario
        agregarTarea={agregarTarea}
        setTarea={setTarea}
        tarea={tarea}
        listaTareas={listaTareas}
      />

    {
      listaTareas.length > 0 ?
      listaTareas.map(({tarea, id,status},index)=>{
        return(
          <Tarea 
            key={index}
            estado={status} 
            tarea = {tarea} 
            id={id}
            editarTarea = {editarTarea}
            eliminarTarea={eliminarTarea}/>
        );
      }):null
    }
    
    <Button nombre="Saluda" clase="danger"/>
    <Button nombre="Despidete" clase="success"/>

    </div>
  );
}

export default App;