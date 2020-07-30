import React,{useState} from 'react';
import Formulario from './components/Formulario';
import Inventario from './components/Inventario'

function App() {
  
   // State del Formulario
   const [producto,setGuardarProducto] = useState(
    {
        nombre: '',
        costo:'',
        iva:'',
        precio:''
    }
)
  
  const {nombre,costo,iva,precio} = producto;

  const [inverntario, setInventario] = useState({setInventario});


  return (
   
    <div className="container">
      <h1>Ingresa tu producto</h1>
      <div className="row">
        <Formulario
          producto={producto}
          setGuardarProducto={setGuardarProducto}
         />
      </div>

      <div>
        <Inventario
          setInventario={setInventario}
        />
      </div>
        
    

    </div>
    
  );
}

export default App;
