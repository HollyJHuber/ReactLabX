import React, { Component } from 'react';

class GraphComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }

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

    handleClick() {
        debugger
        // This is another way to update state. Provide a function that takes
        // the old (previous) state and returns changes for the new state.
        this.setState(prevState => ({ votes: prevState.votes + 1 }));
    }

}

// Can't forget to export the component as the default export!
export default GraphComponent;

