import React from 'react';

function TabHeader(props) {
    return (
    <header>
        <h1>{props.tab.title}</h1>
    </header>  
    )
}

export default TabHeader;