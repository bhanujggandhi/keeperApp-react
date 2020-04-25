import React from 'react';
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note"

function App(){
    return <div>
            <header>
                <Heading/>
            </header>
            <Note/>
            <Note/>
            <footer>
                <Footer/>
            </footer>
        </div>
}

export default App;