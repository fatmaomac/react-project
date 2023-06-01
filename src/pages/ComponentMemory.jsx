import { useState } from "react";
import {sculptureList} from "../data/data"
export function ComponentMemory(){
    return (
        <>
        <h1>A Component's Memory - Bir Kompenent'in (Bileşen'in) Hafızası  </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus deleniti, quisquam obcaecati voluptas suscipit distinctio eos illo assumenda ducimus!</p>
        <ButtonNotRendering/>
        <Button/>
        <h2>Sanat ve Sanatçı listesi(Card)</h2>
        <Carousel/>
        </>
    )
}

const ButtonNotRendering = ()=>{
    let counter=0;

    function handleClick(){
        counter=counter + 1 ;
        console.log(counter)

    }
    return <button onClick={handleClick}>Hello {counter}</button>
}




const Button = ()=>{
  
    const[counter, setCounter]=useState(0); //useState react tarafından bize sunuluyor

    function handleClick(){
    
      setCounter(counter + 1)

    }
    return <button onClick={handleClick}>Hello {counter}</button>
}




function Carousel (){
    const [currentIndex , setCurrentIndex] = useState (0);

    const [showMore , setShowMore] = useState (false)

    const { name, url, alt , artist, description} = sculptureList[currentIndex];

    const isLastIndex = currentIndex === sculptureList.length - 1 ? true : false

    const isFirstIndex = currentIndex === 0 ? true : false

    

    function handleNext () {

        
         setCurrentIndex(currentIndex + 1) ;
    }
   
    function handleLast (){
        setCurrentIndex (currentIndex - 1)
    }

    
    return (
    
      
    <div style={ {border:"2px solid limegreen", padding:"8px"}}> 
   
     <h2> {name} </h2>
     <p>{currentIndex + 1}/{sculptureList.length} 
     <button type="submit" onClick={handleLast} disabled={isFirstIndex}>Önceki</button>
     <button type="submit" onClick={handleNext} disabled={isLastIndex}>Sonraki</button></p>
     <img src={url} alt={alt}/>
     <h3>{artist}</h3>
     <button type="button" onClick={()=>{setShowMore(!showMore)}}> {showMore ? "Detay Kapat" : "Detay Göster"} </button>
     { 
        showMore && <p>{description}</p>
     }
 
     

     </div>
   
    )
}