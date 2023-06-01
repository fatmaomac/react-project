

export function NavMain({setUrl}) {
  return (
    <nav>
      <ul>
        <li>
            <Link setUrl={setUrl} url="home">Anasayfa</Link>
        </li>
        <li>
            <Link setUrl={setUrl} url="passing-props">Özellik Transfer</Link>
        </li>
        <li>
            <Link setUrl={setUrl} url="conditional-rendering">Koşullu Render</Link>
        </li>
        <li>
            <Link setUrl={setUrl} url="rendering-list">Liste Render Etmek</Link>
        </li>
        <li>
            <Link  setUrl={setUrl} url="pure"> Komponentleri Saf Fonksiyonlar Olarak Yazmak</Link>
        </li>
        <li>
            <Link setUrl={setUrl} url="event">  Eventlere Yanıt Vermek</Link>
        </li>
        <li>
            <Link setUrl={setUrl} url="component-memory">  Bir Kompenent'in Hafızası</Link>
        </li>
      </ul>
    </nav>
  );
}



function Link({setUrl ,url,  children}){

  function handleClick(e){
    e.preventDefault();
    setUrl(url);
  }
    return <a href="#" onClick={handleClick}>{children}</a>;
}




