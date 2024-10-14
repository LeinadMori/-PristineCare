document.getElementById('signupLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
  
    // Toggle dropdown visibility
    const dropdownMenu = document.getElementById('dropdownMenu');
    const isExpanded = dropdownMenu.style.display === 'block';
  
    // Toggle dropdown menu display
    dropdownMenu.style.display = isExpanded ? 'none' : 'block';
  
    // Update aria-expanded attribute
    this.setAttribute('aria-expanded', !isExpanded);
  });
  