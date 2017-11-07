import React, { Component } from 'react';
import GraphBarComponent from './GraphBarComponent';


class GraphComponent extends Component {

    // React calls the render method every time the props change, which keeps
    // the component HTML up to date.
    render() {
        // An unusual thing about JSX is that the `style` attribute should be a
        // JavaScript object, not a string like in HTML.
        return (
            <div className="GraphComponent">
                <div className="vanilla"><GraphBarComponent/> </div>
                <div className="chocolate"><GraphBarComponent /> </div>
                <div className="strawberry"><GraphBarComponent /> </div>
            </div>
        );
    }
}

// Can't forget to export the component as the default export!
export default GraphComponent;


// from pizza tower
//style={{transform: "rotate(" + this.props.lean + "deg)"}}
// I tried this: style={{height: + " "  + this.prop.votesV + "px"}}
// and this: style={{height: this.prop.votesV + "px"}}
// inside div and inside GraphBarComponent
