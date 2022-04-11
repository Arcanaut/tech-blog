const { Post } = require('../models');

const postdata = [
    {
        title: 'IRS wants to know how much cryptocurrency I have?',
        content: 'Do I have to tell them? I thought the entire point was that it is impossible to track!',
        user_id: 1
    },
    {
        title: 'New Crysis?',
        content: 'Crysis used to be the benchmark determining how powerful your computer was, but that was in 2007. What is the new Crysis in 2022?',
        user_id: 2
    },
    {
        title: 'Help! I lied about knowing a language and now my boss wants me to teach it to others!',
        content: 'Long story short I sarcastically made a joke about how Befunge is way easier than the programs we were using in the office. My non-tech savvy manager overheard and now he wants me to teach it to everyone? How can I get out of this with as little embarassment as possible? I worry that if my boss feels stupid they will fire me.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;