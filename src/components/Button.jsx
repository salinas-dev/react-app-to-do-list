const Button = ({nombre, clase}) => {
    return(
        <div>        
            <div className={`btn btn-outline-${clase}`}>
                {nombre}
            </div>
        </div>

    )
}

export default Button;