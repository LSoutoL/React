import React, { useState } from 'react';
import { useForm /*useEffect*/ } from '../../hook/customHook';


export const Form = () => {

    const {form, setForm, adminCambios} = useForm();
    const adminEnvio = (e) =>{
        e.preventDefault();
        console.log(form)
        /*FormService.save(form) para guardar memdiante un metodo creado al efecto, se puede ver completo en el repositorio*/
    }
    /*
    const [iguales, setIguales] = useState(true);
    const [pasw, setPas] = useState();
    const adminPasw = (e) => {
        setPas(e.target.value);
    }
    useEffect (()=>{
        const {psw} = form;
        setIguales(psw === pasw);

    }, [pasw])


    ------ en return, para msj de confirmacion:
    {!iguales && (
        <div>
        Las contrasenias no coinciden
        </div>
    )}

    ---- dentro del boton submit:
    disabled={!iguales}
    */

  return (
    <div>
      <form style={{width: 45 + '%', margin: 7 + '%'}}>
  <div className="form-group">
    <label >Correo electronico</label>
    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={adminCambios}/>
    </div>
  <div className="form-group">
    <label >Nombre completo</label>
    <input name="nombre" className="form-control" id="exampleInputPassword1" onChange={adminCambios}/>

  </div>
  <div className="form-group form-check">
  </div>
  <button type="submit" className="btn btn-primary" onClick={adminEnvio}>Enviar </button>
</form>
    </div>
  )
}
