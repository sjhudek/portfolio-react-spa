import React, { useState } from 'react';
import './index.module.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        name: null,
        email: null,
        message: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (!value) {
            setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
        } else {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }

        if (name === "email" && value) {
            const emailRegex = /\S+@\S+\.\S+/;
            if (!emailRegex.test(value)) {
                setErrors((prev) => ({ ...prev, [name]: "Invalid email address" }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can handle form submission, for example, send formData to an API.
    };

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleChange} // For validation when cursor moves out of the input field
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleChange}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
