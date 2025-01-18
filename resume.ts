document.getElementById("form")?.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const PhoneNoElement = document.getElementById("PhoneNo") as HTMLInputElement;
  const addressElement = document.getElementById("address") as HTMLInputElement;
  const summaryElement = document.getElementById("summary") as HTMLInputElement;
  const educationElement = document.getElementById(
    "education"
  ) as HTMLInputElement;
  const experienceElement = document.getElementById(
    "experience"
  ) as HTMLInputElement;
  const skillsElement = document.getElementById("skills") as HTMLInputElement;
  if (
    nameElement &&
    emailElement &&
    PhoneNoElement &&
    addressElement &&
    educationElement &&
    experienceElement &&
    skillsElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const PhoneNo = PhoneNoElement.value;
    const address = addressElement.value;
    const summary = summaryElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    const resumeOutput = `
            <h1>Resume</h1>
            <div id="generatedResume">
            <table>
            <tr>
            <td id="left_panel" rowspan="4">
            <h1 class="left_panel_element">${name}</h1>
            <p class="left_panel_element">${summary}</P>
            <h2 class="left_panel_element">Personal Information</h1>
            <ul class="left_panel_element">
            <li>
            <p><b>Email:</b>${email}</p></li>
            <li>
            <p><b>Address:</b>${address}</p>
            </li>
            <li>
            <p><b>Phone No:</b>${PhoneNo}</p>
            </li>
            </ul>
            </td>


            
            <td>
            <h3 class="right_panel">Education:</h3>
            <pre class="format-input">${education}</pre>
            </td>
            </tr>

             <tr>
             <td>
            <h3 class="right_panel">Experience:</h3>
            <pre class="format-input">${experience}</pre>
            </td>
            </tr>
            
            <tr>
            <td>
            <h3 class="right_panel">Skills:</h3>
            <pre class="format-input">${skills}</pre>
            </td>
            </tr>
            </table>
            </div>
            <a href="download.html"><button>Download</button></a>
            <a href="print.html"><button>Print</button></a>`;
    const resumeOutPutElement = document.getElementById(`resumeOutput`);
    if (resumeOutPutElement) {
      resumeOutPutElement.innerHTML = resumeOutput;
    } else {
      console.error(`The Resume OutPut elements are missing`);
    }
  } else {
    console.log(`One or more output elements are missing`);
  }
});
