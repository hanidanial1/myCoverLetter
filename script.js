
const mainP = document.querySelector("#mainP");
const managerInput = document.querySelector("#managerInput");
const companyName = document.querySelector("#companyName");
const btn = document.querySelector("#btn");
const date = new Date
const render = (Manager, companyName) => {
  mainP.innerHTML = `<span>Dear ${Manager},</span><br><br>
    <span>
I am writing to express my interest in the Web Developer position at ${companyName}.
While I do not have direct experience in web development,
I have taken online courses and completed several projects to develop my skills in HTML, CSS, and JavaScript. <br><br></span>

Through these courses, I have gained knowledge in responsive design, 
accessibility and best practices for website development, 
basic websites for personal projects, including a portfolio website that showcases my work.
 <br> <br>


I am particularly excited about the opportunity to work 
at ${companyName} because I am planning to relocate to Norway to live with my Norwegian partner. 
I have researched the job market in Norway and I am confident that my skills and experience will enable me
to make a positive contribution to your team. <br> <br>


What I lack in professional experience, I make up for in my strong work ethic,
dedication, and willingness to learn. I am a quick learner and have a strong attention to detail.
I am also comfortable working independently or as part of a team, and I am committed to delivering high-quality work 
on time. <br> <br>


Thank you for considering my application. I am excited about the possibility of joining ${companyName} and contributing
to your team. Please let me know if you have any questions or if there is any additional information you require.
<br> <br>

Sincerely, <br>

Hani Danial
<br>
${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}
`
};

btn.addEventListener("click", () => {
  if (managerInput.value > "" && companyName.value > "") {
    render(managerInput.value, companyName.value);
 } else return;
});
