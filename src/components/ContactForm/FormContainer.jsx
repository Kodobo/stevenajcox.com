import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';
import './FormContainer.css';
import * as emailjs from 'emailjs-com';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        senderEmail: '',
        message: ''
      },
      sendingDisabled: false
    };
  }

  componentDidMount () {
    emailjs.init("user_zQzSvf211by5lDKI3R5pl");
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const template = "template_0qVgU5Lv";

    this.sendEmail(
      template,
      this.state.newUser.senderEmail,
      this.state.newUser.name,
      "Steven",
      this.state.newUser.message
      );

    this.setState({
      formSubmitted: true
    })
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
        this.setState({ formEmailSent: true });
        toastManager.add("Message sent successfully!", { appearance: 'success', autoDismiss: true });
        this.handleClearForm();
        this.setState({ sendingDisabled: false });
      })
      .catch(err => {
        console.error('Failed to send email, error: ', err);
        toastManager.add("Sorry, there was a problem. Please try again!", { appearance: 'error', autoDismiss: true });
        this.setState({ sendingDisabled: false });
      }
    )
  }

  handleInput = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState( prevState => {
        return {
          newUser : {
            ...prevState.newUser, [name]: value
          }
        }
      }
    )
  };

  handleTextArea = e => {
    const value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          message: value
        }
      })
    );
  };

  handleClearForm = () => {
    this.setState({ newUser: {
        name: '',
        senderEmail: '',
        message: ''
    }})
  };

  render() {
    const { newUser, sendingDisabled } = this.state;
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Input type={'text'}
               title={'Full Name'}
               name={'name'}
               value={newUser.name}
               placeholder={'Please enter your full name'}
               handleChange={this.handleInput}/>
        <Input type={'text'}
               title={'Email Address'}
               name={'senderEmail'}
               value={newUser.senderEmail}
               placeholder={'Please enter your email address'}
               handleChange={this.handleInput}/>
        <TextArea title={"Your Message"}
                  rows={10}
                  value={newUser.message}
                  name={"message"}
                  handleChange={this.handleTextArea}
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