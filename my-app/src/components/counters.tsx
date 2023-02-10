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
        onDelete: (id: number) => void, 
        onIncrement: (counter: {id:number, value:number}) => void
    }>
{
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.onReset} 
                    className="btn btn-primary btn-sm m-2">
                    RESET
                </button>
                {this.props.counters.map(counter=> (
                    <Counter 
                        key={counter.id} 
                        onDelete={this.props.onDelete}  //pass reference to child component 
                        onIncrement={this.props.onIncrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;