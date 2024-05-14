/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')
      // Add show-icon to show and hide menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown item
dropdownItems.forEach((item) =>{
   const dropdownButton = item.querySelector('.dropdown__button') 

   // 2. Select each button click
   dropdownButton.addEventListener('click', () =>{
       // 7. Select the current show-dropdown class
       const showDropdown = document.querySelector('.show-dropdown')
       
       // 5. Call the toggleItem function
       toggleItem(item)

       // 8. Remove the show-dropdown class from other items
       if(showDropdown && showDropdown!== item){
           toggleItem(showDropdown)
       }
   })
})

// 3. Create a function to display the dropdown
const toggleItem = (item) =>{
   // 3.1. Select each dropdown content
   const dropdownContainer = item.querySelector('.dropdown__container')

   // 6. If the same item contains the show-dropdown class, remove
   if(item.classList.contains('show-dropdown')){
       dropdownContainer.removeAttribute('style')
       item.classList.remove('show-dropdown')
   } else{
       // 4. Add the maximum height to the dropdown content and add the show-dropdown class
       dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
       item.classList.add('show-dropdown')
   }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
     dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () =>{
   // Validate if the media query reaches 1118px
   if(mediaQuery.matches){
       // Remove the dropdown container height style
       dropdownContainer.forEach((e) =>{
           e.removeAttribute('style')
       })

       // Remove the show-dropdown class from dropdown item
       dropdownItems.forEach((e) =>{
           e.classList.remove('show-dropdown')
       })
   }
}

addEventListener('resize', removeStyle)
/*** FOOTER FUNCTION */
window.addEventListener('scroll', function() {
   
    var footer = document.querySelector('.footer');
    var scrollPos = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    // If the user has scrolled to the bottom of the page
    if (scrollPos + windowHeight >= documentHeight) {
      footer.style.display = 'block' ;
    } else {
        footer.style.display = 'none';
    }
});

/* Formation continue TAB */
function openTab(evt, id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("container-Fc-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink_fc");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(id).style.display = "block";
    evt.currentTarget.classList.add("active");
  }

  // Automatically open the first tab on page load
  window.onload = function() {
    document.getElementById('PR').style.display = "block";
    document.querySelector('.tablink_fc.active').classList.remove('active');
    document.querySelector('.tablink_fc').classList.add('active');
  };