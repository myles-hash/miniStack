// call my api
async function getMessage(){
    // call our API with fetch
    const response = await fetch('http://localhost:8080/message');

    // turn the response into json
    const json = await response.json();

    // put my message on the page
    const p = document.getElementById('message');
    p.textContent = json.message;
}

getMessage();