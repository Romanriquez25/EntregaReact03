
import { useState } from "react";

const Formulario = ({ setAlarma, setType, onSubmit }) => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cargo, setCargo] = useState('');

    function validarFormulario(e) {
        e.preventDefault();



        if (nombre == "") {
            setAlarma("El campo nombre es obligatorio");
            setType("danger")

        } else if (!validarCorreo(correo)) {
            setAlarma("El campo correo es obligatorio y debe ser correcto ejemplo@tumail.com");
            setType("danger")
        }
        else if (edad == "") {
            setAlarma("El campo edad es obligatorio");
            setType("danger")
        }
        else if (telefono == "") {
            setAlarma("El campo telefono es obligatorio");
            setType("danger")
        }
        else if (cargo == "") {
            setAlarma("El campo cargo es obligatorio");
            setType("danger")
        }
        else {
            setAlarma("Se ha enviado correctamente");
            setType("success")
            if (onSubmit) {
                onSubmit({
                    nombre,
                    correo,
                    edad,
                    telefono,
                    cargo
                })

            }
            setNombre('');
            setCorreo('');
            setEdad('');
            setTelefono('');
            setCargo('');



        }


        function validarCorreo(correo) {
            const correito = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return correito.test(correo);
        }

    }



    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Formulario</h2>
                    <form className="" onSubmit={validarFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" id="nombre" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correo" className="form-label">Correo</label>
                            <input type="text" id="correo" className="form-control" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="edad" className="form-label">Edad</label>
                            <input type="text" id="edad" className="form-control" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" id="telefono" className="form-control" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cargo" className="form-label">Cargo</label>
                            <input type="text" id="cargo" className="form-control" placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formulario;