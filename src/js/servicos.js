const serviceTypes = ["simples", "completo", "impermeabilização", "cristalização"];
const servicePrices = ["50", "70", "90", "120"];
const serviceTypeSelect = document.getElementById("service-type");
const servicePriceInput = document.getElementById("service-price");
const submitBtn = document.getElementById("submitBtn");
const modal = document.getElementById("openModal");
const inputs = document.getElementsByTagName("input");

function showServicePrice() {
    serviceTypeSelect.addEventListener('click', () => {
        switch (serviceTypeSelect.value) {
            case serviceTypes[0]:
                servicePriceInput.textContent = `R$${servicePrices[0]},00`;
                break;
            case serviceTypes[1]:
                servicePriceInput.textContent = `R$${servicePrices[1]},00`;
                break;
            case serviceTypes[2]:
                servicePriceInput.textContent = `R$${servicePrices[2]},00`;
                break;
            case serviceTypes[3]:
                servicePriceInput.textContent = `R$${servicePrices[3]},00`;
                break;
            default:
                servicePriceInput.textContent = `R$${0},00`;;
        }
    });
};

function showModal() {
    const random = Math.floor(1000 + Math.random() * 9000);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    modal.style.display = "block";
    modal.innerHTML = `
        <div class="modal">
            <button class="close__btn" id="closeBtn">X</button>
            <h1>Pedido #${random} solicitado com sucesso!</h1>
            <p>Obrigado por confiar em nossos serviços, em breve entraremos em contato!</p>
        </div>
    `;
    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modal.innerHTML = ``;
    })
}

showServicePrice();
submitBtn.addEventListener("click", () => showModal());