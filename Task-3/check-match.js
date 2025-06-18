const bcrypt = require('bcrypt');

const inputPassword = 'admin123';
const hashed = '$2b$10$g8EY7KpSt5dykpBkR5TMe.0O6q7WBN1OBCZh2y5wivrsY0Ew93MSW';

bcrypt.compare(inputPassword, hashed).then(result => {
    console.log("Password match:", result);
});
