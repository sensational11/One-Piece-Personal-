var today = moment();
var time = $("#currentDay").text(moment().format("MMMM ,  Do YYYY, h:mm:ss a"));
console.log(time);
var searchButton = $("#btn");
var searchInput = "";
var characterEL = $("#Character");
var devilFruitPowers = $("#Devil-Fruit-Powers");
var episodeInformation = $("#Episode-Information");
// var apiKey = "b6ae296a9dmsh55f69a0c5e3f383p1d0a0fjsned942c7c01cb";

searchButton.click(function () {
  searchInput = $("#form-control").val;
  getSelection(searchInput);
});

function getSelection(searchInput) {
  // var apiUrl = "rapidapi.com" + searchInput + "application_6750808" + apiKey;
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        var classList = data[0];
        className = data[0].name;
        getSelection(classList);
      });
    }
  });
}
