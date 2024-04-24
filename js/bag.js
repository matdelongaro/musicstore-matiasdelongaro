const llamarBag = () => {
    modalContenedor.innerHTML = '';
    modalContenedor.style.display = "flex";
    containerTotal.style.display = "block";
    
    const headerModal = document.createElement("div");
    headerModal.className = "header-modal"
    headerModal.innerHTML = `
    <h1 class="header-modal-title">Cart</h1>
    `;
    modalContenedor.append(headerModal);
    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener('click', () => {
        modalContenedor.style.display = "none";
        containerTotal.style.display = "none";
    });


    headerModal.append(modalButton);

    carrito.forEach((release) => {
        let bagContent = document.createElement("div")
        bagContent.className = "modal-content"
        bagContent.innerHTML = `
    <img src="${release.img}">
    <h3>${release.name}</h3>
    <p>${release.price} $</p>
    <span class="delete-release"> ❌ </span>
    `;

    modalContenedor.append(bagContent);
    let eliminar = bagContent.querySelector(".delete-release");

    eliminar.addEventListener("click", () => {
        eliminarRelease(release.id);
    
    });

    
    });

    const total = carrito.reduce((acc, el) => acc + el.price, 0);
    const totales = document.createElement("div")
    totales.className = "total-content"
    totales.innerHTML= `Total a pagar: ${total.toFixed(2)} $`;
    modalContenedor.append(totales);
};

verBag.addEventListener("click", llamarBag);

const eliminarRelease = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId != foundId;
    });
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item removed from Cart.",
        showConfirmButton: false,
        timer: 1500
      });
    saveLocal();
    llamarBag();
};


