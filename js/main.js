const cardContent = document.getElementById("cardContent");
const verBag = document.getElementById("verBag");
const modalContenedor = document.getElementById("modalContenedor")


const releases = [
{
        id: 1,
        name: "Mi Sol EP",
        price: 12.45,
        img: "https://geo-media.beatport.com/image_size/1400x1400/1a9a8e93-1465-4da2-9fa6-d1c6182d9918.jpg",
},
{
        id: 2,
        name: "Phegornis Single",
        price: 2.49,
        img: "https://geo-media.beatport.com/image_size/1400x1400/922c40b4-8ffd-42f0-9c3c-1486d5eb7f72.jpg"

},
{
        id: 3,
        name: "Argentina Avenue",
        price: 16.99,
        img: "https://geo-media.beatport.com/image_size/1400x1400/21051c1c-cca1-469b-a0af-fb5c821e587d.jpg"
},
{
        id: 4,
        name: "Seducing the Dancefloor, Vol. 13",
        price: 16.99,
        img:"https://geo-media.beatport.com/image_size/1400x1400/88c8ec49-1418-4161-b1be-464b784f2571.jpg"
}

];

let carrito = [];

releases.forEach((release) => {
    let info = document.createElement("div");
    info.className = "card";
    info.innerHTML = `
    <img src="${release.img}">
    <h3>${release.name}</h3>
    <p class="price">${release.price} $</p>
    `;
    cardContent.append(info);

    let buy = document.createElement("button");
    buy.innerText = "Buy";
    buy.className

    info.append(buy);

    buy.addEventListener("click", () => {

        carrito.push({
            id : release.id,
            img: release.img,
            name: release.name,
            price: release.price,

        });
        console.log(carrito)
    })

});

