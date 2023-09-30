import React, { useState, useRef } from 'react';
import './index.module.scss';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef(); // Create a ref object
    
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

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
            setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
        } else {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "email" && value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setErrors((prev) => ({ ...prev, [name]: "Invalid email address" }));
            } else {
                setErrors((prev) => ({ ...prev, [name]: null }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9pdpao4', 'template_d55vjus', form.current, 'PaeAizXk5pcO-CKAe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>Contact Me</h1>
                <form ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name} // dynamic value
                            placeholder="Your name (required)"
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email} // dynamic value
                            placeholder="yourname@example.com (required)"
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message} // dynamic value
                            placeholder="Send me a message" // placeholder text
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Submit</button> {/* Removed anchor tag */}
                </form>
            </div>
        </div>
    );
}

export default Contact;
