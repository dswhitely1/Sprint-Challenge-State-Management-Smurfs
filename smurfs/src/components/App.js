import React, {useEffect} from "react";
import {Route} from 'react-router-dom';
import {ActionsProvider} from "../contexts/ActionsContext";
import {useActions} from "../store/smurfs/useActions";

import "./App.css";
import Smurfs from "./smurfs/Smurfs";
import SmurfForm from "./smurfs/SmurfForm";
import Navigation from "./navigation/Navigation";

const App = () => {
    const actions = useActions();
    return (
        <ActionsProvider value={actions}>
            <Navigation/>
        <div className='App'>
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
            <Route exact path="/" component={Smurfs}/>
            <Route path={`/view-smurf/:smurfId`} component={Smurfs} />
            <Route exact path={'/smurf-form'} component={SmurfForm} />
            <Route path={`/smurf-form/:smurfId`} component={SmurfForm} />
        </div>
        </ActionsProvider>
    );
};

export default App;
