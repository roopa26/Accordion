import AccordionBody from "./AccordionBody";

const AccordionHeader = ({showAccordItem, showAccordProps}) =>{

    const {setShowAccordItem,setShowAccord} = showAccordProps;
    const handleClick = () => {
        setShowAccordItem()
        setShowAccord(!showAccordItem);
    }

    return (<div className="accordContainer">
    <div className="accordHeader" onClick={handleClick}>
            <span>Accordion</span>
            <span>🔽</span>
        </div>
        <div style={showAccordItem ? {"display":"block"}:{"display":"none"}}>
            <AccordionBody/>
        </div>
    </div>)
}

export default AccordionHeader;