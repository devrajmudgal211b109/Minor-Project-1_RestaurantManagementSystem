const liItem = document.querySelectorAll('ul li');
const Items = document.querySelectorAll('.menu div');

liItem.forEach(li => {
  li.onclick = function () {
    liItem.forEach(li => {
      li.className = "";
    })
    li.className = "active";
  }
  const value = li.textContent
  Items.forEach(div => {
    div.style.display= 'none';
    if (div.getAttribute('data-filter') == value.toLowerCase() || value="All"){
      div.style.display="block";
    }
    
  })


});