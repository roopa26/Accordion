import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import AccordionHeader from './AccordionHeader';

const App = () => {
    const [showIndex,setShowIndex] = useState(0);
    const [showAccord, setShowAccord] = useState(false);

    return(
        <div>
            {
               [...Array(5)].map((_, i) => (
                    <AccordionHeader key={i} showAccordItem={showIndex==i?showAccord:false}  showAccordProps={{setShowAccordItem:()=>setShowIndex(i), setShowAccord}}/>
               ))
            }
            
            
        </div>
    )
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);