import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import { Logo } from "./components/Logo";
import { NavMain } from "./components/NavMain";
import { HomePage, ConditionalRendering, PassingProps, RenderingLists, KeepingComponentsPure, RespondingToEvents, ComponentMemory} from './pages';
import { useState } from "react";


function App() {
 
  const [url , setUrl]= useState("home")
 
  

  return (
    <>
      <header>
        <Logo/>

        <NavMain setUrl={setUrl} />
      </header>
      <main>
        { 
        url === "home" && <HomePage/>
        }

       { 
        url === "passing-props" && <PassingProps/>
        }
        { 
        url === "conditional-rendering" && <ConditionalRendering/>
        }
          { 
        url === "rendering-list" && <RenderingLists/>
        }
        { 
        url === "pure" && <KeepingComponentsPure/>
        }
          { 
        url === "event" && <RespondingToEvents/>
        }
        { 
        url === "component-memory" && <ComponentMemory/>
        }


        
        
        
      </main>
      <footer>Her hakkı saklıdır &copy; 2023</footer>
    </>
  );
}

export default App;
