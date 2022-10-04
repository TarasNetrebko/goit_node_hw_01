const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const list = await fs.readFile(contactsPath);
  const contacts = JSON.parse(list);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const id = contactId.toString();
  const contact = contacts.find((contact) => contact.id === id);
  return contact || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const id = contactId.toString();
  const contact = contacts.find((contact) => contact.id === id);
  if (contact) {
    contacts.splice(contacts.indexOf(contact), 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  }
  return contact;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const phoneAsString = phone.toString();
  const newContact = {
    id: `${contacts.length + 1}`,
    name,
    email,
    phone: phoneAsString,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
