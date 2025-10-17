// Basic greeting function
function sayHello(city, country) {
  return `Hi, I'm ${this.name} from ${city}, ${country}.`;
}

// Our objects
const sara = { name: "Sara" };
const codeHug = { name: "CodeHug" };

// Demo functions
function demoCall() {
  const result = sayHello.call(sara, 'Amsterdam', 'Netherlands')
  document.getElementById("actionTitle").textContent = "Selected action: Call";
  document.getElementById("resultText").textContent = result;
  document.getElementById("reasonText").textContent =
    "call runs the function right now, and arguments are passed one by one";
}

function demoApply() {
  const result = sayHello.apply(codeHug, ['Spain', 'Barcelona'])
  document.getElementById("actionTitle").textContent = "Selected action: Apply";
  document.getElementById("resultText").textContent = result;
  document.getElementById("reasonText").textContent =
    "apply also runs it right now, but the arguments go inside an array";
}

function demoBind() {
  const greetCodeHug = sayHello.bind(codeHug, 'Paris')
  const result = greetCodeHug('Paris')
  document.getElementById("actionTitle").textContent = "Selected action: Bind";
  document.getElementById("resultText").textContent = result;
  document.getElementById("reasonText").textContent =
    "bind doesn't run immediately. It creates a new version of the function with 'this' locked.";
}

// Add event listeners
document.getElementById("btn-call")?.addEventListener("click", demoCall);
document.getElementById("btn-apply")?.addEventListener("click", demoApply);
document.getElementById("btn-bind")?.addEventListener("click", demoBind);

const myApp = {
  fistName : 'myApp',
  start() {
    console.log(this.fistName, 'Started')
  }
}

setTimeout(myApp.start,0)
setTimeout(myApp.start.bind(myApp), 0)

/* Quick Recap
  Call says: I'll do it now!
  Apply says: I'll do it now but give me an array!
  Bind says: No no I'll do it letter but I'll remember who I am!

*/

// Challenge 1
  sayHello.call({name: 'Mara'}, 'Paris', 'France')
  sayHello.apply({name: 'CodeHug'}, [
    'Netherlands', 'Amsterdam'])
// Challenge 2
    const user = {
      name:'Sam',
      hi() {
        console.log(this.name)
      }
    }
    const greet = user.hi;
    greet();
