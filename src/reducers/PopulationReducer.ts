import React, { useReducer } from 'react';

import { PopulationComposition } from '../model/PopulationComposition';

export interface PopulationState {
  error: string;
  loading: boolean;
  populationCompositions: Map<number, PopulationComposition>;
}

/**
 * 初期化アクション
 */
type InitializeAction = {
  type: 'initialize'
}


type GetPopulationComposition = {
  type: 'get_population_composition'
}

type GetPopulationCompositionSuccess = {
  type: 'get_population_composition_success'
  prefCode: number
  populationComposition: PopulationComposition
}

type GetPopulationCompositionFailure = {
  type: 'get_population_composition_failure'
  error: string;
}

type DeletePopulationComposition = {
  type: 'delete_population_composition',
  prefCode: number;
}

export type PopulationActions =
  InitializeAction
  | GetPopulationComposition
  | GetPopulationCompositionSuccess
  | GetPopulationCompositionFailure
  | DeletePopulationComposition

const initialState: PopulationState = {
  error: '',
  loading: false,
  populationCompositions: new Map<number, PopulationComposition>(),
};

const reducer = (state: PopulationState, action: PopulationActions) => {
  switch (action.type) {
    case 'initialize': {
      return initialState;
    }
    case 'get_population_composition': {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case 'get_population_composition_success': {
      const newState = Object.assign({}, state, {});
      newState.populationCompositions.set(action.prefCode, action.populationComposition);
      return {
        ...newState,
        loading: false,
      };
    }
    case 'get_population_composition_failure': {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case 'delete_population_composition': {
      const newState = Object.assign({}, state, {});
      newState.populationCompositions.delete(action.prefCode);
      return {
        ...newState,
      };
    }
  }
};

export const usePopulationReducer = (): [PopulationState, React.Dispatch<PopulationActions>] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};
