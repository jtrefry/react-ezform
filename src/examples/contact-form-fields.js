import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import regexValidators from './regex-validators';

const contactFormFields = [
    {
        name: "firstName",
        type: "string",
        label: { text: "First Name *" },
        validators: [{
            validate: data => data.firstName.length > 0,
            message: "Required field"
        }]
    }, {
        name: "lastName",
        type: "string",
        label: { text: "Last Name *" },
        validators: [{
            validate: data => data.lastName.length > 0,
            message: "Required field"
        }]
    }, {
        name: "phone",
        type: "string",
        label: {
            text: "Phone *"
        },
        tooltip: {
          render: data => (
              <OverlayTrigger overlay={<Tooltip id="phoneTooltip">US 10 digit phone number</Tooltip>} placement="top" delayShow={150} delayHide={150}>
                  <span className="tooltip-icon">?</span>
              </OverlayTrigger>
          )
        },
        control: {
            attributes: {
                placeholder: "111-222-3333"
            }
        },
        validators: [{
            validate: data => (data.phone.length > 0),
            message: "Required field"
        }, {
            validate: data => (data.phone.length == 0 || regexValidators.phone.test(data.phone)),
            message: "Invalid phone number"
        }]
    }, {
        name: "phoneType",
        type: "number",
        label: { text: "Phone Type *" },
        control: {
            tag: "select",
            options: [
                { id: -1, text: "Select..."},
                { id: 1, text: "Home" },
                { id: 2, text: "Work" },
                { id: 3, text: "Cell" },
                { id: 4, text: "Other" }
            ]
        },
        validators: [{
            validate: data => (data.phoneType || -1) > -1,
            message: "Required field"
        }]
    }, {
        name: "email",
        type: "string",
        label: { text: "Email *" },
        control: {
            attributes: {
                placeholder: "someone@mail.com"
            }
        },
        validators: [{
            validate: data => (data.email.length > 0),
            message: "Field required"
        },{
            //don't show this msg if the field is empty since required field message will already show
            validate: data => ((data.email.length === 0) || (regexValidators.email.test(data.email))),
            message: "Invalid email"
        }],
        dependentFields: ["confirmEmail", "subscribeMe"]
    }, {
        name: "confirmEmail",
        type: "string",
        label: { text: "Confirm Email *" },
        control: {
            attributes: {
                placeholder: "someone@mail.com"
            }
        },
        validators: [{
            validate: d => ((d.email.length === 0) || (d.confirmEmail.length > 0)),
            message: "Field required"
        },{
            validate: d => ((d.email.length === 0) || (d.confirmEmail.length === 0) || (d.confirmEmail.toLowerCase() === d.email.toLowerCase())),
            message: "Email addresses do not match"
        }],
        dependentFields: ["email", "subscribeMe"]
    }, {
        name: "subscribeMe",
        type: "boolean",
        label: {
            text: "Subscribe Me"
        },
        validators: [{
            validate: d => (d.subscribeMe === false || (d.email.length > 0 & d.confirmEmail.toLowerCase() === d.email.toLowerCase())),
            message: "Please provide a valid and confirmed email"
        }],
        dependentFields: ["email", "confirmEmail"]
    }
];

export default contactFormFields;