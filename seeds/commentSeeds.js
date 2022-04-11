const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Just write it in Malbolge. Also maybe talk to the other developers and they can all play along through the presentaiton, the company will probably stay with what they are using anyway.',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Anything VR, really.',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'RIP OP.',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Why are you asking a tech-blog? You need to be asking an accountant, or if you are too slow, a lawyer.',
        user_id: 4,
        post_id: 1
    }
    
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;