import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = ({ colaboradores = []}) => {
    
    const elementosColaboradores = colaboradores.map((colaborador) => {
        return (
            <tr key={`${colaborador.id}-arregloColaborador`}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.telefono}</td>
                <td>{colaborador.cargo}</td>
            </tr>
        );
    });

    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Lista de colaboradores</h1>
                </div>
    
            </div>

        </div>
         <table className="table table-striped">
            
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Telefono</th>
                    <th>Cargo</th>
                </tr>
            </thead>
            <tbody>
                {elementosColaboradores}
                
            </tbody>
        </table>
        </>
       
    );
};

export default Listado;