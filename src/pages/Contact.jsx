import React, { Component } from 'react';
import { BodyContent } from './styles/Pages';
import ContactForm from "../components/ContactForm/FormContainer";

export default class Contact extends Component {
    render() {
        return (
            <BodyContent>
              <h3> Contact Steven </h3>
              <ContactForm/>
            </BodyContent>
        )
    }
}