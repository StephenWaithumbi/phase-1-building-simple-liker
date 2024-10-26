// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph")
const errorModal = document.getElementById("modal");
const errorMessage = document.getElementById('modal-message')

errorModal.classList.add("hidden")

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    const isFullHeart = heart.classList.contains("activated-heart");

    if (!isFullHeart){
      mimicServerCall()
      .then(() => {
        heart.innerText = FULL_HEART;
      })
      .catch(error => {
        errorMessage.innerText = "Server error!";
        errorModal.classList.remove("hidden");

        setTimeout(() => errorModal.classList.add("hidden"), 3000);
      });
    } else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .5
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
