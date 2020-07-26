//fills in the icon part of each role's card(coffee mug for the manager, engineer for the engineer, graduate for the intern)
const generateIcon = role => {

  if (role == "Manager") {
    return `<i class="icofont-coffee-mug col-2"></i>`;
  }
  else if (role == "Engineer") {
    return `<i class="icofont-engineer col-2"></i>`;
  }
  else if (role == "Intern") {
    return `<i class="icofont-graduate col-2"></i>`;
  }

}
//fills out the closing part of the each role's card (office number, github username, school)
const generateCloser = closerData => {

  if (closerData.role == "Manager") {
    return `<p class="card-p">Office Number: ${closerData.officeNumber}</p>`;
  }
  else if (closerData.role == "Engineer") {
    return `<p class="col-4 card-p">GitHub: </p>
            <a class="col-8" href="https://github.com/${closerData.gitHub}" target="_blank">${closerData.gitHub}</a>`;
  }
  else if (closerData.role == "Intern") {
    return `<p class="card-p">School: ${closerData.school}</p>`;
  }

}

// create the cards
const generateCards = data => {
  if (!data) {
    return '';
  }

  let cardString = "";

  for (let i = 0; i < data.length; i++) {

    //each card warranted will add their own verison of this chunk
    cardString += `
      <div class="col-12 col-sm-6 col-md-4 col-xl-3" >
        <div class="card">
          <div class="card-body">
            <div class="card-header">
              <h3 class="card-title">${data[i].name} </h3>
              <div class="row">
                ${generateIcon(data[i].role)}
                <h3 class="card-title col-10">${data[i].role} </h3>
              </div>
            </div>
            <div class="row card-line">
              <p class="card-p">Emloyee ID: ${data[i].id}</p>
            </div>
            <div class="row card-line">
              <p class="col-3 card-p">Email:</p>
              <a class="col-9" href="mailto:${data[i].email}">${data[i].email}</a>
            </div>
            <div class="row card-line">
              ${generateCloser(data[i])}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  //console.log(cardString);
  return cardString;
};

  module.exports = templateData => {

    //main body of the html string
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
      <link rel="stylesheet" href="./generatedStyle.css">
    </head>
    <body>

      <header>
        <h1>My Team</h1>
      </header>

      <main class="row">
        ${generateCards(templateData)}
      </main>
      
      <footer class="row">
        <h3>&copy; ${new Date().getFullYear()} by Joseph Flanagan</h3>
      </footer>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    </html>
    `;
};