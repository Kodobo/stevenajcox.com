import React, { Component } from 'react';
import { BodyContent } from './styles/Pages';
import ContactForm from "../components/ContactForm/FormContainer";
import { withToastManager, ToastProvider } from 'react-toast-notifications';

const FormWithToasts = withToastManager(ContactForm);

export default class Contact extends Component {
    render() {
        return (
            <BodyContent>
              <h1> Contact Steven </h1>
              <ToastProvider>
                <FormWithToasts/>
              </ToastProvider>
            </BodyContent>
        )
    }
}