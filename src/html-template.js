// create the about section
const generateCards = Data => {
    if (!Data) {
        return '';
    }


    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${EmployeesObjArray}</p>
      </section>
    `;
};

module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Contacts</title>
      <!--BOOTSTRAP CDN-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <!--HEADER FONT CDN-->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap">
      <!--CARD FONT CDN-->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap" >
      <!--ICOFONT CDN-->
      <link rel="stylesheet" href="https://allyoucan.cloud/cdn/icofont/1.0.1/icofont.css">
      <!--CUSTOM STYLESHEET-->
      <link rel="stylesheet" href="style.css">
    </head>
    <body>

      <header class="container">
        <h1>My Team</h1>
      </header>

      <main class="container">
        ${generateCards(templateData)}
      </main>
      
      <footer class="container">
        <h3>&copy; ${new Date().getFullYear()} by Joseph Flanagan</h3>
      </footer>
    </body>
    </html>
    `;

};