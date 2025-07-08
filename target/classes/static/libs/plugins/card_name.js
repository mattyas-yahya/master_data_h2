document.addEventListener('DOMContentLoaded', function()
{
 
      $.ajax({
          url: "http://localhost:8080/transaction/variance",
          type: "GET",
          dataType: "json",
          success: function (data) {
              let tbody = $("#tabel_variance tbody");
              tbody.empty(); // Kosongkan isi tabel sebelum mengisi ulang
              
              data.forEach((item, index) => {
                  let row = `
                      <tr>
                          <td class="border-bottom-0"><h6 class="fw-semibold mb-0">${index + 1}</h6></td>
                         
                          <td class="border-bottom-0">
                              <p class="mb-0 fw-normal">${item[0]}</p>
                          </td>
                        
                          <td class="border-bottom-0">
                              <h6 class="fw-semibold mb-0 fs-4">Rp${item[1]}</h6>
                          </td>
                          <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-0 fs-4">Rp${item[2]}</h6>
                          <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-0 fs-4">Rp${item[3]}</h6>
                      </td>
                      <td class="border-bottom-0">
                      <h6 class="fw-semibold mb-1">-</h6>
                      <span class="fw-normal">-</span>
                  </td>
                      </tr>
                  `;
                  tbody.append(row);
              });
          },
          error: function (xhr, status, error) {
              console.error("Error fetching transactions:", error);
          }
      });
 


});
    


  let budgetsData = []; // Variabel global untuk menyimpan data budget

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/budget/All')
        .then(response => response.json())
        .then(data => {
            budgetsData = data; // Simpan data ke variabel global

            const container = document.getElementById('budget-cards');
            container.innerHTML = ''; // Kosongkan kontainer sebelum menambahkan elemen baru

            data.forEach(budget => {
                // Format amount dengan pemisah ribuan
                const formattedAmount = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(budget.amount);

                // Buat elemen card secara aman
                const cardDiv = document.createElement('div');
                cardDiv.className = 'col-md-4 mb-4';

                const card = document.createElement('div');
                card.className = 'card shadow-sm';
                card.style.backgroundColor = '#F8F9FA'; // Background abu-abu terang
                card.style.color = '#4A90E2'; // Tulisan biru pastel

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const title = document.createElement('h1');
                title.className = 'card-title mb-1';
                title.style.fontSize = '1.8rem';
                title.style.fontWeight = 'bold';
                title.style.color = '#4A90E2'; // Warna biru pastel
                title.textContent = budget.category;

                const rowDiv = document.createElement('div');
                rowDiv.className = 'row';

                const colLeft = document.createElement('div');
                colLeft.className = 'col-6';
                colLeft.innerHTML = `
                    <p class="card-text" style="color: #4A90E2;"><strong>Amount:</strong> ${formattedAmount}</p>
                    <p class="card-text" style="color: #4A90E2;"><strong>Date:</strong> ${budget.date}</p>
                `;

                const colRight = document.createElement('div');
                colRight.className = 'col-6';
                colRight.innerHTML = `
                    <p class="card-text" style="color: #4A90E2;"><strong>Description:</strong> ${budget.description}</p>
                `;

                // Susun elemen ke dalam card
                rowDiv.appendChild(colLeft);
                rowDiv.appendChild(colRight);
                cardBody.appendChild(title);
                cardBody.appendChild(rowDiv);
                card.appendChild(cardBody);
                cardDiv.appendChild(card);

                // Tambahkan card ke dalam container
                container.appendChild(cardDiv);
            });
        })
        .catch(error => console.error('Error fetching budgets:', error));
});

// 🔍 Event Listener untuk Filter Pencarian berdasarkan Budget Category
document.getElementById('Namex').addEventListener('input', function() 
{
    const searchQuery = this.value.toLowerCase();

    // Pastikan data sudah tersedia sebelum filter
    if (!Array.isArray(budgetsData) || budgetsData.length === 0) {
        console.warn("Data budget belum tersedia.");
        return;
    }

    const filteredBudgets = budgetsData.filter(budget =>
        budget.category.toLowerCase().includes(searchQuery)
    );

    // Panggil ulang fungsi untuk menampilkan budget yang sudah difilter
    displayBudgets(filteredBudgets);
});

