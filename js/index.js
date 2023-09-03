
const cardControl = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    const tabContainer = document.getElementById("tabContainer");
    arrayData = data.data
    arrayData.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick = "onClickEvent(${element.category_id})" class="tab text-black text-xl font-semibold">${element.category}</a>
        `
        tabContainer.appendChild(div);
    });
    console.log(arrayData);
}


const onClickEvent = async (elementID) => {
    
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${elementID}`);
    const data = await response.json();

    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";

    data.data.forEach( (card) => {
        console.log(card);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-96 h-4/5 bg-base-100 shadow-xl">
            <figure><img class="w-full" src=${card.thumbnail}  alt="Shoes" /></figure>
            <div class="card-body">
            <div  class="flex gap-6">
            <div>
                <img class="w-20 h-24 rounded-full" src= ${card.authors[0].profile_picture} alt="">
            </div>
            <div>
            <h2 class="card-title mb-2">${card.title} </h2>
                <p class = "flex gap-2">${card.authors[0].profile_name} <span>${card.authors[0].verified ? '<img src="image/fi_10629607.png" alt="Verified">' : ''}</span></p>
                <p class = "">${card.others?.views}</p>
            </div>
          </div>
            </div>
        </div>
        `
        cardContainer.appendChild(div);
        console.log(card);
    })

    

}



cardControl();  
onClickEvent("1000");