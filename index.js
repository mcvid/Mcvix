const input = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');

function realTimeSearch(query) {
  console.log('Real-time search query:', query);
}

input.addEventListener('input', () => {
  clearBtn.classList.toggle('show', input.value.length > 0);
  realTimeSearch(input.value);
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  input.focus();
  clearBtn.classList.remove('show');
});

const filterButtons = document.querySelectorAll('.bts');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Smooth section identification on nav click
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    const activeSection = document.querySelector('.section.active');
    if (activeSection === targetSection) return;

    activeSection.style.transition = 'opacity 0.3s ease';
    activeSection.style.opacity = 0;

    setTimeout(() => {
      activeSection.classList.remove('active');
      activeSection.style.display = 'none';
      activeSection.style.opacity = 1; // reset opacity for future use

      // Show and fade in target section
      targetSection.style.display = 'block';
      targetSection.style.opacity = 0;
      targetSection.classList.add('active');
      setTimeout(() => {
        targetSection.style.transition = 'opacity 0.3s ease';
        targetSection.style.opacity = 1;
      }, 10);
    }, 300);
  });
});

// Event listener for the search button in right-panel
const searchButton = document.querySelector('#home-right-panel .sign-up');
if (searchButton) {
  searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.focus();
      // Removed scrollIntoView to delete scrolling prompt
      // searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

document.querySelectorAll('.bts').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 150);
  });
});

function toggleClick(btn) {
  btn.classList.toggle('clicked');
}

function setActive(btn) {
  document.querySelectorAll('.bts').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

const buttons = document.querySelectorAll('.bts');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

const profileDropdown = document.getElementById('profileDropdown');

function toggleDropdown() {
  if (profileDropdown.style.display === 'block') {
    profileDropdown.style.display = 'none';
  } else {
    const profileToggle = document.getElementById('profileToggle');
    const rect = profileToggle.getBoundingClientRect();
    profileDropdown.style.top = rect.bottom + 'px';

    const dropdownWidth = profileDropdown.offsetWidth;
    let leftPos = rect.left;
    const viewportWidth = window.innerWidth;

    if (leftPos + dropdownWidth > viewportWidth) {
      leftPos = viewportWidth - dropdownWidth - 10; // 10px padding from edge
    }

    profileDropdown.style.left = leftPos + 'px';
    profileDropdown.style.display = 'block';
  }
}

document.addEventListener('click', (e) => {
  const profileToggle = document.getElementById('profileToggle');
  if (!profileDropdown.contains(e.target) && !profileToggle.contains(e.target)) {
    profileDropdown.style.display = 'none';
  }
});
function toggleDropdown() {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
  const dropdown = document.getElementById("profileDropdown");
  const menuContainer = document.querySelector(".profile-menu-container");

  if (!menuContainer.contains(event.target)) {
    dropdown.style.display = "none";
  }
});
const avatar = document.querySelector('.profile-avatar');
const dropdown = document.querySelector('.profile-dropdown');
const rightPanel = document.querySelector('.right-panel');

let isDropdownOpen = false;

avatar.addEventListener('click', () => {
  isDropdownOpen = !isDropdownOpen;
  
  dropdown.style.display = isDropdownOpen ? 'block' : 'none';
  rightPanel.style.display = isDropdownOpen ? 'none' : 'flex';
});

