var _a;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var PhoneNoElement = document.getElementById("PhoneNo");
    var addressElement = document.getElementById("address");
    var summaryElement = document.getElementById("summary");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement &&
        emailElement &&
        PhoneNoElement &&
        addressElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var PhoneNo = PhoneNoElement.value;
        var address = addressElement.value;
        var summary = summaryElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n            <h1>Resume</h1>\n            <div id=\"generatedResume\">\n            <table>\n            <tr>\n            <td id=\"left_panel\" rowspan=\"4\">\n            <h1 class=\"left_panel_element\">".concat(name_1, "</h1>\n            <p class=\"left_panel_element\">").concat(summary, "</P>\n            <h2 class=\"left_panel_element\">Personal Information</h1>\n            <ul class=\"left_panel_element\">\n            <li>\n            <p><b>Email:</b>").concat(email, "</p></li>\n            <li>\n            <p><b>Address:</b>").concat(address, "</p>\n            </li>\n            <li>\n            <p><b>Phone No:</b>").concat(PhoneNo, "</p>\n            </li>\n            </ul>\n            </td>\n\n\n            \n            <td>\n            <h3 class=\"right_panel\">Education:</h3>\n            <pre class=\"format-input\">").concat(education, "</pre>\n            </td>\n            </tr>\n\n             <tr>\n             <td>\n            <h3 class=\"right_panel\">Experience:</h3>\n            <pre class=\"format-input\">").concat(experience, "</pre>\n            </td>\n            </tr>\n            \n            <tr>\n            <td>\n            <h3 class=\"right_panel\">Skills:</h3>\n            <pre class=\"format-input\">").concat(skills, "</pre>\n            </td>\n            </tr>\n            </table>\n            </div>\n            <a href=\"download.html\"><button>Download</button></a>\n            <a href=\"print.html\"><button>Print</button></a>");
        var resumeOutPutElement = document.getElementById("resumeOutput");
        if (resumeOutPutElement) {
            resumeOutPutElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The Resume OutPut elements are missing");
        }
    }
    else {
        console.log("One or more output elements are missing");
    }
});
