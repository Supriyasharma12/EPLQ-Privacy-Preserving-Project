// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIUMZm72_JzFgWvHiMcrDRLoBMOn-7LSg",
  authDomain: "eplq-1ed55.firebaseapp.com",
  projectId: "eplq-1ed55",
  storageBucket: "eplq-1ed55.firebasestorage.app",
  messagingSenderId: "853945209750",
  appId: "1:853945209750:web:9cacb4b2714eec0f4b83b7",
  measurementId: "G-EEQWR8583V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export if you want to use Firebase in other files
export { app };





// Handling navbar and hamburger menu

const navmenu= document.getElementById('navmenu');
const hamburger= document.getElementById('hamburger');
const dropdownmenu = document.getElementById('drop-down-menu');
const loginbtn = document.getElementById('login-btn');

// toggling hamburger menu
hamburger.addEventListener('click', () =>{
    if(navmenu.style.display === 'block'){
        navmenu.style.display = 'none';
    }
    else{
        navmenu.style.display = 'block';
    }
});

// toggling login dropdown
loginbtn.addEventListener('click', () => {
    if(dropdownmenu.style.display === 'block'){
        dropdownmenu.style.display = 'none';
    }
    else{
        dropdownmenu.style.display = 'block';
    }
});

// element.addEventListener('click', function(event) { ... });
// JavaScript automatically passes an event object to your function.
// This event object contains information about what happened during the event:
// e.type → type of event ("click", "keydown", etc.)
// e.target → the HTML element that triggered the event (the thing you clicked on)
// e = event object → tells us what was clicked.
// e.target = actual clicked element.
// contains() = check if the clicked element is inside a given menu.

document.addEventListener('click', (e) => {
    if(!navmenu.contains(e.target) && !hamburger.contains(e.target)){
        navmenu.style.display='none';
    }
    if(!loginbtn.contains(e.target) && !dropdownmenu.contains(e.target)){
        dropdownmenu.style.display='none';
    }
});



// handling toggling of login and register form
 document.getElementById("showregister").addEventListener("click", () => {
    document.getElementById("showlogin").style.display="none";
    document.getElementById("registerlogin").style.display="block";
 });

  document.getElementById("showlogin").addEventListener("click", () => {
    document.getElementById("registerlogin").style.display="none";
    document.getElementById("showlogin").style.display="block";
 });
 

//  role based dashboard either admin dashboard or user dashboard

if(role=="admin"){
    window.location.href="admin-dashborad.html";
}else{
    window.location.href="user-dashboard.html";
}
