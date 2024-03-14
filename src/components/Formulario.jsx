const Formulario = ({agregarTarea, setTarea, tarea, listaTareas}) => {
    return(
        <div>        
            <form className="d-flex mb-4" onSubmit={
            (evt)=>{
            evt.preventDefault();
            agregarTarea(tarea);
            setTarea("");
            console.log(listaTareas)
            }}>
            <input required  
            className="p-1 me-2" 
            placeholder="Escuchar musica....." 
            value={tarea}
            onChange={evt => {
                setTarea(evt.target.value)
            }}/>
            <button className="btn btn-primary">Agregar</button>
            </form>
        </div>

    )
}

export default Formulario;