import React, { Component } from 'react';

class GraphComponent extends Component {

    // React calls the render method every time the props change, which keeps
    // the component HTML up to date.
    render() {
        // An unusual thing about JSX is that the `style` attribute should be a
        // JavaScript object, not a string like in HTML.
        return (
            <div className="GraphComponent">

            </div>
        );
    }

}

// Can't forget to export the component as the default export!
export default GraphComponent;

