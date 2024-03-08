
const terminalCommand = {
  greeting: [
    "Hi I am Nitesh Kumar",
    "To know more about me, play amongU game",
    "for playing type : play",
    "for command info type : cmd",
  ],
  cmd: [
    "Various commands :",
    "more : To know more about me",
    "projects : to know my projects",
    "skills : to know my skills",
    "close : to close terminal",
    "play : playing game",
  ],
  more: [
    "I am 4th year CSE student",
    "I am full stack web developer",
    "Thanks for visiting my portfolio website",
  ],
  projects: ["e-cart", "natours", "chat-app"],
  skills: [
    "html",
    "css",
    "javascript",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "GitHub",
    "Git",
  ],
  error: ["unexpected error occured or,", "invalid commad"]
};

async function printTextWithRunningEffect(lines) {
  const outputDiv = document.getElementById("chat-messages");
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (i == 0) {
      line = 'C:\\nitesh> ' + line;
    } else {
      line = '__________ ' + line;
    }
    const lineDiv = document.createElement("div"); // Create a new div for the line
    lineDiv.classList.add("message");
    // scrollIntoView if scrolled
    document.querySelector('#user-input').scrollIntoView({behavior: 'smooth'})

    outputDiv.appendChild(lineDiv); // Append the div to the output container
    for (let j = 0; j <= line.length; j++) {
      const partialLine = line.substring(0, j);
      lineDiv.textContent = partialLine; // Set the text content of the div
      await new Promise((resolve) => setTimeout(resolve, 20)); // Delay between each character
    }
    if(i == lines.length - 1) {
        document.querySelector('#user-input').value = 'you> ';
        const textarea = document.querySelector('#user-input').focus();
    }
    await new Promise((resolve) => setTimeout(resolve, 5)); // Delay between each line
  }
}

function printTextWithNotRunningEffect(lines) {
    const outputDiv = document.getElementById("chat-messages");
    const lineDiv = document.createElement("div"); // Create a new div for the line
    lineDiv.classList.add("message");
    outputDiv.appendChild(lineDiv);
    lineDiv.textContent = lines;
    // scrollIntoView if scrolled
    document.querySelector('#user-input').scrollIntoView({behavior: 'smooth'})
    const textarea = document.querySelector('#user-input');
        textarea.focus();
}

export const sendMessage = async function (val = "notstart") {
    var userInput = document
            .getElementById("user-input")
            .value.toLowerCase()
            .trim();
    if(val != "start")
        userInput = userInput.split('>')[1].trim();
  if (val === "start") {
    printTextWithRunningEffect(terminalCommand["greeting"]);
  } else if (userInput in terminalCommand) {
    const valOfMessage = terminalCommand[userInput];
    printTextWithNotRunningEffect(`you> ${userInput}`);
    printTextWithRunningEffect(valOfMessage);
  } else {
    printTextWithNotRunningEffect(`you> ${userInput}`);
    printTextWithRunningEffect(terminalCommand["error"]);
  }
};

// 