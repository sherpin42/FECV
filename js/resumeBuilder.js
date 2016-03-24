var bio = {
	"name" : "Sheri Pincovski",
	"role": "Freelance developer",
	"contacts" : {
		"mobile": "809-871-4541",
		"email" : "sherpin42@gmail.com",
		"github" : "sherpin42",
		"location" : "Ottawa, Ontario"
	},
	"welcomeMessage" : "Hi! I'm a freelance developer based halfway between Europe and California.",
	"skills" : [ "JavaScript", "HTML", "CSS", "gulp", "Git" ],
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
			"url" : "https://www.udacity.com/"
		},
		{
			"title" : "Full stack developer path",
			"school" : "Code Academy",
			"dates" : "2016",
			"url" : "https://www.codecademy.com/"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer" : "Skype",
			"title" : "Senior Product Manager",
			"dates" : "2010 to 2014",
			"location" : "Palo Alto, California",
			"url" : "http://www.skype.com/",
			"description" : "I was a Senior Product Manager on the Skype Developer Program, managing a set of web services to enable third-party developers to access the Skype platform via APIs, including documentation, content publishing, customer support and website development."
		},
		{
			"employer" : "Defra",
			"title" : "Website Rationalisation Delivery Manager",
			"dates" : "2007 to 2010",
			"location" : "London, England",
			"url" : "http://www.defra.gov.uk/",
			"description" : "While working for a large government department in the United Kingdom, I rationalized, redesigned and restructured web content into audience-based channels for a high-visibility initiative across several internal teams and external organizations."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "She Spoke Clothing",
			"dates" : 2016,
			"description" : "I implemented an instance of WordPress for an exciting new small business.",
			"url" : "http://www.shespokeclothing.com/",
			"images" : [ "images/1.jpg", "images/2.jpg" ]
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

var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedmsg);

// Appending contacts to the footer

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobile);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocation);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);

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
		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#u", work.jobs[job].url).replace("#t", work.jobs[job].title);
		
		$(".work-entry:last").append(formattedEmployer);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
				
	};
};

displayWork();

// Appending projects

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
		$(".project-entry:last").append(formattedImage);
		
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
		$(".project-entry:last").append(formattedImage);
	}
};

projects.display();

// Appending school

education.display = function() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		$(".education-entry:last").append(formattedName);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree).replace("%major%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolDegree);

	}
};

education.display();

// Appending online education

online.display = function() {

	for (course in education.onlineCourses) {
		$("#online").append(HTMLonlineClasses);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school).replace("#", education.onlineCourses[course].url);
		$(".online-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".online-entry:last").append(formattedDates);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".online-entry:last").append(formattedTitle);
		
	}
};

online.display();

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