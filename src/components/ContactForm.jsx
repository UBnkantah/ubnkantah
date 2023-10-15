import React, { useState } from 'react'

const ContactForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        try{

        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <div>
                        <label>Full Name</label>
                        <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type='number' value={contact} onChange={(e) => setContact(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Message</label>
                    <textarea cols={40} rows={20} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
            </div>
            <button>{loading ? "Sending..." : "Send"}</button>
        </form>
    </div>
  )
}

export default ContactForm