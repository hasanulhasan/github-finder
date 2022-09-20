let searchBtn = document.getElementById('search-btn');
let searchUser = document.getElementsByTagName('input');
console.log(searchUser.value)

searchBtn.addEventListener('click', function () {
  let userText = searchUser.value;
  console.log('clicked')
  if (userText != '') {
    console.log(userText)
  }
})