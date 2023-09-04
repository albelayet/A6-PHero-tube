
const cardControl = async () => {
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
    // console.log(arrayData);
    onClickEvent("1000");

}


const onClickEvent = async (elementID) => {

    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${elementID}`);
    const data = await response.json();

    const cardContainer = document.getElementById("cardContainer");
    const heroContainer = document.getElementById("hero");
    cardContainer.innerHTML = "";
    console.log(data.data)
    if (data.data.length > 0) {
        data.data.forEach((card) => {
            const postedDate = card.others.posted_date;
            
            function secondsToH(seconds) {
                const hours = Math.floor(seconds / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                
                return {
                    hours: hours,
                    minutes: minutes,
                };
            }
            const timeObject = secondsToH(postedDate);
            const finalTime = `${timeObject.hours} hr ${timeObject.minutes} min`;
            console.log(finalTime);

            const div = document.createElement('div');
            div.innerHTML = `
                <div class="card w-96 h-4/5 bg-base-100 shadow-2xl">
                    <figure><img class="w-full" src="${card.thumbnail}" alt="Shoes" /></figure>
                    
                    <div class = "-mt-10"><span class = "bg-black text-white w-1/2">${finalTime}</span></div>

                    <div class="card-body">
                        <div class="flex gap-6">
                            <div>
                                <img class="w-20 h-24 rounded-full" src="${card.authors[0].profile_picture}" alt="">
                            </div>
                            <div>
                                <h2 class="card-title mb-2">${card.title}</h2>
                                <p class="flex gap-2">${card.authors[0].profile_name} <span>${card.authors[0].verified ? '<img src="image/fi_10629607.png" alt="Verified">' : ''}</span></p>
                                <p>${card.others?.views}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            cardContainer.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <img class="mx-auto" src="image/Icon.png" alt="">
            <h1 class="text-5xl font-bold">OOPS SORRY!! <br> There is no Content Here</h1>
          </div>
        </div>
      </div>
        `;
        heroContainer.appendChild(div);
    }
}
// Blog btn section 

const blogBtn = document.getElementById("blogbtn");

blogBtn.addEventListener("click", function(){
    window.location.href = "blog.html"
})



cardControl();
