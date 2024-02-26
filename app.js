let Card = document.getElementById("card");

let result = fetch("/doctors.json");
result
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    ihtml = "";
    for (key in data) {
      ihtml += `<div class="card1">
        <div class="card h-100">
            <img src="${data[key].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data[key].name}</h5>
                <p class="card-text">${data[key].speciality}</p>
            </div>
        </div>
    </div>`;
    }
    Card.innerHTML = ihtml;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
