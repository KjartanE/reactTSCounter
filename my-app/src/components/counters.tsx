import React, {Component} from "react";
import Counter from './counter';

export interface counter {
    id: number,
    value: number
}

class Counters extends Component
    <{
        counters: counter[], 
        onReset: () => void , 
        onAdd: () => void,
        onDelete: (id: number) => void, 
        onIncrement: (counter: {id:number, value:number}) => void
        onDecrement: (counter: {id:number, value:number}) => void
    }>
{
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.onReset} 
                    className="btn btn-primary btn-sm m-2">
                    RESET COUNTS
                </button>
                {this.props.counters.map((counter, idx)=> (
                    <Counter 
                        key={`counters-${idx}`} 
                        onDelete={this.props.onDelete}  //pass reference to child component 
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        counter={counter}
                    />
                ))}
                <button 
                    onClick={this.props.onAdd} 
                    className="btn btn-primary btn-sm m-2">
                    ADD COUNTER
                </button>
            </div>
        );
    }
}

export default Counters;