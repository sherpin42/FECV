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
	"biopic" : "images/sheri.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "University of Ottawa",
			"location" : "Ottawa, Canada",
			"degree": "Bachelor's degree",
			"majors": [ "Psychology", " I focused on one major at a time" ],
			"dates" : "2004-02-06",
			"url" : "http://www.uottawa.ca/"
		},
		{
			"name" : "University of Ottawa",
			"location" : "Ottawa, Canada",
			"degree": "Bachelor's degree",
			"majors": [ "International politics", " I focused on one major at a time" ],
			"dates" : "2000-11-17",
			"url" : "http://www.uottawa.ca/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-end web developer nanodegree",
			"school" : "Udacity",
			"dates" : "2016-09-18",
			"url" : "https://www.udacity.com/"
		},
		{
			"title" : "Full stack developer path",
			"school" : "Code Academy",
			"dates" : "2016-01-25",
			"url" : "https://www.codecademy.com/"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer" : "Skype",
			"title" : "Senior Product Manager",
			"dates" : "2010 - 2014",
			"location" : "Palo Alto, California",
			"url" : "http://www.skype.com/",
			"description" : "I was a Senior Product Manager on the Skype Developer Program, managing a set of web services to enable third-party developers to access the Skype platform via APIs, including documentation, content publishing, customer support and website development."
		},
		{
			"employer" : "Defra",
			"title" : "Website Rationalisation Delivery Manager",
			"dates" : "2007 - 2010",
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
			"dates" : "2016-07-09",
			"description" : "I implemented an instance of WordPress for an exciting new small business.",
			"url" : "http://www.shespokeclothing.com/",
			"images" : [ "images/1.jpg", "images/2.jpg" ]
		}
	]
};

// Basic contact info

bio.display = function() {
	
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);
	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	
	var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedmsg);

// Appending skills to the header

	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill, index) {
			
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
		$("#skills").append(formattedSkill);
 });
};

bio.display();

// Appending jobs

work.display = function() {

	work.jobs.forEach(function(job, index) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		$(".work-entry:last").append(formattedLocation);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer).replace("#u", work.jobs[index].url).replace("#t", work.jobs[index].title);
		
		$(".work-entry:last").append(formattedEmployer);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(formattedDescription);		
  });
};

work.display();

// Appending projects

projects.display = function() {
	
	projects.projects.forEach(function(project, index) {

		$("#projects").append(HTMLprojectStart);
	
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title).replace("#", projects.projects[index].url);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
		$(".project-entry:last").append(formattedDescription);
	
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[0]);
		$(".project-entry:last").append(formattedImage);
		
		formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[1]);
		$(".project-entry:last").append(formattedImage);
	
	  });
};

projects.display();

// Appending school

education.display = function() {

	education.schools.forEach(function(school, index) {

		$("#education").append(HTMLschoolStart);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name).replace("#", education.schools[index].url);
		$(".education-entry:last").append(formattedName);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree).replace("%majors%", education.schools[index].majors);
		$(".education-entry:last").append(formattedSchoolDegree);

});

	education.onlineCourses.forEach(function(course, index) {

		$("#online").append(HTMLonlineClasses);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school).replace("#", education.onlineCourses[index].url);
		$(".online-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
		$(".online-entry:last").append(formattedDates);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
		$(".online-entry:last").append(formattedTitle);
		
  
  });
};


education.display();

online.display();

// Gathering locations

function locationizer(work_obj) {
	var locationArray = [];
	
	work_obj.jobs.forEach(function(job, index) {
	
	    var newLocation = work_obj.jobs[index].location;
	    locationArray.push(newLocation);
	   });
	    return locationArray;
}

// Adding a map
$("#mapDiv").append(googleMap);