// If you want to get this working you need to isntall sendmail with     npm install sendmail       or if you a morron     yarn install sendmail    .
// Send unverified emails from any name you wish (bad practise, but sure).

const sendmail = require('sendmail')();

sendmail({
    from: 'youremail@yourdomain.tld',
    to: 'receipant@test.tld',
    subject: 'You reached 69% of your storage!',
    html: '<h1>Yep, you can add HtML to an email</h1><br><br> This means you can add awesome webdesign :o'
}, function(err, reply) {
    console.log(err && err.stack)
    console.dir(reply)
})

// Again, note that this will send your email as "unverified..."
// check the screenshots added at https://github.com/justinpooters/email-sender