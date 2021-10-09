const sendgrid = require("@sendgrid/mail")
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
//const router = express.Router();

 sendEmail= async(req, res) =>{
  try {
      console.log("req.body::", req.body)
      await sendgrid.send({
      to: "noramariag@gmail.com", // Your email where you'll receive emails
      from: "noramariag@gmail.com", // your website email address here
      subject: `[Customer Lead from website:NoraBird Events] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h2>You've got a new mail from: <h4> ${req.body.fullName}</h4>Their email is:<br> ✉️${req.body.email} </h2>
              <div style="font-size: 16px;">
              <p><h4>Phone Number:</h4>${req.body.phoneNumber}</p>
              <p><h4>Message:</h4></p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards,<br>NoraBird Events</p>
            
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
     console.log("err from server",error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  console.log("email", req.body.email, req.body.subject,req.body.message, req.body.fullName, req.body.phoneNumber)
  return res.status(200).json({ error: "" });
}
module.exports={
    sendEmail
}
