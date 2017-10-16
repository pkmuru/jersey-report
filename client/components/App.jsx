import React from 'react';
import Contacts from './Contacts.jsx'
export default class App extends React.Component {

    reloadData(arg) {
        alert('aaa')
        return <div>Welcome{arg}</div>
    }


    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <button id="reload" onClick={() => this.reloadData('raji')}>Reload
                </button>
                <Contacts id="c1"/>
                {this.reloadData('muru')}
            </div>);
    }
}