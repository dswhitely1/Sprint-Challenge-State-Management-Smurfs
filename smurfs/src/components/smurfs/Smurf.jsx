import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ActionsContext} from "../../contexts/ActionsContext";

const Smurf = ({id, height, age, name}) => {
    const {deleteSmurf} = useContext(ActionsContext);
    return (
        <div className='Smurf card mb-3'>
            <Link to={`/view-smurf/${id}`}>
                <h3 className='card-header'>{name}</h3>
            </Link>
            <div className='card-body'>
                <strong>{height} tall</strong>
                <p>{age} smurf years old</p>
            </div>
            <div className='card-footer'>
                <Link to={`/smurf-form/${id}`}>
                    <button className='btn btn-info mr-2'>Edit</button>
                </Link>
                <button className='btn btn-danger'
                        onClick={() => deleteSmurf(id)}>Delete
                </button>
            </div>
        </div>
    )
};

export default Smurf;