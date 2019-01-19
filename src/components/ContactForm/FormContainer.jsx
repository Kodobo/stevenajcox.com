import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';
import './FormContainer.css';
import * as emailjs from 'emailjs-com';

const BLANK_FORM = {
  name: '',
  senderEmail: '',
  message: ''
};

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formContent: BLANK_FORM,
      sendingDisabled: true
    };
  }

  componentDidMount () {
    emailjs.init("user_zQzSvf211by5lDKI3R5pl");
  };

  handleFormSubmit = event => {
    const { formContent } = this.state;
    event.preventDefault();
    const template = "template_0qVgU5Lv";

    this.sendEmail(
      template,
      formContent.senderEmail,
      formContent.name,
      "Steven",
      formContent.message
      );
  };

  sendEmail (templateId, senderEmail, fromName, toName, message) {
    const { toastManager } = this.props;
    this.setState({ sendingDisabled: true });
    emailjs.send(
'gmail',
      templateId,
      {
        sender_email: senderEmail,
        from_name: fromName,
        to_name: toName,
        message_html: message
      })
      .then(res => {
        toastManager.add("Message sent successfully!", { appearance: 'success', autoDismiss: true });
        this.handleClearForm();
      })
      .catch(err => {
        console.error('Failed to send email, error: ', err);
        toastManager.add("Sorry, there was a problem. Please try again!", { appearance: 'error', autoDismiss: true });
      }
    )
  }

  isSendingDisabled = () => {
    const { formContent } = this.state;
    return !!(Object.values(formContent).some(value => value === ''))
  };

  handleInput = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => {
      return {
        formContent: {...prevState.formContent, [name]: value},
        sendingDisabled: this.isSendingDisabled()
      }
    });
  };

  handleClearForm = () => {
    this.setState({ formContent: BLANK_FORM })
  };

  render() {
    const { formContent, sendingDisabled } = this.state;
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Input type={'text'}
               title={'Full Name'}
               name={'name'}
               value={formContent.name}
               placeholder={'Please enter your full name'}
               onChange={this.handleInput}/>
        <Input type={'text'}
               title={'Email Address'}
               name={'senderEmail'}
               value={formContent.senderEmail}
               placeholder={'Please enter your email address'}
               onChange={this.handleInput}/>
        <TextArea title={"Your Message"}
                  rows={10}
                  value={formContent.message}
                  name={"message"}
                  onChange={this.handleInput}
                  placeholder={"Please write your message here"}/>
        <Button title={"Submit"}
                action={this.handleFormSubmit}
                type={"primary"}
                disabled={sendingDisabled} />
      </form>
    );
  }
}
export default FormContainer;