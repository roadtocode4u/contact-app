import showToast from 'crunchy-toast';
import React, { useState } from 'react';
import ContactCard from '../../components/ContactCard/ContactCard';
import "./Home.css";

function Home() {
  const [contacts, setContacts] = useState([
    {
      name: 'Aman',
      mobile: '6757654654',
      email: 'aman@gmail.com'
    }
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const addContact = () => {

    if(!name){
      showToast('Name is required', 'alert', 3000);
      return;
    }

    if(!email){
      showToast('Email is required', 'alert', 3000);
      return;
    }

    if(!mobile){
      showToast('Mobile is required', 'alert', 3000);
      return;
    }

    const obj = {
      name: name,
      email: email,
      mobile: mobile
    }

    setContacts([...contacts, obj]);

    showToast('Contact Added Successfully', 'success', 3000);

    setName('');
    setEmail('');
    setMobile('');
  };

  const deleteContact = (mobileNumber) => {
    let indexToDelete = -1;

    contacts.forEach((contactDetail, index)=>{
      if(contactDetail.mobile == mobileNumber){
        indexToDelete = index;
      }
    })

    contacts.splice(indexToDelete, 1);

    setContacts([...contacts])

    showToast('Contact Deleted Successfully', 'success', 3000);
  }

  return (
    <div>
      <h1 className='app-title'>📞 Contact App</h1>

      <div className='app-body'>
        <div className='contacts-container'>
          <h2 className='sub-heading'>Show Contacts</h2>
          {
            contacts.map((contact, index)=>{
              return (<ContactCard
                key={index}
                name={contact.name}
                email={contact.email}
                mobile={contact.mobile}
                deleteContact={deleteContact} />)
            })
          }
        </div>

        <div className='add-contacts-container'>
          <h2 className='sub-heading'>Add Contact</h2>
          <form>
            <input
              type='text'
              placeholder='Name'
              className='user-input'
              onChange={(e)=>{
                setName(e.target.value)
              }}
              value={name}
              />

            <input
              type='email'
              placeholder='Email'
              className='user-input'
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              value={email}
              />

            <input
              type='text'
              placeholder='Mobile'
              className='user-input'
              onChange={(e)=>{
                setMobile(e.target.value)
              }}
              value={mobile}
              />

            <button
              type='button'
              className='btn-add-contact'
              onClick={addContact}
              >
                Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