// Prevent right panel from appearing on any click on mobile
document.addEventListener('click', (event) => {
  const isMobile = window.innerWidth <= 768;
  const profileContainer = document.querySelector('.profile-menu-container');
  const dropdown = document.getElementById('profileDropdown');
  const rightPanel = document.querySelector('.right-panel');
  const mainContent = document.querySelector('.main-content');

  if (isMobile) {
    // Only toggle dropdown and right panel if click is inside profile menu container
    if (!profileContainer.contains(event.target)) {
      dropdown.style.display = 'none';
      rightPanel.style.display = 'none'; // Hide right panel on mobile when clicking outside
      mainContent.style.right = '0'; // Adjust main content accordingly
    }
  }
});
function toggleDropdown() {
  const dropdown = document.getElementById("profileDropdown");
  const rightPanel = document.querySelector(".right-panel");

  const isVisible = dropdown.style.display === "block";

  // Toggle dropdown
  dropdown.style.display = isVisible ? "none" : "block";

  // Toggle right panel
  rightPanel.style.display = isVisible ? "flex" : "none";
}
function toggleDropdown() {
  const dropdown = document.getElementById("profileDropdown");
  const rightPanel = document.querySelector(".right-panel");
  const mainContent = document.querySelector(".main-content");

  const isVisible = dropdown.style.display === "block";

  if (isVisible) {
    dropdown.style.display = "none";
    rightPanel.style.display = "flex";
    mainContent.style.right = "290px"; 
  } else {
    dropdown.style.display = "block";
    rightPanel.style.display = "none";
    mainContent.style.right = "11%"; 
  }
}

document.addEventListener("click", function(event) {
  const profileContainer = document.querySelector(".profile-menu-container");
  const dropdown = document.getElementById("profileDropdown");
  const rightPanel = document.querySelector(".right-panel");
  const mainContent = document.querySelector(".main-content");


  if (!profileContainer.contains(event.target)) {
    dropdown.style.display = "none";
    rightPanel.style.display = "flex";
    mainContent.style.right = "290px"; 

}  });
mainContent.classList.toggle("expanded", !isVisible);
function scrollSlider(direction) {
  const slider = document.getElementById('MixSlider');
  const scrollAmount = 300; // adjust this as needed

  if (direction === 'left') {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const section = this.getAttribute('data-section');
    // Implement your logic to display the corresponding section
    // For example:
    showSection(section);
    // Update active state
    document.querySelectorAll('.bottom-nav .nav-item').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});
