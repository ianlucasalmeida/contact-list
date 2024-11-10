const { Contact } = require('./models');

async function listContacts() {
  try {
    const contacts = await Contact.findAll();
    if (contacts.length === 0) {
      console.log('No contacts found.');
    } else {
      console.log('Contacts:');
      contacts.forEach(contact => {
        console.log(`ID: ${contact.id}, Name: ${contact.name}, Phone: ${contact.phone}`);
      });
    }
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }
}

listContacts();
