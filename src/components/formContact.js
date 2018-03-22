import React, { Component } from 'react';

class formContact extends Component {
    constructor() {
        super();
        this.state = {
            email: null
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.refs.email.value === '') {
            alert('Email is required.');
        } else {
            this.setState({
                email: this.refs.email.value
            }, function () {
                this.props.addEmail(this.state.email);
            });
        }
    }

    render() {
        return (
            <div className="formContact">
                <h3>Find contact</h3>
                <form style={{padding: 10}} onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form-group">
                        <label htmlFor="email">Enter email</label>
                        <input id="email" type="text" ref="email" name="email" placeholder="Eq. example@email.com" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Find</button>
                </form>
            </div>
        );
    }
}

export default formContact;