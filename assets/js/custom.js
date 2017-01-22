window.onload = function start(){

  //check IE version and show comment if it is..

  if (GetIEVersion() > 0){
    alert("Nie chciało mi się tego robić pod Internet Exploler :( Sry");
    window.location.replace("http://stackoverflow.com");
  }

  //sort countreies by name

  data = data.sort(SortByName);
  
  //when window is on load move to first setion and hide others
  
  moveToFirst()
  moveImage()
}

//section change animation config

var animateOut = 'animated zoomOut'
var animateIn = 'animated zoomIn'
var animateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'


//move to first section and hide others

function moveToFirst(){
  $('.header-box').css('display', 'flex')
  $('.fighters-pick-box').css('display', 'none')
  $('.fighters-detail-box').css('display', 'none')
  $('.winner-box').css('display', 'none')
}

//move to second section, load countries data to select inputs

function moveToSecond(){
  moveImage('.dirty-img1')
  loadCountries()  
  viewAnimate('.header-box', '.fighters-pick-box', 'block');
}

//move to third section, get selected countries and show is details

function moveTothird(){
  getSelectedCountries()
  moveImage('.dirty-img2')
}

//move to fourth section and execute fight function

function moveToFourth(){
  fight()
  viewAnimate('.fighters-detail-box', '.winner-box' , 'flex');
}


//display detail of country

function getCountryDetail(nr){

	var image = "assets/data/flags/big/" + data[nr].flag;

  return '<img src="'+ image +'"/>' + 
         '<h1>' + data[nr].country + '</h1>' + 
         '<ul>' + 
         '<li>' + '<i class="fa fa-male" aria-hidden="true"></i>' + '<p><span> Żołnierze : </span>' + data[nr].soldiers  + '<span> JW</span></p></li>' +
         '<li>' + '<i class="fa fa-truck" aria-hidden="true"></i>' + '<p><span> siły lądowe : </span>' + data[nr].land  + '<span> JW</span></p></li>' +
         '<li>' + '<i class="fa fa-fighter-jet" aria-hidden="true"></i>' + '<p><span> siły powietrzne : </span>' + data[nr].air  + '<span> JW</span></p></li>' +
         '<li>' + '<i class="fa fa-ship" aria-hidden="true"></i>' + '<p><span> marynarka : </span>' + data[nr].naval  + '<span> JW</span></p></li>' +
         '<li>' + '<i class="fa fa-flask" aria-hidden="true"></i>' + '<p><span> technologia : </span>' + data[nr].tech  + ' </p></li>' + 
         '</ul>';
}



//get selected countries and show them.

function getSelectedCountries(){

  var nr1 = document.getElementById("fighter1").selectedIndex;
  var nr2 = document.getElementById("fighter2").selectedIndex;
  
  //if first country is equal country 2 return alert
  
  if(nr1 === nr2){
    $(".error").addClass("show");
    return;
  }
  var country1 = getCountryDetail(nr1)
  var country2 = getCountryDetail(nr2)

  document.getElementById("details1").innerHTML = country1
  document.getElementById("details2").innerHTML = country2
  viewAnimate('.fighters-pick-box', '.fighters-detail-box', 'flex');
  $(".error").removeClass("show");
}

//load countries to select button

function loadCountries(){

   var countries = [];
  
   for(i = 0; i < data.length; i++){
      countries = countries + '<option>' + '' + data[i].country + "</option>"
   }

   // countries = countries + "<option selected disabled>Wybierz Państwo</option>"

   document.getElementById("fighter1").innerHTML = countries
   document.getElementById("fighter2").innerHTML = countries
   
}

//get country score

function getCountryScore(nr){
  return (data[nr].land + data[nr].air + data[nr].naval + data[nr].soldiers) * data[nr].tech;
}

//take countries and check who` is winner

function getWinner(nr1, nr2){

  var winner = ''
  var score1 = getCountryScore(nr1)
  var score2 = getCountryScore(nr2)

  if(score1 == score2){
    return null
  }
  if(score1 > score2){
    return nr1
  }
  if(score1 < score2){
    return nr2
  }
}


//take winner country name and choose between 'Wygrywa' or 'Wygrywają'

function chooseWinnerWord(countryWin){
	
	var arr = ['a', 'l', 'n', 't', 'p']
	
	var lastChar = countryWin.charAt(countryWin.length-1)
	
	for(i = 0; i < arr.length; i++){
		if(lastChar == arr[i]){
			return 'Wygrywa'
		}
		else
		{
			return 'Wygrywają'
		}
	}
	
}


//main fight button - get countries, choose winner and show it.

function fight(){
    RandomImg() //random winner background winner

    var nr1 = document.getElementById("fighter1").selectedIndex;
    var nr2 = document.getElementById("fighter2").selectedIndex;
	
    var winnerNumber = getWinner(nr1, nr2)

    var winner = winnerNumber == null ? {country: "Remis"} : data[winnerNumber];

    if(winner.country != "Remis"){
      var image = "assets/data/flags/big/" + winner.flag;
      document.getElementById("winner-img").innerHTML = '<img src="'+ image +'"/>'
      var winnerWord = chooseWinnerWord(winner.country)

      document.getElementById("winnerWord").innerHTML = winnerWord + ':'      
    }
    document.getElementById("winner").innerHTML = winner.country

    console.log(winner.country)
}



//moved image animation use it in second and third section

function moveImage(img){

  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();

  $(img).mousemove(function( event ) {
    var pageX = event.pageX - $(window).width();
    var pageY = event.pageY - $(window).height();
    
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    
    $(this).css("background-position", newvalueX+"px     "+newvalueY+"px");
  })
}

//zoom in and zoom out animation after section change

function viewAnimate(from, to, display){
  $(from).addClass(animateOut);
  
  $(from).one(animateEnd, function(){
  
    $(from).css('display', 'none').removeClass(animateOut)
    $(to).css('display', display).addClass(animateIn)
    
    $(to).one(animateEnd, function(){
      $(to).removeClass(animateIn);
    });
  });
}

//sort var data(countries) by name

function SortByName(a, b){

 var aName = a.country.toLowerCase();
 var bName = b.country.toLowerCase(); 
 
 return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

//random winner background-image

function RandomImg(){  
  var randNum = Math.floor((Math.random() * 4) + 1);
  var image = 'assets/img/winner' + randNum + '.jpg'
  
  $('.winner-image').css('background-image', 'url('+ image +')');
}

//get Internet exploler version

function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;

  else
    return 0;
}