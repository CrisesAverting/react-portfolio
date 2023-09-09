import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../style.css';
export default function ContactForm() {
    const [state, handleSubmit] = useForm("mbjvyyyl");
    if (state.succeeded) {
        return <p>Thanks for Contacting me</p>;
    }
    return (
        <form className='emailForm' onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input className='emaillbl'
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
                className='emailContent'
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

