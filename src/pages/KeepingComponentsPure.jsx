export function KeepingComponentsPure (){

    return (
        <> 
        <h1>Keeping Components Pure - Komponentleri Saf Fonksiyonlar Olarak Yazmak</h1>
        <TeaLatteRecipe personCount={2}/>
        <TeaLatteRecipe personCount={3}/>
        <TeaLatteRecipe personCount={4}/>
        <CupSet/>
        <CupSet2/>
        </>
    )
}

/* pure function sadece kendi işi ile ilgileriniz double fonksiyonuna num için 2 dediğimiz de bunun cevabının 2 olduğu açık bir şekilde bellidir ve değişmez*/

//pure function
function double (num){
    return 2 * num ;

}
double(2);

/* dışarda kendi dışında başka şeyle rile uğraşıyor ve her çağırdığımızda farklı bir sonuç verir */


//in pure function
let counter = 0 ;

function inPureFunc(){
    counter ++;
    console.log (counter);
}

inPureFunc();
inPureFunc();


//pure function

function TeaLatteRecipe ({personCount}){

    return (
        <>
        <h2> {personCount} kişilik çay tarifi</h2>

        <ul>
            <li>{personCount} çay kaşığı şeker</li>
            <li>{personCount * 2} çay kaşığı süt</li>
            <li>{personCount} çay bardağı çay</li>
        </ul>
        </>
    )

}

//inpure function



function Cup ({guest}){
    

    return (
        <p> Fincan #{guest}</p>
    )
}

function CupSet (){

    return (
        <>
        <Cup guest= {1}/>
        <Cup guest= {2}/>
        <Cup guest= {3}/>
        <Cup guest= {4}/>
        <Cup guest= {5}/>
        <Cup guest= {6}/>
        <Cup guest= {7}/>
        </>

    )
}


function CupSet2 (){

    let cups=[];

    for (let i=0; i<10; i++) {
        cups.push (<Cup guest={i}/>)
    }

    return (
        <>
        <Cup guest= {1}/>
        <Cup guest= {2}/>
        <Cup guest= {3}/>
        <Cup guest= {4}/>
        <Cup guest= {5}/>
        <Cup guest= {6}/>
        <Cup guest= {7}/>
        </>

    )
}