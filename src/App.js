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

    handleGetContact(email) {
        const api_key = process.env.REACT_APP_API_KEY;

        fetch('https://api.fullcontact.com/v3/person.enrich', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + api_key
            },
            body: JSON.stringify({
                'email': email
            })
        }).then(results => {
            return results.json()
        }).then(data => {
            if (data.status === 404 || data.status === 202) {
                this.setState({contact: {}});
            } else {
                this.setState({contact: data});
            }
        }).catch(e => console.log('error', e));
    }

    render() {
        return (
            <div className='App'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-4 mb-2'>
                            <FormContact addEmail={this.handleGetContact.bind(this)} />
                        </div>
                        <div className='col-md-4'>
                            <Contact contact={this.state.contact} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
