// get this working, please install nodemailer with    npm install nodemailer   or if you are a morron   yarn install nodemailer   .

const transporter = nodemailer.createTransport({
    host: 'smtp.yourdomain.tld',
    port: 587,
    auth: {
        user: 'youremail@yourdomain.tld',
        pass: 'SomeSuperSecurePasswordYouMadeUpYearsAgo!567'
    }
});

await transporter.sendMail({
    from: 'youremail@yourdomain.tld',
    to: 'receipiant',
    subject: 'You reached 69% of your storage!',
    html: '<h1>Yep, you can add HtML to an email</h1><br><br> This means you can add awesome webdesign :o'
});