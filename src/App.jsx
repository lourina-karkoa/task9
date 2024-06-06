import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const [Count,setCount] =useState(0)

  function changingCount() {
    if (Count<10){
    setCount(Count + 1)}
    else if(Count<100){
      setCount(Count + 10)}
    else if(Count<1000){
        setCount(Count + 100)}
        else {
        setCount(1000)
        }
  }

 
  const [changeclass,setchangeclass] =useState(true)
  function changingCountDecreas() {
    setchangeclass(!changeclass)
  }
  useEffect(()=>{
   if(Count ==1000){
    changingCountDecreas()
   }
  },[Count])


  function changingnumber() {
    if ((Count <= 1000)&&(Count >100)){
      setCount(Count - 100)}
      else if((Count <= 100)&&(Count > 10)){
        setCount(Count - 10)}
      else if((Count <= 10 )&&(Count > 1)){
          setCount(Count - 1)}
          else {
          setCount(1)
          }
  }

  const  [Show ,setShow ] = useState (false);
  const  [ChangeColor ,setChangeColor ] = useState (false);
  const  [ChangeColors ,setChangeColors ] = useState (false);
  const  [ChangeColores ,setChangeColores ] = useState (false);

  useEffect (()=>{
    if((Count==10) || (Count==100) || (Count==1000)){
   
        setShow(true)
       
    
    }
    else if(Count==0){
      setTimeout(()=>{
        setShow(true)
      },600)
    }
    else{
      setShow(false)
      
    }
  },[Count])
  useEffect (()=>{
    if(Count==10){
      
        setChangeColor(true)
          
    }else{
    
      setChangeColor(false)
      
    }
  },[Count])
  useEffect (()=>{
    if(Count==100){
      
        setChangeColors(true)
  
    }else{
    
      setChangeColors(false)
    }
  },[Count])
  useEffect (()=>{
    if(Count==1000){
      
        setChangeColores(true)
  
    }else{
    
      setChangeColores(false)
    }
  },[Count])

  return (
    <>
    <div className={ ChangeColor ? 'baba' : ''}>
    <div className={ ChangeColors ? 'baba2' : ''}>
    <div className={ ChangeColores ? 'baba-three' : ''}>
    <div className='Lk-baba'>  {Count}  
    <button className='LK-button-one' onClick={changingCount}>
      inceas
    </button>
    <button className={changeclass ? 'LK-button-bb' :'LK-button-tt'} onClick={changingnumber}>
      decreas
    </button>
     </div>
     <div className={Show ? 'pop-up' : 'pop-up2'}  ><p>wellcom in my website</p></div>
     </div>
     </div>
     </div>
    </>
  )

}

export default App
