
var confettiOn = 0;
  function calculatePercentage() {
    var startTime = document.getElementById("start-time").value;
    var endTime = document.getElementById("end-time").value;
  
    var start = new Date();
    var end = new Date();
  
    var startTimeParts = startTime.split(":");
    start.setHours(startTimeParts[0], startTimeParts[1], 0, 0);
  
    var endTimeParts = endTime.split(":");
    end.setHours(endTimeParts[0], endTimeParts[1], 0, 0);
  
    var currentTime = new Date();
    var totalDuration = end - start;
    var elapsedTime = currentTime - start;
    var percentage = (elapsedTime / totalDuration) * 100;
    
  
    if (percentage > 100) {
      percentage = 100;
    } 
    if (percentage < 0) {
      percentage = 0;
    }
  
    var progressGradient = calculateProgressGradient(percentage);
    document.getElementById("progress-bar").style.width = percentage + "%";
    document.getElementById("progress-bar").style.background = progressGradient;
    document.getElementById("percentage").textContent = Math.round(percentage) + "%";

    if ((percentage === 100) && confettiOn === 0) {
      // Trigger confetti
      startConfetti();
      confettiOn = 1;
      setTimeout(function() {
        stopConfetti();
      }, 3000);
    } 
    if (percentage < 100) {
      confettiOn = 0;
    }
  }
  
  
  function calculateProgressGradient(percentage) {
    var startColor = [255, 194, 194]; 
    var endColor = [240, 86, 86]; 
  
    var color = [];
    for (var i = 0; i < 3; i++) {
      var channel = startColor[i] + ((endColor[i] - startColor[i]) * percentage) / 100;
      color.push(Math.round(channel));
    }
  
    return "linear-gradient(to right, rgb(255, 194, 194), rgb(" + color.join(",") + "))";
  }
  
  
  // Run calculatePercentage() initially
  calculatePercentage();
  
  // Update the progress bar every second
  setInterval(calculatePercentage, 100);
  
  