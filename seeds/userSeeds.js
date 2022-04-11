const { User } = require('../models');

const userdata = [
    {
        username: 'GhotiFish',
        password: 'password1234'
    },
    {
        username: 'JereBear94',
        password: 'qwerty7'
    },
    {
        username: 'DaWizePhroge',
        password: 'password8675309'
    },
    {
        username: 'EgoRaptor',
        password: 'grump1234'
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;