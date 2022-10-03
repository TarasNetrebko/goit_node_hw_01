const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const operation = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getContacts":
      const contacts = await listContacts();
      break;
    case "getContactById":
      const contact = await getContactById(id);
      break;
    case "addContact":
      const newContact = await addContact(name, email, phone);
      break;
    case "removeContact":
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;
    default:
      console.log("Unknown action");
  }
};

// operation({ action: "getContacts" });
// operation({ action: "getContactById", id: "8" });
// operation({
//   action: "addContact",
//   name: "John",
//   email: "John@example",
//   phone: "9-284-2834",
// });
operation({ action: "removeContact", id: "11" });
