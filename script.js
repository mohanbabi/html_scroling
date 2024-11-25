document.getElementById('updateTextButton').addEventListener('click', () => {
  const newText = document.getElementById('newScrollingText').value;
  const scrollingTextDiv = document.getElementById('scrollingText');

  if (newText.trim()) {
    scrollingTextDiv.textContent = newText;

    // Example: Send the new text to a server for global updates
    // fetch('/update-scrolling-text', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ text: newText })
    // });
  }
});
