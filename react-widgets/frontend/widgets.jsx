import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';

import Tabs from './tabs';


// function Root(props) {
//     return (<div>React is working</div>);
// }

class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
                <div>
                    < Clock />
                </div>

                <div>
                    < Tabs tabs= {[{ title: 'Frank', content: 'Egg' }, { title: 'Charlie', content: 'Cheese' }, { title: 'Dee', content: 'Bird' }]} /> 
                </div>
            </>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById('main'))
})