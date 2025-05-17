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