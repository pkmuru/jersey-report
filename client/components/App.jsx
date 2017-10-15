import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <button id="something-btn" type="button" class="btn btn-success btn-sm">
                    Click  here
                </button>
                <button id="something-btn2" type="button" class="btn btn-info btn-sm">
                    Click  here
                </button>
            </div>);
    }
}