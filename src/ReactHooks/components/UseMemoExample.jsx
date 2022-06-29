import React, { useMemo, useRef, useState } from 'react';
import { useEffect } from 'react';

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() =>  getSqrt(number), [number]);
  
  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  }, [])

  console.log(inc)

  return (
    <div className='container'>
      <h2 className='text-center'>useMemo</h2>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
      <h3>Renders - {renders.current}</h3>
      <button onClick={() => setInc(prev => prev + 1)} className='btn btn-primary'>Click - {inc}</button>
      <h3>Exprensice - {sqrt}</h3>
    </div>
  );
}

function getSqrt(n){
  for(let i = 0; i <= 1000; i++){
    console.log(i);
  }
  console.log("Expensice function call!");
  return Math.sqrt(n);
}

export default UseMemoExample;