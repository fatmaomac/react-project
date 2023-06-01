export function RespondingToEvents (){

    return (
        <>
        <h1>
            Responding to Events - Eventlere yanıt vermek
            
        </h1>
        <Button1/>
        <Button2/>

        <AlertButton message="şarkı çalıyor" > oynat</AlertButton>
        <AlertButton message="şarkı durduruldu" > durdur</AlertButton>
        <ToolBar/>
        <Form/>
      
        </>
    )
}

const Button1 = ()=> {
    function handleClick (e){
        alert("hello")
    }

return (
    <button type="button" onClick={(handleClick) }> Buton 1</button>
)


}

function Button2 (){
    return (
        <button type="button" onClick={(e)=>{alert ("hi")}}>Buton 2</button>
    )
}



function AlertButton({message, children}){

    function handleClick (e){
        alert(message);
    }
    return (
        <button type="button" onClick={handleClick}>{children}</button>
    )
}

function BaseButton ({onClick, children}){

    
return (
    <button onClick={ (e)=>  {
        e.stopPropagation(); onClick()} }>{children}</button>
)
 }

 function UploadButton  (){

    return(
        <BaseButton onClick={ (e)=>{
          alert('dosyalar yükleniyor')}} > Upload </BaseButton>
    )
 }

 function PlayButton ({movie}){ 

    return(
        <BaseButton onClick={(e)=>{
             alert (movie +' '+ 'film oynatılıyor...')}  }>filmi oynat </BaseButton>
    )
 }


 const ToolBar = ()=>{
    return (
        <nav style={{backgroundColor:'#eee', padding:"24px", borderRadius:"8px", marginTop:"8px"}} onClick={(e)=>{alert ("Ben Toolbar")}}> 
        <UploadButton/>
        <PlayButton movie='Matrix'/>
        </nav>
    );
 };

 function Form (){

    function handleSubmit (e){
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" />
            <button type="submit"> Gönder </button>
        </form>
    )
 }