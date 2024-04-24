
let send = document.getElementById("sendMessage")

  send.addEventListener("click", (send) => {
    const formulario = document.querySelector(".formulario");
    const formularioSend = document.querySelector(".formulario-enviado")
    formulario.style.display = "none";
    formularioSend.style.display = "block";
    send.preventDefault()

    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
  })