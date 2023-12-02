
const Buscador = ({setBusqueda,busqueda}) => {

    return (
        <div className="container">
            <div className="row">
                <div className='col-12'>
                    <label htmlFor='buscador'>Buscador</label>
                    <input type='text' name='buscador' id='buscador' value={busqueda} onChange={(e) => setBusqueda(e.target.value) } className='form-control' />
                </div>
            </div>
        </div>
    );

};

export default Buscador;