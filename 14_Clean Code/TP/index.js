async function fetchOrderDetails(orderId, authToken) {
    try {
        const order = await getOrderDetails(orderId, authToken);
        showOrderModal(order, authToken);
    } catch (error) {
        console.error("Failed to fetch order details:", error);
    }
}

async function getOrderDetails(orderId, authToken) {
    const response = await fetch(
        `https://example.com/api/order/${orderId}`,
        {
            headers: {
                Authorization: authToken,
            },
        }
    );

    // Hentikan proses jika server mengembalikan status error
    if (!response.ok) {
        throw new Error("Failed to fetch order details");
    }

    return response.json();
}

function showOrderModal(order, authToken) {
    const orderModal = document.getElementById("orderModal");
    const orderDetailsContainer =
        orderModal.querySelector("#orderDetails");
    const closeButton = orderModal.querySelector(".close");
    const confirmButton =
        orderModal.querySelector("#confirmOrderBtn");

    renderOrderDetails(orderDetailsContainer, order);

    orderModal.style.display = "block";

    closeButton.onclick = () => {
        orderModal.style.display = "none";
    };

    setupConfirmButton(confirmButton, order, authToken);
}

function renderOrderDetails(container, order) {
    container.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Status: ${order.status}</p>
    `;
}

function setupConfirmButton(confirmButton, order, authToken) {
    // Pesanan yang sudah terkirim tidak boleh dikonfirmasi ulang
    if (order.status === "Delivered") {
        confirmButton.style.display = "none";
        return;
    }

    confirmButton.style.display = "block";

    confirmButton.onclick = () => {
        confirmOrder(order.id, authToken);
    };
}