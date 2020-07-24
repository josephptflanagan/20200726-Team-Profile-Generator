const generateIcon = role =>{

  if(role == "Manager"){
    return`<i class="icofont-coffee-mug"></i>`;
  }
  else if(role == "Engineer"){
    return`<i class="icofont-engineer"></i>`;
  }
  else if(role == "Intern"){
    return`<i class="icofont-graduate"></i>`;
  }

}

const generateCloser = closerData =>{

  if(closerData.role == "Manager"){
    return`<p>${closerData.office}</p>`;
  }
  else if(closerData.role == "Engineer"){
    return`<a href="https://github.com/${closerData.gitHub}" target="_blank"`;
  }
  else if(closerData.role == "Intern"){
    return`<p>${closerData.school}</p>`;
  }

}

// create the cards
const generateCards = data => {
    if (!data) {
        return '';
    }

    let cardString = "";

    for(let i = 0; i < data.length;i++){

      cardString += `
        <div class="card">
          <h3 class="card-title">${data[i].name} </h3>
          ${generateIcon(data[i].role)}
          <h3 class="card-title">${data[i].role} </h3>
          <p>${data[i].id}</p>
          <p>${data[i].email}</p>
          ${generateCloser(data[i])}
        </section>
      `;
    }

    return cardString;
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