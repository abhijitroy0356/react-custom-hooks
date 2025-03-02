import Track from './components/Track';
import './App.css'
import useTodos from './hooks/UseTodos'
import {useIsOnline} from './hooks/UseIsOnline';
import { useMouseMove } from './hooks/UseMouseMove';
import { useDimensitons } from './hooks/UseDimensiton';
import { useIntervalHook } from './hooks/UserIntervalHook';
import { useState } from 'react';
import { useDebounce } from './hooks/UseDebounc';
function App() {

//  const {todos, loading} = useTodos(3)
//   return (
//     <>

//     {loading ? "Loading...........":todos.map((mp)=>{
//       return <Track key={mp.id} todo={mp}/>
//     })}
    
//     </>
//   )

  // const online= useIsOnline();
  // if(!online){
  //   return (
  //     <div>
  //       you are offline
  //     </div>
  //   )
  // }
  // return (
  //   <div>
  //     you are online 
  //   </div>
  // )
  // const mouseMove = useMouseMove()

  // return <div>
  //   <div>{mouseMove.x}</div>
  //   <div>{mouseMove.y}</div>
  // </div>
  // const dimension = useDimensitons()
  // return (
  //   <div>
  //     <div>{dimension.width}</div>
  //     <div>{dimension.height}</div>
  //   </div>
  // )
  // const n = 400;
  // const countInterval = useIntervalHook(n);
  // return (
  //   <div>
  //     the count is {countInterval}
  //   </div>
  // )
   const [inputValue , setInputValue]= useState('')
   const debounce = useDebounce(inputValue, 500)
   return (
    <div>
      <input placeholder='input' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} type='text'/>
      <div>{debounce}</div>
    </div>
   )
}



export default App
