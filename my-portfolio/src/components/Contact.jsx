import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  state = {
    username: "",
    email: "",
    inquiry: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, inquiry } = this.state;

    return (
      <section id='contact'>
        <h1 className="contact-header">Contact Me</h1>
      <form className="contact-form">
        <label className="" htmlFor="username">
          Name:
        </label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="inquiry">Inquiry:</label>
        <textarea
          id="inquiry"
          type="text"
          rows={3}
          name="inquiry"
          value={inquiry}
          onChange={this.handleChange}
          />
          <br />
        <button className="submit-button">Submit</button>
        </form>
        </section>
    );
  }
}

export default Contact;
