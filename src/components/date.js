const dateDisplay = document.querySelector("h2#date");

function getDate() {
  const date = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const formattedDate = date.toLocaleDateString('en-US', options);
  dateDisplay.textContent = formattedDate;
}


function startDate() {
  getDate();
  setInterval(getDate, 86400000);
}

export { startDate };