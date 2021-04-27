import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xwkavpez");

  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>

      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="name"
        name="name"
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>

    </form>
  );
}

export default ContactForm;
