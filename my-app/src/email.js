import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 

 
 const sendEmail = (e) => {
    const form = useRef();
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_go8e29o', 'template_czque28', form.current, '9SE640DWSqvFqSy9A')
     .then((result) => {
         console.log("Mail sent")
     }, (error) => {
         console.log(error)
     });
 
 
//  return (
//    <form ref={form} onSubmit={sendEmail}>
//      <label>Name</label>
//      <input type="text" name="user_name" />
//      <label>Email</label>
//      <input type="email" name="user_email" />
//      <label>Message</label>
//      <textarea name="message" />
//      <input type="submit" value="Send" />
//    </form>
//  );
};
 
export default sendEmail;