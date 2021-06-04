import React, { useState } from 'react';


const ToDos = (props) => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const { listItems, onSelect, id } = props;
    return(
        <div className="list-section">
            <i className="far fa-trash-alt" onClick={()=>{
                onSelect(id)
            }}></i>
            <li className={active ? "check" : null}>{listItems}</li>
            <i className="far fa-check-circle" onClick = {handleClick}></i>
        </div>
    )
}

export default ToDos;