import React, {Component} from 'react';

class View extends Component {
    render() {
        return (
            <div className="tc">
                <div className="tc dib bg-white br3 ma3 shadow-4">
                    <h1 className="pa3">{this.props.id}</h1>
                </div>
            </div>
        );
    }
}

export default View