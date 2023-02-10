import React, { Component } from 'react';
 
//receives onDelete function from parent
class Counter extends Component <{counter: {id:number, value:number}, onIncrement: (counter: {id:number, value:number}) => void ,  onDelete: (id: number) => void}> {

    render() {

        return (
        <div>
            <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className='btn btn-seconday btn-sm'
            >
                Increment
            </button>
            <button 
                onClick={ () => this.props.onDelete(this.props.counter.id) } 
                className="btn btn-danger btn-sm m-2">DETETE
            </button>
        </div>
        );
    }

    private getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: value} = this.props.counter;
        return value === 0 ? "Zero" : value; 
    }
}
export default Counter;