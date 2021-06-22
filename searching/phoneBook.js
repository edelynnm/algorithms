const binarySearch = require("./binarySearch.js");

const contacts = ['zubino', 'Mallare', 'Abante', 'monte Real', 'mega', 'Dela Cruz', 'Georgina', 'Tupaz']
const val = 'Zubino'

const replacer = (match, p1) => p1.toUpperCase();
const refineNames = (contacts) => contacts.map(x => x.replace(/([a-zA-Z])/, replacer))

const sortedContacts = refineNames(contacts)

console.log(binarySearch(sortedContacts, val, false))
