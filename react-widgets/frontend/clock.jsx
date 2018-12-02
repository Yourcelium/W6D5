import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    tick() {
        console.log("Tick")
        this.setState({time: new Date()});
    }

    componentDidMount() {
        this.tickInterval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.tickInterval);
    }

    render() {return (
        <>
            <h1>Clark O\' Clock</h1>
            <span>Date: {this.state.time.getDate()}</span>
            <span>Hour: {this.state.time.getHours()}</span>
            <span>Minute: {this.state.time.getMinutes()}</span>
            <span>Second: {this.state.time.getSeconds()}</span>
        </>
        )}
    
};



export default Clock;