function scrollSlider(direction) {
  const slider = document.getElementById('Made');
  const scrollAmount = 300; // adjust this as needed

  if (direction === 'left') {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
function scrollSlider(button, direction) {
  
  const container = button.closest('.daily-mix-container');
  
  const slider = container.querySelector('.daily-mix-slider');

  if (direction === 'left') {
    slider.scrollLeft -= 300;
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    slider.scrollLeft += 300;
  }
}
const avatar = document.getElementById('profileToggle');
    const dropdown = document.getElementById('profileDropdown');

    function toggleDropdown() {
      dropdown.classList.toggle('open');
    }

    document.addEventListener('click', e => {
      if (!avatar.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
    (function() {
      const avatar   = document.getElementById('profileToggle');
      const dropdown = document.getElementById('profileDropdown');
  
      function isMobile() {
        return window.innerWidth <= 600;
      }
  
      function openDropdown(e) {
        e.stopPropagation();
        if (!isMobile()) return;        // only on phones
        dropdown.classList.add('open');
      }
  
      function closeDropdown() {
        dropdown.classList.remove('open');
      }
  
      avatar.addEventListener('click', openDropdown);
  
      // clicking anywhere else on the document closes the menu
      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && !avatar.contains(e.target)) {
          closeDropdown();
        }
      });
  
      // also close on resize when going back to desktop
      window.addEventListener('resize', function() {
        if (!isMobile()) {
          closeDropdown();
        }
      });
    })();
    document.addEventListener("DOMContentLoaded", function () {
      const avatar = document.getElementById("profileToggle");
      const dropdown = document.getElementById("profileDropdown");
  
      function isMobile() {
        return window.innerWidth <= 600;
      }
  
      avatar.addEventListener("click", function (e) {
        e.stopPropagation();
        if (isMobile()) {
          dropdown.classList.toggle("open");
        }
      });
  
      document.addEventListener("click", function (e) {
        if (
          isMobile() &&
          !dropdown.contains(e.target) &&
          !avatar.contains(e.target)
        ) {
          dropdown.classList.remove("open");
        }
      });
  
      window.addEventListener("resize", () => {
        if (!isMobile()) {
          dropdown.classList.remove("open");
        }
      });
    });
    function showSignup() {
      document.querySelector('.auth-form').style.display = "none";
      document.getElementById('signup-form').style.display = "block";
    }
  
    function showLogin() {
      document.querySelector('.auth-form').style.display = "block";
      document.getElementById('signup-form').style.display = "none";
    }
  
    // Login logic
    function login() {
      const email = document.getElementById("email").value;
      const pass = document.getElementById("password").value;
      const storedEmail = localStorage.getItem("userEmail");
      const storedPass = localStorage.getItem("userPassword");
  
      if (!email || !pass) return alert("Fill in all fields.");
      if (pass.length < 8) return alert("Password must be at least 8 characters.");
  
      if (email === storedEmail && pass === storedPass) {
        localStorage.setItem("loggedInUser", email);
        document.getElementById("auth-screen").style.display = "none";
      } else {
        alert("Invalid credentials.");
      }
    }
  
    // Signup logic
    function signup() {
      const email = document.getElementById("signupEmail").value;
      const pass = document.getElementById("signupPassword").value;
  
      if (!email.includes("@") || !email.includes(".")) return alert("Enter a valid email.");
      if (pass.length < 8) return alert("Password must be at least 8 characters.");
  
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", pass);
      localStorage.setItem("loggedInUser", email);
      document.getElementById("auth-screen").style.display = "none";
    }
  
    // Block access if not logged in
    window.onload = () => {
      if (!localStorage.getItem("loggedInUser")) {
        document.getElementById("auth-screen").style.display = "flex";
      } else {
        document.getElementById("auth-screen").style.display = "none";
      }
    };
    const form = document.getElementById("authForm");
const toggleLink = document.getElementById("toggleLink");
const formTitle = document.getElementById("formTitle");
const toggleFormText = document.getElementById("toggleFormText");
const errorMsg = document.getElementById("errorMsg");

let isLogin = true;

toggleLink.addEventListener("click", () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Login" : "Sign Up";
  toggleFormText.innerHTML = isLogin
    ? `Don't have an account? <span id="toggleLink">Sign up</span>`
    : `Already have an account? <span id="toggleLink">Login</span>`;
  errorMsg.textContent = "";
  document.getElementById("toggleLink").addEventListener("click", toggleLink.click);
});

form.addEventListener("submit")
function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{10,}$/;
  return re.test(password);
}
document.addEventListener('DOMContentLoaded', () => {
  const authForm = document.getElementById('authForm');
  const formTitle = document.getElementById('form-title');
  const submitBtn = document.getElementById('submitBtn');
  const toggleLink = document.getElementById('toggleLink');
  const toggleText = document.getElementById('toggleText');

  let isLogin = true;

  // Toggle between Login and Sign Up
  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? 'Log In' : 'Sign Up';
    submitBtn.textContent = isLogin ? 'Log In' : 'Sign Up';
    toggleText.innerHTML = isLogin
      ? `Don't have an account? <a href="#" id="toggleLink">Sign Up</a>`
      : `Already have an account? <a href="#" id="toggleLink">Log In</a>`;
  });

  // Form Submission
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = authForm.email.value.trim();
    const password = authForm.password.value.trim();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (isLogin) {
      // Log In Logic
      const storedUser = JSON.parse(localStorage.getItem(email));
      if (storedUser && storedUser.password === password) {
        alert('Login successful!');
        // Redirect to home page or dashboard
        window.location.href = 'home.html';
      } else {
        alert('Invalid email or password.');
      }
    } else {
      // Sign Up Logic
      if (localStorage.getItem(email)) {
        alert('An account with this email already exists.');
        return;
      }
      const user = { email, password };
      localStorage.setItem(email, JSON.stringify(user));
      alert('Account created successfully! Please log in.');
      // Switch to login view
      isLogin = true;
      formTitle.textContent = 'Log In';
      submitBtn.textContent = 'Log In';
      toggleText.innerHTML = `Don't have an account? <a href="#" id="toggleLink">Sign Up</a>`;
    }
  });

  // Email Validation Function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});