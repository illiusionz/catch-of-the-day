import React from 'react';
import {getFunName} from "../helpers";


class StorePicker extends React.Component {

    goToStore(event){
        // 1. Stop the form from submitting
        event.preventDefault();
        console.log('Going to store');
    }

    render(){
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store &#8594;</button>
            </form>
        )
    }
}


export default StorePicker;