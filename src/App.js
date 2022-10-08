import React from 'react'
function App() {


  function Nav(){
    return(
        <nav>
            <img src="https://picsum.photos/id/237/200/300
" width="40px"/>
        </nav>
    );
}

function Title(){
    return(
        <h1>Why I Love React</h1>
    );
}

function List(){
    return(      
      <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>);
        }
        
        
function Header(){
    return(
        <header>
            <Nav/>
            <Title/>
            <List />
        </header>
    );
}


function Footer(){
    return(
        <footer>© 2022 react development. All rights reserved. </footer>
    );
}
  
  return (
    // challenge 2
    <>
    <Header /> 
    <Footer />       
</>
  );
}

export default App;
