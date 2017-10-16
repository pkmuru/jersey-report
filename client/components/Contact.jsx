import React from 'react';
export  default class Call extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.callid}</td>
                <td>aa</td>
                <td>bb</td>
                <td>
                    <button id="something-btn" type="button" className="btn btn-success btn-sm">
                        Click here
                    </button>
                    &nbsp;
                    <button id="something-btn2" type="button" className="btn btn-info btn-sm">
                        Click here
                    </button>
                </td>
            </tr>
        );
    }
}