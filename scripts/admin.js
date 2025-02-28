// Fetch and Display Refund Requests
fetch('php/fetch_requests.php')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#requestsTable tbody');
        data.forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.nickname}</td>
                <td>${request.description}</td>
                <td><img src="assets/images/${request.proof}" alt="Proof" width="100"></td>
                <td>${request.status || 'Pending'}</td>
                <td><button onclick="updateStatus(${request.id}, '${request.status}')">Toggle Status</button></td>
            `;
            tableBody.appendChild(row);
        });
    });

// Update Refund Status
function updateStatus(id, status) {
    const newStatus = status === 'Refunded' ? 'Not Refunded' : 'Refunded';
    fetch('php/update_status.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
    }).then(() => location.reload());
}
