require("dotenv/config");
let mailer = require("nodemailer");

const createTransport = () => {
  return mailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    service: "yahoo",
    auth: {
      user: "rkdooleea@yahoo.com",
      pass: process.env.PASSWORD,
    },
  });
};

const sendEmail = async (data, res) => {
  let transporter = createTransport();

  const html = `
        <div
        style="
            width: 95%;
            height: 100%;
            box-sizing: border-box;
            padding: 15px 25px 15px 20px;
            box-shadow: -12px -12px 30px 5px rgba(255, 255, 255, 0.9),
            12px 12px 30px 5px rgba(50, 58, 73, 0.2);
            background-color: #f5f6f7;
            border-radius: 15px;
            font-family: Comic Sans MS, cursive, sans-serif;
        "
        >
        <h2>Hello!</h2>
        <p>
            New message from <span style="color: rosybrown;">${data.username}</span> at
            <span style="color: rosybrown;">${data.email}</span>
        </p>

        <div
            style="
            box-shadow: inset 2px 2px 5px #babecc, inset -1px -1px 2px #ffffff73;
            background-color: white;
            padding: 10px;
            border-radius: 10px;
            "
        >
            <p style="margin: 0;">${data.message}</p>
        </div>

        <p style="margin-top: 30px;">Sincerely, <br />Reetesh Dooleea 😀</p>
        </div>`;

  const mail = {
    from: "rkdooleea@yahoo.com",
    to: `kdooleea@yahoo.ca, ${data.email}`,
    subject: `KShared feedback`,
    html: html, // body
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, async (error, info) => {
      if (error) {
        console.log(`Sending email error: ${error}`);
        reject(`Sending email error: ${error}`);
      } else {
        console.log(`email sent succesfully: ${info.response}`);
        resolve(`email sent succesfully: ${info.response}`);
      }
    });
  });
};

module.exports = sendEmail;
