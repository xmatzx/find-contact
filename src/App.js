import React, { Component } from 'react';
import Contact from './components/contact';
import FormContact from './components/formContact';

class App extends Component {
    constructor() {
        super();
        this.state = {
            contact: {}
        }
    }

    getContact(email) {
        const api_key = '';

        fetch('https://api.fullcontact.com/v3/person.enrich', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + api_key
            },
            body: JSON.stringify({
                'email': email
            })
        }).then(function (res) {
            return res.json();
        }).then(data => this.setState({ contact: data }))
            .catch(e => console.log('error', e));
    }

    handleGetContact(email) {
        this.getContact(email);
    }

    render() {
        return (
            <div className='App'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-4'>
                            <Contact contact={this.state.contact} />
                        </div>
                        <div className='col-4'>
                            <FormContact addEmail={this.handleGetContact.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
