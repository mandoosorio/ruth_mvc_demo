//this file is referenced in the client.handlebars file

async function newFormHandler(event) {
    console.log("got hereeeee");
    event.preventDefault();
  
    const client_name = document.querySelector('#client_name').value;
    const description = document.querySelector('#description').value;
    const address = document.querySelector('#address').value;
    const phone = document.querySelector('#phone').value;
    const dob = document.querySelector('#dob').value;
    
    console.log(client_name, description, address, phone, dob);

    const response = await fetch(`/api/client`, {
      method: 'POST',
      body: JSON.stringify({
        client_name,
        description, 
        address,
        phone,
        dob
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add client');
    }
  }
  
  document
    .querySelector('.new-dish-form')
    .addEventListener('submit', newFormHandler);