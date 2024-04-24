let send = document.createElement("button");
let form = document.querySelector(".formulario")
send.innerText = "Enviar";
send.className

form.append(send)




  send.addEventListener("click", (send) => {
    const formulario = document.querySelector(".formulario");
    const formularioSend = document.querySelector(".formulario-enviado");
    formulario.style.display = "none";
    formularioSend.style.display = "block";
    send.preventDefault()

    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your request was sent successfully",
        showConfirmButton: false,
        timer: 1500
      });
  })