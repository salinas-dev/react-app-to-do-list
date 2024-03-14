const Tarea = ({eliminarTarea, estado, tarea, editarTarea, id}) => {
    return(
        <div className={
            estado?"alert alert-danger mb-2 col-9 d-flex justify-content-around":
            "alert alert-success mb-2 col-9 d-flex justify-content-around"
          }
          >
            <p>{tarea}</p>
            <div>
              <button className="btn btn-warning" onClick={()=>editarTarea(id)}>Editar</button>
              <button className="btn btn-danger" onClick={()=>eliminarTarea(id)}>Borrar</button>
            </div>    
        </div>
    )
}

export default Tarea;