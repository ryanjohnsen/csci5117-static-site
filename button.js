
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button').addEventListener('click', function() {
    let lst = document.getElementById('guests')
    let name = document.getElementById('guestName').value
    // Append a new guest to the list
    let newGuest = document.createElement('li')
    newGuest.innerHTML = name
    lst.appendChild(newGuest)
  });
})