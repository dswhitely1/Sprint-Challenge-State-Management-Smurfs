import React, {useEffect, useContext} from 'react';
import {useSelector} from "react-redux";
import {ActionsContext} from "../../contexts/ActionsContext";
import Smurf from './Smurf';

const Smurfs = () => {
    const {fetchSmurf} = useContext(ActionsContext)
    useEffect(()=>fetchSmurf(),[]);

    const smurfs = useSelector(state => state.smurfStore.smurfs);
    return (
        <div className="Smurfs text-center">
            <h1>Smurf Village</h1>
            <ul>
                {smurfs.map( smurf => {
                    return (
                        <Smurf
                            name={smurf.name}
                            id={smurf.id}
                            age={smurf.age}
                            height={smurf.height}
                            key={smurf.id}
                        />
                    );
                } )}
            </ul>
        </div>
    );
};

export default Smurfs