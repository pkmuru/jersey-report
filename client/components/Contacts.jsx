import React, {Component} from  'react';
import Contact from './Contact.jsx';


import _ from 'lodash';


export default class Contacts extends Component {


    render() {
        var values = Array.apply(null, Array(3)).map(String.prototype.valueOf, "hi");

        return (
            <div id="aaa">

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>Row Id</td>
                        <td>Call Id</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        _.map(values, function (arg) {
                            console.info('aaaa' + arg)
                            return <Contact callid={arg}/>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }

}