import styles from './Contact.module.css';
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt} from 'react-icons/Fa';
import { LuMail } from 'react-icons/lu';  
import { useState } from 'react';

function Contactform() {
  
  const [name , setName] = useState("bharath");
  const [email , setEmail] = useState("support@gmail.com");
  const [text , setText] = useState("Enter some Text reate to this");


  // let email = "support@gmail.com";
  // let text = "subscribe my channel"

  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };


  return(
    <section className= {styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CALL" icon={<MdMessage fontSize="24px"/>}/>
      <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>  
      </div>
    <Button text="VIA EMAIL FORM"
    isOutline = {true}
     icon={<LuMail fontSize="24px"/>}/>  


     <form  onSubmit={onSubmit}>
   <div className={styles.form_control}>
     <label htmlFor="name">Name</label>
    <input type="text" name='name' />
   </div>
   <div className={styles.form_control}>
     <label htmlFor="email">Email</label>
    <input type="text" name='email' />
   </div>
   <div className={styles.form_control}>
     <label htmlFor="text">Text</label>
    <textarea name='name' rows="8" />
   </div>
  <div 
  style={{
    display: "flex",
    justifyContent : "end",
  }}
  >
  <Button text="SUBMIT BUTTON"/> 
  </div>
  <div>
{name + " " + email + " " + text }
  </div>
 </form>

    </div>
    <div className={styles.contact_image}>
       <img src="/images/contacts.svg" alt="contact image"/> 
    </div>
  </section>
  )
   
}

export default Contactform
