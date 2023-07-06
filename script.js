const mainP = document.querySelector("#mainP");
const managerInput = document.querySelector("#managerInput");
const companyName = document.querySelector("#companyName");
const btn = document.querySelector("#btn");
const date = new Date();
const render = (Manager, companyName) => {
  mainP.innerHTML = `<span>Dear ${Manager},</span><br><br>
    <span>
    I am writing to express my great interest
     in the web developer position at ${companyName} 
     As an aspiring web developer who is soon relocating to Norway, 
     I am excited about the opportunity to contribute to your team
      and leverage my skills and experience to make a positive impact.
<br><br></span>


What sets me apart
 is not only my passion for web
  development but also my strong work ethic, 
  dedication and unwavering commitment to learning.
   Although I lack work experience, I make up for it in my 
   ability to quickly grasp new concepts and my meticulous 
   attention to detail. I thrive both independently and in
    collaborative team environments, always striving to
     deliver exceptional work of the highest quality within
      defined timelines.
 <br> <br>


 I am truly excited about the opportunity to join 
 your esteemed team. The opportunity to work alongside
  talented professionals and contribute to Hani's growth 
  and success appeals to me incredibly. I have thoroughly 
  researched the job market in Norway and firmly
  believe that my skills are well suited to the job requirements.
   <br> <br>


   Thank you for considering my request. 
   If you have any questions or need more information, 
   don't hesitate to reach out.
   I look forward to the opportunity to be a valued friend of Honey.<br> <br>


Thank you for considering my application. 
I am excited about the possibility of joining ${companyName} and contributing
to your team. Please let me know if you have any questions or if there is any additional information you require.
<br> <br>

Sincerely, <br>

Hani Danial
<br>
${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
`;
};

btn.addEventListener("click", () => {
  if (managerInput.value > "" && companyName.value > "") {
    render(managerInput.value, companyName.value);
  } else return;
});
