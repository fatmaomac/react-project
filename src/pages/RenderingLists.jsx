import { v4 as uuidv4 } from 'uuid';
/* li kullandığımızda otomatik olarak id vermesi için kullandık */

const veryFamousPeople  = [
  
    {id:0, name: "John Wick" , profession: "Suikast Uzmanı" , imgUrl:"https://i.imgur.com/fFVFX7q.jpeg"},
    { id:1 , name: "Jason Statham" , profession: "Suikast Uzmanı", imgUrl:"https://i.imgur.com/lICfvbD.jpg"},
    {id:2, name: "Einstein" , profession: "Bilim İnsanı", imgUrl:"https://i.imgur.com/U1ZWTBK.jpeg"},
    {id:3, name: "Marie Curie" , profession: "Bilim İnsanı" , imgUrl:"https://i.imgur.com/MK3eW3Am.jpg"},
    { id:4 ,name: "Tarkan" , profession: "Pop Star" , imgUrl:"https://i.imgur.com/fFVFX7q.jpeg"},
    {id:5 , name: "Ajda Pekkan" , profession: "Pop Star" , imgUrl:"https://i.imgur.com/MK3eW3Am.jpg"},
   
]
export function RenderingLists(){
    
    return (
        <>
           <h1>Rendering List (liste render etmek) </h1>

           <ul>
           <VeryFamousPeopleList/>
           <VeryFamousAssassins/>
          </ul>
        
        </>

    )
}

function VeryFamousPeopleList (){
    const item = veryFamousPeople.map ((person)=>{
        return <li key={uuidv4()}><img className="avatar"  src={person.imgUrl}></img>{person.name}, meslek:  {person.profession} </li>
    })


    return (
        <>
        <h2>Çok Ünlü İnsanlar Listesi 1</h2>
        <ul>
        {item}
        </ul> 
        
        </>
    )
}



function VeryFamousAssassins (){

    /* Sadece mesleği suikast uzmanı olan ünlülerin isimlerinin ve mesleklerinin filtrelenmesi uzun hali */
    /*
    const list = veryFamousPeople.filter((person)=>{
         if (person.profession === "Suikast Uzmanı") {
         return true;
         } 
         return false;
    })
    const list2 = list.map ((person)=>{
        return <li>{person.name}</li>

    })*/

    const list = veryFamousPeople
    .filter (person=>person.profession==="Suikast Uzmanı")
    .map ((person)=><li key={person.id}>{person.name} meslek :{person.profession} </li> )
    return (
        <>
        <h2>Ünlü Suikastçıların İsmi</h2>
        <ul> {list} </ul>
        </>
    )
}

