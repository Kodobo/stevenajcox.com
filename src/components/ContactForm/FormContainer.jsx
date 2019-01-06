import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';
import './FormContainer.css';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        email: '',
        message: ''
      },
    };
  }

  handleFormSubmit = () => {
    console.log('handleSubmit: ', this.state.newUser);
  };

  handleInput = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState( prevState => {
        return {
          newUser : {
            ...prevState.newUser, [name]: value
          }
        }
      }, () => console.log('handleInput ', this.state.newUser)
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
      }),
      () => console.log(this.state.newUser)
    );
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Input type={'text'}
               title={'Full Name'}
               name={'name'}
               value={this.state.newUser.name}
               placeholder={'Please enter your full name'}
               handleChange={this.handleInput}/>
        <Input type={'text'}
               title={'Email Address'}
               name={'email'}
               value={this.state.newUser.email}
               placeholder={'Please enter your email address'}
               handleChange={this.handleInput}/>
        <TextArea title={"Your Message"}
                  rows={10}
                  value={this.state.newUser.message}
                  name={"message"}
                  handleChange={this.handleTextArea}
                  placeholder={"Please write your message here"}/>
        <Button title={"Submit"}
                action={this.handleFormSubmit}
                type={"primary"} />
      </form>
    );
  }
}
export default FormContainer;