import React, { Component } from 'react';

class Contact extends Component {
    render() {
        console.log('contact :::');
        console.log(this.props.contact);
        return (
            <div className="Contact">
                <h3>Contact details</h3>
            </div>
        );
    }
}

export default Contact;