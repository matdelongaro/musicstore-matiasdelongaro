const cardContent = document.getElementById("cardContent");
const verBag = document.getElementById("verBag");
const modalContenedor = document.getElementById("modalContenedor")




let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



const getReleases = async() => {
    const response = await fetch("data.json");
    const data = await response .json();

    data.forEach((release) => {
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
            Swal.fire({
                icon: 'success',
                title: '¡Producto agregado al carrito!',
                showConfirmButton: false,
                timer: 1500 
              });
            saveLocal();
        })
    
    });
};
getReleases()





const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

