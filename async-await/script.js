// ASYNC/AWAIT DEMO: Simple version for beginners

const wrongWayBtn = document.getElementById("wrongWay");
const rightWayBtn = document.getElementById("rightWay");
const dogContainer = document.getElementById("dogContainer");
const statusEl = document.getElementById("status");
const messageBox = document.getElementById("messageBox");

// Event listeners
wrongWayBtn.addEventListener("click", showWrongWay);
rightWayBtn.addEventListener("click", showRightWay);

// ❌ WRONG WAY: Without async/await
function showWrongWay() {
  // Reset everything
  messageBox.innerHTML = "No message yet...";
  dogContainer.innerHTML = "Loading dog...";
  statusEl.innerHTML = "❌ Wrong Way: Starting...<br>";

  // Get dog (no await - doesn't wait!)
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      // Add delay to show the problem
      setTimeout(() => {
        dogContainer.innerHTML = `<img src="${data.message}" alt="Dog">`;
        statusEl.innerHTML += "Dog loaded!<br>";
      }, 2000);
    });

  // Show message immediately (doesn't wait for dog)
  messageBox.innerHTML = "Welcome!Thanks for visiting our site!";
  statusEl.innerHTML += "Message shown immediately (before dog!)<br>";
}

// ✅ RIGHT WAY: With async/await
async function showRightWay() {
  // Reset everything
  messageBox.innerHTML = "No message yet...";
  dogContainer.innerHTML = "Loading dog...";
  statusEl.innerHTML = "✅ Right Way: Starting...<br>";

  // Get dog WITH await (waits for it!)
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();

  // Add delay to show we're waiting
  await new Promise((resolve) => setTimeout(resolve, 2000));

  dogContainer.innerHTML = `<img src="${data.message}" alt="Dog">`;
  statusEl.innerHTML += "Dog loaded!<br>";

  // Show message AFTER dog loads
  messageBox.innerHTML = "Welcome! Thanks for visiting our site!";
  statusEl.innerHTML += "Message shown after dog loaded!<br>";
}

// Initial message
statusEl.innerHTML = "Click a button to see the difference!";