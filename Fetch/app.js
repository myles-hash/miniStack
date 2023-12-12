console.log("Hello world!");

async function getMyStuffFromOverThere() {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    console.log("HTTP Response:", response);
    const json = await response.json();
    console.log("JSON Data:", json);
    console.log(response.status);
    for (let i =0;i<json.length;i++){
    console.log(json[i].text);
    let p = document.createElement('p');
    document.body.appendChild(p);
    p.textContent = `${json[i].text}`;
    }
  }
  
  getMyStuffFromOverThere();

  
  
  