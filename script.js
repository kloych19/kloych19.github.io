function showTemp(bubbleId) {
  const bubbles = document.querySelectorAll("#tempBubble"); 
  bubbles.forEach(b => b.style.display = "none");
  document.getElementById(bubbleId).style.display = "block";
}



