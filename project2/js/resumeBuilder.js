    var bio = {
        "name": "Timothy Lombraña",
        "role": "Web Developer",
        "contacts": {
            "email": "timothy.lombrana@gmail.com",
            "github": "alphapilgrim",
            "twitter": "@alphapilgrim",
            "location": "San Antonio, Tx, USA"
        },
        "welcomemsg": "I am currently a computer-science student, looking for a great opputunity.",
        "skills": ["HTML/CSS", "Git & GitHub", "Javascript", "jQuery", "Jui-Jitsuka", "Coffee Afficionado"],
        "biopic": "images/me.png"
    };

        var work = {
        "jobs": [
        {
            "employer": "City of San Antonio",
            "title": "Sign/Electrical Inspector",
            "location": "1901 S Alamo, San Antonio, Tx.",
            "dates": "3/2014 - Current",
            "description": "Assisted with more complex inspections to ensure compliance with code requirements. Answered questions and provided information on code interpretation to the public, City staff, contractors, and architects." +
            "Investigates complaints, recommends corrective action, and resolves more complex or unusual issues."
        }, {
            "employer": "Budget Signs",
            "title": "Project Manager",
            "location": "2801 West Ave, San Antonio, Tx.",
            "dates": "November/2012 - 3/2014",
            "description": "Project-Manager for commercial installations. Coordinated and closely communicated with manufacturing, purchasing," +
            " sales, engineering, and other project management representatives."
        }
      ]
    };

    var education = {
        "schools": [
        {
            "name": "San Antonio Community College",
            "degree": "BA",
            "dates": "2013-Current",
            "location": "1300 San Pedro Ave, San Antonio, Tx.",
            "major": ["Computer-Sci"],
            "url": "http://www.alamo.edu/sac/"
        }
      ],
        "onlineCourse": [
        {
            "title": "Intro to HTML & CSS",
            "school": "Udacity",
            "dates": "January 2015",
            "url": "https://www.udacity.com/course/ud304"
        }, {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": "January 2015",
            "url": "https://www.udacity.com/course/ud893"
        }, {
            "title": "How To Use Git & GitHub",
            "school": "Udacity",
            "dates": "January 2015",
            "url": "https://www.udacity.com/course/ud775"
        }, {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "February 2015",
            "url": "https://www.udacity.com/course/ud804"
        }, {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates": "February 2015",
            "url": "https://www.udacity.com/course/ud245"
        }
      ]
    };

    var projects = {
        "projects": [{
            "title": "Project 1",
            "dates": "2014",
            "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
            "images": ["images/project1.png"]
        }, {
            "title": "Project 2",
            "dates": "2014",
            "description": "Created a interactive resume as a part of Udacity's Front-End Web Developer Nanodegree.",
            "images": ["images/project2.png"]
        }]
    };
    HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
    HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    HTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomemsg);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").prepend(HTMLheaderRole);
    $("#header").prepend(HTMLheaderName);
    $("#header").append(HTMLbioPic);
    $("#header").append(HTMLWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }

    function displayWork() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    };
    displayWork();

    $(document).click(function(loc) {
        // your code goes here!
        var x = loc.pageX;
        var y = loc.pageY;
        logClicks(x, y);
    });

    projects.display = function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDate);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }
        }
    };
    projects.display();

    education.display = function() {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            $('#education').append(HTMLschoolStart);
            for (i in education.schools) {
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
            if (education.onlineCourse.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (i in education.onlineCourse) {
                    $("#education").append(HTMLschoolStart);
                    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[i].title).replace("#", education.onlineCourse[i].url);
                    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[i].school);
                    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[i].dates);
                    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[i].url).replace("#",education.onlineCourse[i].url)
                    $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
                    $(".education-entry:last").append(formattedonlineDates);
                    $(".education-entry:last").append(formattedonlineURL);
                }
            }
        }
    };
    education.display();

    $("#mapDiv").append(googleMap);

    $(function () {
    $('.nav').stickyNavbar({
        activeClass: "active", // Class to be added to highlight nav elements
        sectionSelector: "scrollto", // Class of the section that is interconnected with nav links
        animDuration: 350, // Duration of jQuery animation as well as jQuery scrolling duration
        startAt: 0, // Stick the menu at XXXpx from the top of the this() (nav container)
        easing: "swing", // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
        animateCSS: true, // AnimateCSS effect on/off
        animateCSSRepeat: false, // Repeat animation everytime user scrolls
        cssAnimation: "fadeInDown", // AnimateCSS class that will be added to selector
        jqueryEffects: false, // jQuery animation on/off
        jqueryAnim: "slideDown", // jQuery animation type: fadeIn, show or slideDown
        selector: "a", // Selector to which activeClass will be added, either "a" or "li"
        mobile: false, // If false, nav will not stick under viewport width of 480px (default) or user defined mobileWidth
        mobileWidth: 480, // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due user usability on mobile)
        zindex: 9999, // The zindex value to apply to the element: default 9999, other option is "auto"
        stickyModeClass: "sticky", // Class that will be applied to 'this' in sticky mode
        unstickyModeClass: "unsticky" // Class that will be applied to 'this' in non-sticky mode
    });
});