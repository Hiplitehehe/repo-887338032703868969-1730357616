document.getElementById("bindButton").addEventListener("click", function() {
  const userId = document.getElementById("userId").value;
  const apiKey = document.getElementById("apiKey").value;

  // Send request to Cloudflare Worker to bind API key
  fetch(`https://a.hiplitehehe.workers.dev/bind?userId=${userId}&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log("API Key bound:", data);
      alert("API Key successfully bound!");
    })
    .catch(error => {
      console.error("Error binding API key:", error);
      alert("Error binding API key.");
    });
});

// Fetch API Key logic
document.getElementById("getKeyButton").addEventListener("click", function() {
  const userId = document.getElementById("userId").value;

  fetch(`https://a.hiplitehehe.workers.dev/getKey?userId=${userId}`)
    .then(response => response.json())
    .then(data => {
      if (data.apiKey) {
        console.log("API Key retrieved:", data.apiKey);
        alert(`API Key: ${data.apiKey}`);
      } else {
        alert("No API Key found for this user.");
      }
    })
    .catch(error => {
      console.error("Error retrieving API key:", error);
      alert("Error retrieving API key.");
    });
});
