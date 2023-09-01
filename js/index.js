
const cardControl = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    const tabContainer = document.getElementById("tabContainer");
    arrayData = data.data
    arrayData.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a class="tab text-center">Tab 3</a>
        `
        tabContainer.appendChild(div);
    });
}

cardControl();  
