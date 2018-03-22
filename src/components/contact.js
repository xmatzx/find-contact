import React, { Component } from 'react';
import { FaUser, FaMapMarker } from 'react-icons/lib/fa';

class Contact extends Component {
    render() {
        const contact = this.props.contact;
        const avatarStyle = {
            backgroundImage: 'url(' + contact.avatar + ')',
        };

        if (Object.keys(contact).length === 0 && contact.constructor === Object) {
            return (
                <div className="Contact">
                    <h3>Contact details</h3>
                    <div className="row m-0">
                        <p className="text-info">Contact not found.</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="Contact">
                <h3>Contact details</h3>
                <div className="row m-0">
                    <div className="col-4 avatar" style={avatarStyle}></div>
                    <div className="col-8">
                        <h6 className="mb-0">{contact.fullName}</h6>
                        <small><FaUser /> {contact.gender}</small><br />
                        <small><FaMapMarker />{contact.location ? contact.location : 'Unknown' }</small>
                    </div>
                </div>
            </div >
        );
    }
}

export default Contact;