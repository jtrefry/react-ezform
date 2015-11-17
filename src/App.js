import React, { Component } from 'react';
import EZForm from './components/EZForm';
import contactFormFields from './examples/contact-form-fields';

export default class App extends Component {

    constructor(props) {
        super(props);

        //initial state
        this.state = {
            contact: {
                //these must map to the field names
                firstName: "",
                lastName: "",
                phone: "",
                phoneType: -1,
                email: "",
                confirmEmail: "",
                subscribeMe: false
            }
        }
    }

    handleFormChanged(newFormData) {
        console.log(newFormData);
        this.setState({contact: newFormData});
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.refs.contactForm.validateAll()) {
            alert('Validation passed');
        }
    }

    render() {
        return <div className="container" style={{ marginTop: "20px" }}>
            <h1>EZ Form Example</h1>
            <EZForm ref="contactForm" fields={contactFormFields}
                         data={this.state.contact}
                         fields={contactFormFields}
                         onFormChange={this.handleFormChanged.bind(this)} />

            <div className="row">
                <div className="col-sm-12 text-center">
                    <input type="submit" className="btn btn-default" value="Submit" onClick={this.handleSubmit.bind(this)} />
                </div>
            </div>
        </div>
    }
}