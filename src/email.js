const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
    // Crie um objeto de transporte reutilizável usando o transporte SMTP padrão
    let transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
            user: 'hobiosimo@gmail.com',
            pass: '@hobio123'
        }
    });

    // Envie o e-mail
    let info = await transporter.sendMail({
        from: 'hobio@contato.reservaonlinetis.com',
        to,
        subject,
        text
    });

    console.log('Mensagem enviada: %s', info.messageId);
}

module.exports = { sendEmail };