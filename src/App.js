import React from 'react';
import UseStateHook from './hooks/01_useState/UseStateHook';
import UseEffectHook from './hooks/02_useEffect/UseEffectHook';
import UseContextHook from './hooks/03_useContext/1_UseContextHook';
import CustomContextHook from './hooks/03_useContext/2_CustomHookUser';

function App() {
  return (
    <>
      <h1>Hooks Tutorial</h1>
      <UseStateHook />
      <UseEffectHook />
      <UseContextHook />
      <CustomContextHook />
    </>
  )
}

export default App;
