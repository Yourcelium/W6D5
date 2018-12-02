import React from 'react';

import TabHeader from './tabheader';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(e){
        // debugger
        this.setState({index: e.currentTarget.id})
    }
    render() {
        const headers = this.props.tabs.map((tab, i) => { 
                
                
                return (
                <div id={i} class='tab-header' onClick={this.updateIndex}>
                    <TabHeader tab = { tab }/>
                </div>
                )
            })
 
        return (
        <div>
            <ul class='tab-list'>
                { headers }
            </ul>

        </div>
        )
    }
}

export default Tabs
   