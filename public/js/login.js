const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("hi");
  
    // Collect values from the login form
    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username:username, password:password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(await response.json());
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#login-button')
    .addEventListener('click', loginFormHandler);