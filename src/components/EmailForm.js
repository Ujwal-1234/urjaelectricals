import React, { useState } from 'react';

function EmailForm() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        // Email sent successfully
        alert('Email sent successfully!');
      } else {
        // Handle error
        alert('Email sending failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Recipient"
          value={emailData.to}
          onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject"
          value={emailData.subject}
          onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
        />
        <textarea
          placeholder="Message"
          value={emailData.message}
          onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
        />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default EmailForm;
