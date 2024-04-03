const llamarBag = () => {
    modalContenedor.innerHTML = '';
    modalContenedor.style.display = "block";
    const headerModal = document.createElement("div");
    headerModal.className = "header-modal"
    headerModal.innerHTML = `
    <h1 class="header-modal-title">Bag.</h1>
    `;
    modalContenedor.append(headerModal);
    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener('click', () => {
        modalContenedor.style.display = "none";
    });


    headerModal.append(modalButton);

    carrito.forEach((release) => {
        let bagContent = document.createElement("div")
        bagContent.className = "modal-content"
        bagContent.innerHTML = `
    <img src="${release.img}">
    <h3>${release.name}</h3>
    <p>${release.price} $</p>
    `;

    modalContenedor.append(bagContent);
    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "delete-release";
    bagContent.append(eliminar);

    eliminar.addEventListener("click", eliminarRelease)
    });



    const total = carrito.reduce((acc, el) => acc + el.price, 0);
    const totales = document.createElement("div")
    totales.className = "total-content"
    totales.innerHTML= `Total a pagar: ${total} $`;
    modalContenedor.append(totales);
};

verBag.addEventListener("click", llamarBag);

const eliminarRelease = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId != foundId;
    });
    saveLocal();
    llamarBag();
};