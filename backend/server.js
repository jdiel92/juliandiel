// backend/server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors()); // Permite requisições de outras origens (do seu frontend React)
app.use(express.json()); // Permite que o servidor entenda JSON

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // ou outro serviço de e-mail
  auth: {
    user: process.env.EMAIL_USER, // Seu e-mail do arquivo .env
    pass: process.env.EMAIL_PASS, // Sua senha de app do arquivo .env
  },
});

// Rota para enviar o e-mail
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const mailOptions = {
    from: email, // E-mail de quem enviou o formulário
    to: process.env.EMAIL_USER, // E-mail que receberá a mensagem (o seu)
    subject: `Nova mensagem de contato de ${name}`,
    text: `Você recebeu uma nova mensagem de:\n\nNome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      // Retorna uma mensagem de erro mais genérica para o frontend por segurança
      return res.status(500).json({ error: 'Failed to send email. Check your server settings.' });
    }
    console.log('E-mail enviado: ' + info.response);
    res.status(200).json({ success: 'Email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
