import React from 'react';
import UseStateHook from './hooks/01_useState/UseStateHook';
import UseEffectHook from './hooks/02_useEffect/UseEffectHook';
import UseContextHook from './hooks/03_useContext/1_UseContextHook';
import CustomContextHook from './hooks/03_useContext/2_CustomHookUser';
import UseRefHook from './hooks/04_useRef/UseRefHook';
import UseMemoHook from './hooks/05_useMemo/UseMemoHook';
import UseCallbackHook from './hooks/06_useCallback/UseCallbackHook';
import UseReducerHook from './hooks/07_useReducer/UseReducerHook';
import UseReducerHookComplex from './hooks/07_useReducer/UseReducerHookComplex';
import UseTransitionHook from './hooks/08_useTransition/UseTransitionHook';
import UseDefferdValueHook from './hooks/09_useDeferredValue/UseDefferdValueHook';
import UseLayoutEffectHook from './hooks/10_useLayoutEffect/UseLayoutEffectHook';
import UseDebugValueHook from './hooks/11_useDebugValue/UseDebugValueHook';
import UseImperativeHandle from './hooks/12_useImperativeHandle/UseImperativeHandle';

function App() {
  return (
    <>
      <h1>Hooks Tutorial</h1>
      <UseStateHook />
      <UseEffectHook />
      <UseContextHook />
      <CustomContextHook />
      <UseRefHook />
      <UseMemoHook />
      <UseCallbackHook />
      <UseReducerHook />
      <UseReducerHookComplex />
      <UseTransitionHook />
      <UseDefferdValueHook />
      <UseLayoutEffectHook />
      <UseDebugValueHook />
      <UseImperativeHandle />
    </>
  )
}

export default App;
