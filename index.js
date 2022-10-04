const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");
const { program } = require("commander");

// це я залишив для себе

// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

const operation = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;
    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;
    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;
    default:
      console.log("Unknown action type");
  }
};

program
  .option("-a, --action <type>")
  .option("-id, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

//мається на увазі program.parse(process.argv) строкою нижче (це я теж для себе)
program.parse();
const options = program.opts();
operation(options);

// і це також =)

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);
// operation(argv);
