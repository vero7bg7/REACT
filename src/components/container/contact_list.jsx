import React from "react";
import { Contact } from "../../models/contact.class.js";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
  const exampleContact = new Contact(
    "Verónica",
    "Burgos",
    "vero7bg7@hotmail.com",
    false
  );
  return (
    <div>
      <div>
        <h1>Contacts:</h1>
      </div>
      <ContactComponent contact={exampleContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
