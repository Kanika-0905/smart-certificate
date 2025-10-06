
function updateTime(){
  const now = new Date();
  document.getElementById("datetime").innerText = now.toLocaleString();
}
setInterval(updateTime,1000); updateTime();


const student = localStorage.getItem("student") || "John Doe";
document.getElementById("student-name")?.innerText = student;


function logout(){
  alert("Logged out successfully!");
  localStorage.clear();
  window.location.href="index.html";
}
