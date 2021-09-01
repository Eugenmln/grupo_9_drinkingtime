import React from 'react'

function UltimoProducto (props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Producto en base de datos</h5>
                </div>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default UltimoProducto
