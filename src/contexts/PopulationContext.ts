import React, { Dispatch } from 'react';

import { PopulationActions, PopulationState } from '../reducers/PopulationReducer';


export const PopulationContext = React.createContext(
  {} as { state: PopulationState; dispatch: Dispatch<PopulationActions> }
);
