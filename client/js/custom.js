// Init Angular app and controller
var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope) {

	
	// Set default view to home index page
	$scope.viewIndex = 'home';


	// Set client info JSON
	$scope.clientInfo = {
		"Name":"Venice Ale House",
		"Address":"2 Rose Ave, Venice, CA",
		"Hours":"11:00am - 10:00pm",
		"Email":"venicealehouse",
		"EmailLink":"millianoc@gmail.com",
		"Phone":"310-314-8253",
		"PhoneLink":"13149208946",
		"GPlus":"",
		"Instagram":"venicealehouse",
		"Twitter":"venicealehouse",
		"Facebook":"venicealehouse"
	};


	// Set client story JSON
	$scope.clientStory = [
		{"Paragraph":"Welcome to the Venice Ale House. Located on the world famous Venice Boardwalk, the =V= offers a full menu of local, organic and sustainable food.  We have over 30 craft beers on tap, fine California wines, and fresh cocktails. Come by, grab a bite and a beverage, watch the sunset and all that Venice has to offer from the center of all the action.Come try our new brunch menu!"},
		{"Paragraph":"Bottomless Mimosas from 9am to 11am every weekend through the New Year.Happy Holidays from the Venice Ale House!"},
		{"Paragraph":"Be sure to check out our sister pub! Bank of Venice Public House"}
	];


	// Set checkout items JSON
	$scope.checkoutItems = [
		{"Name":"Item 1: name", "Count":"10"},
		{"Name":"Item 3: name", "Count":"40"},
		{"Name":"Item 5: name", "Count":"20"},
		{"Name":"Item 4: name", "Count":"30"},
		{"Name":"Item 1: name", "Count":"10"},
		{"Name":"Item 3: name", "Count":"40"},
		{"Name":"Item 5: name", "Count":"20"},
		{"Name":"Item 4: name", "Count":"30"},
		{"Name":"Item 1: name", "Count":"10"},
		{"Name":"Item 3: name", "Count":"40"},
		{"Name":"Item 5: name", "Count":"20"},
		{"Name":"Item 4: name", "Count":"30"},
		{"Name":"Item 2: name", "Count":"40"}
		];


	// Set available items JSON
	$scope.availableItems = [
		{"ID":"1", "Name":"Item 1: tester", "Count":"100", "Price":"9.99", "Description":"This is a test description"},
		{"ID":"2", "Name":"Item 2: tester", "Count":"100", "Price":"9.99", "Description":"This is a test description"},
		{"ID":"3", "Name":"Item 3: tester", "Count":"100", "Price":"9.99", "Description":"This is a test description"},
		{"ID":"4", "Name":"Item 4: tester", "Count":"100", "Price":"9.99", "Description":"This is a test description"},
		{"ID":"5", "Name":"Item 5: tester", "Count":"100", "Price":"9.99", "Description":"This is a test description"}
		];


	// Handles mouse hovering events
	$scope.menuItemMouseHover = false;
	$scope.menuItemHover = function(event) {
		$scope.menuItemMouseHover = true;
	};

});


// Open left side menu
function openLeftNav() {
    document.getElementById("left-sidenav").style.width = "60%";
    document.getElementById("main").style.marginLeft = "60%";
    document.body.style.backgroundColor = "rgba(50,50,50,0.4)";
}

// Close left side menu
function closeLeftNav() {
    document.getElementById("left-sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}


// Open right side menu
function openRightNav() {
    document.getElementById("right-sidenav").style.width = "40%";
    document.getElementById("main").style.marginRight = "40%";
    document.body.style.backgroundColor = "rgba(50,50,50,0.4)";
}

// Close right side menu
function closeRightNav() {
    document.getElementById("right-sidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
}


// Handle reloading map
function reloadMap() {
	console.log("Reload map now.");
}










