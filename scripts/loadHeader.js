fetch('/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;

    // After header is loaded, bind the email copy button
    const email = "nielspeterkc@gmail.com";
    document.getElementById("copy-email").addEventListener("click", () => {
      navigator.clipboard.writeText(email).then(() => {
        alert("Email address copied to clipboard!");
      });
    });
  });
