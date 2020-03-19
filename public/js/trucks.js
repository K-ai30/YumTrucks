let axios = require('axios');

const color = {
  cyan: {
    cardBackground: "#00bcd4",
    photoBorderColor: "#black"
  },
  amber: {
    cardBackground: "#ffc107",
    photoBorderColor: "#73448C"
  },
};

const data = {};

$(document).ready(function() {
    // This file just does a the JS for the trucks page to figure out what information gets populated in what areas
    // and updates the HTML on the page
    $.get("/api/trucks_data").then(function(data) {
      $(".truck-name").text(data.email);
    });
  });

function getInfo() {
  axios.get("/api/new/user")
}


function generateTruckCard() {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <title>Passport Authentication</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="stylesheets/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/png" href="./images/foodtruck.jpg">
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <style>
          form.signup,
          form.login {
          margin-top: 50px;
          }
  
          /* .navbar-header {
          font-size: x-large;
          } */
  
          .brand-logo {
              margin-left: 10px;
          }
  
          label {
          color: black;
          }
  
          input {
          color: black;
          }
  
          .responsive-img {
          margin-top: 15px;
          }
  
          #search {
          border-radius: 24px;
          padding: 5px;
          /* position: absolute; */
          float: right;
          background-color: grey;
          width: 42px;
          height: 42px;
          /* margin-left: 800px; */
          margin-left: 5px;
          margin-right: 10px;
          /* margin-bottom: 1000px; */
          }
  
          h1 {
          font-size: 12pt;
          }
  
          h2 {
          text-align: center;
          font-size: 16pt;
          }
  
          h3 {
          text-align: center;
          font-size: 14pt;
          }
  
          h4 {
          text-align: center;
          font-size: 14pt;
          }
  
          #restart {
          float: right;
          margin-top: 12px;
          }
  
          /* Footer */
          body {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          background-color: lightgray;
          color: #000000;
          }
  
          main {
          flex: 1 0 auto;
          }
  
          .footer-copyright {
          text-align: center;
          }
    </style>
  </head>
  
  <body>
    <nav>
      <div class="nav-wrapper grey">
        <a href="/index.html" class="brand-logo"><i class="material-icons">fastfood</i>YumTrucks</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="/search"><i class="material-icons">search</i></a></li>
        </ul>
      </div>
    </nav>
  
  <div class="container">
  
      <!-- Modal Structure -->
      <div id="modal1" class="modal">
          <div class="modal-content" style= "color:black">
              <img id="tImage-0" class="float" src="https://www.fillmurray.com/200/300">
              
              <h5 id="tName-0">Truck Name</h5>
          
              <h6 id="tDescription-0" >Description:</h6>
              <h6 id="tPhone-0" >Phone Number:</h6>
              <h6 id="tMenu-0" >Menu:</h6>
              <h6 id="tLocation-0" >Location:</h6>
      
          </div>
  
          <div class="modal-footer">
              <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
      </div>
      <!-- Modal Structure -->
  
      <div class="row" class="valign-wrapper">
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel cyan">
                <h2>${data.truck_name}</h2>
                <div class="card-image center-align">
                  <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
                </div>
                  <h3>${data.menu}</h3>
                  <h4>${data.website}</h4>
              <br />
            </div>
          </div>
        
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel amber">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
  
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel cyan">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
        
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel amber">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
  
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel cyan">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
          
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel amber">
              <h2>${data.truck_name}</h2>
                <div class="card-image center-align">
                  <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
  
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel cyan">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
          
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel amber">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
  
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel cyan">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
  
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel amber">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
  
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel cyan">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
            
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel amber">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
  
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel cyan">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
                    
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel amber">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
  
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel cyan">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
                            
          <div class=" col s12 m3">  
            <!-- col-md-6 col-md-offset-3 -->
            <div class="card-panel amber">
              <h2>${data.truck_name}</h2>
              <div class="card-image center-align">
                <img class="responsive-img" src="images/stockTruck.jpg" height="100" width="200">
              </div>
                <h3>${data.menu}</h3>
                <h4>${data.website}</h4>
              <br />
            </div>
          </div>
  
        </div>
    </div>
  
        <div id="space"></div>
        <!-- Footer -->
        <footer class="page-footer grey">
          <div class="footer-copyright">
            <div class="container" class="grey-text text-lighten-4 right">
              The Premium Lions 2020 ©
            </div>
          </div>
        </footer>
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script type="text/javascript" src="js/login.js"></script>
      <script type="text/javascript" src="js/trucks.js"></script>
  </body>
  </html>`
}

module.exports = generateTruckCard;


