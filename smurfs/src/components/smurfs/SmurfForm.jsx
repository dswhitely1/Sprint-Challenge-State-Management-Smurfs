import React, {useState, useContext, useEffect} from 'react';
import {useSelector} from "react-redux";
import {ActionsContext} from "../../contexts/ActionsContext";

const SmurfForm = props => {
    console.log(props);
    const smurfs = useSelector(state => state.smurfStore.smurfs);
    const {fetchSmurf, updateSmurf, addSmurf} = useContext(ActionsContext);
    const [isEdit, setIsEdit] = useState(false);
    const [values, setValues] = useState({
        name: '',
        age: '',
        height: '',
        id: null
    });
    useEffect(()=>fetchSmurf(),[])

    useEffect(()=> {
        if (props.match.params.smurfId) {
            if (smurfs.filter(smurf => smurf.id.toString() === props.match.params.smurfId)[0]) {
                setValues(smurfs.filter(smurf => smurf.id.toString() === props.match.params.smurfId)[0])
                setIsEdit(true);
            }
        }
    },[smurfs]);

    const handleSubmit = e => {
        e.preventDefault();
        isEdit ? updateSmurf(values) : addSmurf(values);
        props.history.push('/');
    };

    const handleChanges = e => setValues({...values, [e.target.name]:e.target.value});

    const {name, age, height} = values;
    return (
        <div>
            <h2 className='text-center'>{`Add / Update Your Chosen Smurf`}</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='mr-1' htmlFor='name'>Smurf Name: </label>
                    <input
                        onChange={handleChanges}
                        placeholder='name'
                        value={name}
                        name='name'
                        id='name'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='age'>Smurf Age:</label>
                    <input
                        onChange={handleChanges}
                        placeholder='age'
                        value={age}
                        name='age'
                        id='age'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='height'>Smurf Height</label>
                    <input
                        onChange={handleChanges}
                        placeholder='height'
                        value={height}
                        name='height'
                        id='height'
                        className='form-control'
                    />
                </div>
                <button className='btn btn-success'>
                    Submit
                </button>
            </form>
        </div>);
};

export default SmurfForm;