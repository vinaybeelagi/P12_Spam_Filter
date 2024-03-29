//Define variables to select HTML elements
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Define regular expressions for spam detection
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

// Create a denyList array with regular expressions
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// Function to check if a message contains spam
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
// Event listener for button click
checkMessageButton.addEventListener("click", () => {
    // Check if the message input is empty
    if (messageInput.value === "") {
      alert("Please enter a message.");
      return;
    }
     // Display spam detection result in the result element
  result.textContent = isSpam(messageInput.value)
  ? "Oh no! This looks like a spam message."
  : "This message does not seem to contain any spam.";

  // Clear the message input after processing
  messageInput.value = "";
});