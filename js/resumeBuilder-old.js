
var bio = {
	"name" : "Sheri Pincovski",
	"role": "Freelance developer",
	"contacts" : {
		"mobile": "809-871-4541",
		"email" : "sherpin42@gmail.com",
		"github" : "sherpin42",
		"location" : "Ottawa, Ontario"
	},
	"welcomeMessage" : "Hi!",
	"skills" : [ "JavaScript", "HTML", "CSS", "gulp" ],
	"bioPic" : "images/sheri.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "University of Ottawa",
			"location" : "Ottawa, Canada",
			"degree": "Bachelor's degree",
			"major": "Psychology",
			"dates" : 2004,
			"url" : "http://www.uottawa.ca/"
		},
		{
			"name" : "University of Ottawa",
			"location" : "Ottawa, Canada",
			"degree": "Bachelor's degree",
			"major": "International politics",
			"dates" : 2000,
			"url" : "http://www.uottawa.ca/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-end web developer nanodegree",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer" : "Skype",
			"title" : "Senior Product Manager",
			"dates" : "2010 to 2014",
			"location" : "London, England and Palo Alto, California",
			"description" : "I was a Senior Product Manager on the Skype Developer Program."
		},
		{
			"employer" : "Defra",
			"title" : "Website Rationalisation Delivery Manager",
			"dates" : "2007 to 2010",
			"location" : "London, England",
			"description" : "I worked for a large government department in the UK."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "She Spoke Clothing",
			"dates" : 2016,
			"description" : "WordPress instance",
			"url" : "shespokeclothing.com"
		}
	]
};

// Basic contact info
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

// Appending skills to the header

$("#header").append(HTMLskillsStart);
for (skill in bio.skills) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
};
	
// Appending jobs

function displayWork() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
		
	};
};

displayWork();

/*
// Appending projects
for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
	$(".project-entry:last").append(formattedTitle);
	$(".project-entry:last").append(formattedDates);
	$(".project-entry:last").append(formattedDescription);
};
*/


// Projects object
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);		
	}
};

projects.display();

// Appending school
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	
	$(".education-entry:last").append(formattedName);
	$(".education-entry:last").append(formattedDegree);
	$(".education-entry:last").append(formattedDates);
	$(".education-entry:last").append(formattedLocation);
	$(".education-entry:last").append(formattedMajor);
	
};

// Appending online education
for (course in education.onlineCourses) {
	$("#education").append(HTMLonlineClasses);
	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
	var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
	
$(".education-entry:last").append(formattedTitle);
$(".education-entry:last").append(formattedSchool);
$(".education-entry:last").append(formattedDates);
$(".education-entry:last").append(formattedURL);
	
};

// International name
function inName() {
	var nameArray = bio.name.split(" ");
	var lastName = nameArray[1].toUpperCase();
	return internatName = nameArray[0] + " " + lastName;
}

// Testing the international name
// console.log(inName("Sheri Pincovski"));

// Adding the international button to the page
$("#main").append(internationalizeButton);

// Gathering locations

function locationizer(work_obj) {
var locationArray = [];

for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
    }
    return locationArray;
}

// Adding a map
$("#mapDiv").append(googleMap);

// clicking function
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  	logClicks(x,y);
});