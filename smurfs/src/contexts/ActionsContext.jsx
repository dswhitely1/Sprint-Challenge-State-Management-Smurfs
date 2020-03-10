import {createContext} from 'react';

const ActionsContext = createContext({});

const ActionsProvider = ActionsContext.Provider;

export {ActionsContext, ActionsProvider}