// 🔄 Fungsi untuk Menampilkan Budget (Dipanggil Saat Filter Berjalan)
function displayBudgets(data) {
    const container = document.getElementById('budget-cards');
    container.innerHTML = ''; // Kosongkan kontainer sebelum menambahkan elemen baru

    data.forEach(budget => {
        // Format amount dengan pemisah ribuan
        const formattedAmount = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(budget.amount);

        const cardDiv = document.createElement('div');
        cardDiv.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card shadow-sm';
        card.style.backgroundColor = '#F8F9FA'; // Background abu-abu terang
        card.style.color = '#4A90E2'; // Tulisan biru pastel

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h1');
        title.className = 'card-title mb-1';
        title.style.fontSize = '1.8rem';
        title.style.fontWeight = 'bold';
        title.style.color = '#4A90E2';
        title.textContent = budget.category;

        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        const colLeft = document.createElement('div');
        colLeft.className = 'col-6';
        colLeft.innerHTML = `
            <p class="card-text" style="color: #4A90E2;"><strong>Amount:</strong> ${formattedAmount}</p>
            <p class="card-text" style="color: #4A90E2;"><strong>Date:</strong> ${budget.date}</p>
        `;

        const colRight = document.createElement('div');
        colRight.className = 'col-6';
        colRight.innerHTML = `
            <p class="card-text" style="color: #4A90E2;"><strong>Description:</strong> ${budget.description}</p>
        `;

        // Susun elemen ke dalam card
        rowDiv.appendChild(colLeft);
        rowDiv.appendChild(colRight);
        cardBody.appendChild(title);
        cardBody.appendChild(rowDiv);
        card.appendChild(cardBody);
        cardDiv.appendChild(card);

        // Tambahkan card ke dalam container
        container.appendChild(cardDiv);
    });
}

document.addEventListener('DOMContentLoaded', function()
 {
  fetch('http://localhost:8080/transaction/All')
      .then(response => response.json())
      .then(data => {
          const container = document.getElementById('transaction-cards');
          container.innerHTML = ''; // Kosongkan kontainer sebelum menambahkan elemen baru

          // Grupkan data berdasarkan budget dan akumulasikan amountSpent
          const budgetMap = new Map();
          console.log('Data dari API:', data);
          data.forEach(transaction => {
              const budget = transaction.budget;
              const amountSpent = parseFloat(transaction.amountSpent) || 0;

              if (budgetMap.has(budget)) {
                  budgetMap.set(budget, budgetMap.get(budget) + amountSpent);
              } else {
                  budgetMap.set(budget, amountSpent);
              }
          });

          // Buat kartu untuk setiap budget yang sudah terakumulasi amountSpent-nya
          budgetMap.forEach((totalAmount, budget) => {
              // Format total amount dengan pemisah ribuan
              const formattedAmount = new Intl.NumberFormat('id-ID', { 
                  style: 'currency', 
                  currency: 'IDR' 
              }).format(totalAmount);

              // Buat elemen card secara aman
              const cardDiv = document.createElement('div');
              cardDiv.className = 'col-md-4 mb-4';

              const card = document.createElement('div');
              card.className = 'card shadow-sm';
              card.style.backgroundColor = '#F8F9FA'; // Background abu-abu terang
              card.style.color = '#4A90E2'; // Tulisan biru pastel

              const cardBody = document.createElement('div');
              cardBody.className = 'card-body';

              const title = document.createElement('h1');
              title.className = 'card-title mb-1';
              title.style.fontSize = '1.8rem';
              title.style.fontWeight = 'bold';
              title.style.color = '#4A90E2'; // Warna biru pastel
              title.textContent = budget; // Nama Budget

              const amountText = document.createElement('p');
              amountText.className = 'card-text';
              amountText.style.color = '#4A90E2';
              amountText.innerHTML = `<strong>Total Spent:</strong> ${formattedAmount}`;

              // Susun elemen ke dalam card
              cardBody.appendChild(title);
              cardBody.appendChild(amountText);
              card.appendChild(cardBody);
              cardDiv.appendChild(card);

              // Tambahkan card ke dalam container
              container.appendChild(cardDiv);
          });
      })
      .catch(error => console.error('Error fetching transactions:', error));






});
