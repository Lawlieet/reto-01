import React,{useState} from 'react';

const Formulario = ({producto, setGuardarProducto}) => {

   ;
    // Destructurar producto
    const {nombre,costo,iva,precio} = producto;

    // State Error
    const [error, setGuardarError] = useState(false);

    //  State del producto a guardar
    const [nuevoproducto,setNuevoProducto] = useState({})

    // Modificación de los input
    const handleChange = e => {
        setGuardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    // Enviar el Form
    const handleSubmit = e => {
        e.preventDefault();

        // Validar campos
        if(nombre.trim() === '' || costo === '' || precio === '') {
            setGuardarError(true)
            return
        }
        setGuardarError(false)

        // Guardar producto
        setNuevoProducto(producto);
        setGuardarProducto({
            nombre: '',
            costo:'',
            iva:'',
            precio:''
        })


    }

    return (
        
        <form
            onSubmit={handleSubmit}
        >
            {error? 
                <p
                    className="bg-danger" 
                >Todos los campos son obligatorios</p> 
                : null}
            <div className="form-group"> 
                <label >Nombre del Producto</label>
                <input 
                    className="form-control" 
                    type="text"
                    placeholder="Ej. Cinturon"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />
            </div>
           
            <div className="form-group">
                <label >Costo</label>
                <input 
                    className="form-control" 
                    type="number"
                    placeholder="Ej. $100.00"
                    name="costo"
                    value={costo}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label >Iva</label>
                <input 
                    className="form-control" 
                    type="number"
                    placeholder="16%"
                    name="iva"
                    value={iva}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label >Precio</label>
                <input 
                    className="form-control" 
                    type="number"
                    placeholder="Ej. $120.00"
                    name="precio"
                    value={precio}                    
                    onChange={handleChange}
                />
            </div>

            <div className="btn-group" role="group">
                <button 
                    type="submit" 
                    className="btn btn-success"
                >Agregar Inventario</button>
            </div>


        </form>
            
        
    )
}

export default Formulario
