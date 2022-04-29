import { createContext, useContext, useReducer } from 'react';
import { IAction, IContext, IProviderProps, IState, LoadingActions } from '../interfaces';

const initialData: IState = {
  loading: false,
}

// Context
const LoadingContext = createContext<IContext | undefined>({} as IContext);

const loadingReducer = (state = initialData, action: IAction) => {
  switch (action.type) {
    case LoadingActions.setLoading:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}

// Provider
export const LoadingProvider = ({ children }: IProviderProps) => {
  const [state, dispatch] = useReducer(loadingReducer, initialData);
  return (
    <LoadingContext.Provider value={{ state, dispatch }}>
      {children}
    </LoadingContext.Provider>
  )
}

// Hook 
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useTheme must be either ThemeProvider");
  }
  return context;
}