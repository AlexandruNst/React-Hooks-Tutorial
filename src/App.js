import React from 'react';
import UseStateHook from './hooks/01_useState/UseStateHook';
import UseEffectHook from './hooks/02_useEffect/UseEffectHook';
import UseContextHook from './hooks/03_useContext/1_UseContextHook';
import CustomContextHook from './hooks/03_useContext/2_CustomHookUser';
import UseRefHook from './hooks/04_useRef/UseRefHook';
import UseMemoHook from './hooks/05_useMemo/UseMemoHook';

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
    </>
  )
}

export default App;
