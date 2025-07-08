$(document).ready(function() {
var uniqueCountz = 1;

$("#copy").click(function (event) {
// document.getElementById("item-form").style.visibility = "visible"; // Menyembunyikan elemen tapi masih mengambil ruang
// Menyembunyikan elemen tapi masih mengambil ruang
event.preventDefault();

console.log("Button clicked");
const originalContainer = document.getElementById("OpportunitiesContainers");
if (!originalContainer) {
console.error("Original container not found");
return;
}
const clone = originalContainer.cloneNode(true);

const uniqueId = "OpportunitiesContainers_" + uniqueCountz;
clone.id = uniqueId;
const form = document.getElementById("form_opportunities");
if (!form) {
console.error("Form not found");
return;
}

form.appendChild(clone);

const inputs = clone.querySelectorAll('input');
inputs.forEach((input) => {
const originalId = input.id;
if (originalId) {
const uniqueInputId = originalId + "_" + uniqueCountz;
input.id = uniqueInputId;
}
});

// Menyembunyikan elemen dengan id "xx" dan "xxx" di dalam clone
const hiddenRow1 = clone.querySelector('#xx');
const hiddenRow2 = clone.querySelector('#xxxx');

if (hiddenRow1) hiddenRow1.style.display = 'none';
if (hiddenRow2) hiddenRow2.style.display = 'block';
// Make input fields within "xx" and "xxx" readonly
if (hiddenRow1) 
{
hiddenRow1.style.display = 'none';
// Set every input inside hiddenRow1 to readonly
hiddenRow1.querySelectorAll('input').forEach((input) => {
input.readOnly = true;
});
}
uniqueCountz++;
console.log("Cloned container added with ID: " + uniqueId);
});
});


$(document).ready(function () {
$("#copy").click(function (event) 
{
console.log("Button clicked!");
});
});

// Fungsi untuk menghapus AdjustmentContainer
$("#remove").click(function (event) 
{
// Mengambil elemen AdjustmentContainer berdasarkan ID
const adjustmentContainerId = $("#form_adjustment").children().last().attr("id");
// Memeriksa apakah elemen AdjustmentContainer ada sebelum menghapusnya
if (adjustmentContainerId) {
// Menghapus elemen AdjustmentContainer
$("#" + adjustmentContainerId).remove();
console.log("Elemen AdjustmentContainer berhasil dihapus.");
} else {
console.log("Elemen AdjustmentContainer tidak ditemukan.");
}
});

$(document).ready(function ()
 {
document.getElementById("oprt1").addEventListener("click", function () {
var OpportunitiesContainers = document.querySelectorAll('[id^="OpportunitiesContainers_"]');
var valuesx = [];

// Iterasi melalui setiap container yang ditemukan
for (var i = 0; i < OpportunitiesContainers.length; i++) {
var currentContainer = OpportunitiesContainers[i];
var uniqueCountx = i + 1; // Perbarui nilai unik berdasarkan indeks

// Ambil elemen-elemen dari container
var id_opportunities = currentContainer.querySelector("#id_opportunities_" + uniqueCountx);
var name = currentContainer.querySelector("#name_" + uniqueCountx);
var accounts = currentContainer.querySelector("#accounts_" + uniqueCountx);
var stage = currentContainer.querySelector("#stage_" + uniqueCountx);
var amounts = currentContainer.querySelector("#amounts_" + uniqueCountx);
var close_date = currentContainer.querySelector("#close_date_" + uniqueCountx);
var contact = currentContainer.querySelector("#contact_" + uniqueCountx);
var lead_source = currentContainer.querySelector("#lead_source_" + uniqueCountx);
var description = currentContainer.querySelector("#description_" + uniqueCountx);
var item = currentContainer.querySelector("#item_" + uniqueCountx);
var qty = currentContainer.querySelector("#qty_" + uniqueCountx);
var price = currentContainer.querySelector("#price_" + uniqueCountx);

// Periksa apakah setiap elemen ditemukan sebelum membaca nilainya
var data_opportunities = {
id_opportunities: id_opportunities ? id_opportunities.value : '',
name: name ? name.value : '',
accounts: accounts ? accounts.value : '',
stage: stage ? stage.value : '',
amounts: amounts ? amounts.value : '',
close_date: close_date ? close_date.value : '',
contact: contact ? contact.value : '',
lead_source: lead_source ? lead_source.value : '',
description: description ? description.value : '',
item: item ? item.value : '',
qty: qty ? qty.value : '',
price: price ? price.value : ''
};

// Tambahkan data dari container ini ke array valuesx
valuesx.push(data_opportunities);
}

// Kirim data ke server
fetch('/opportunities/SaveAll', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(valuesx)
})
.then(response => response.text())
.then(text => {
if (!text) {
throw new Error('Response is empty');
}
console.log('text :', text);
return JSON.parse(text);
})
.then(result => {
// Tampilkan alert sukses
var alertElement = document.getElementById('info');
alertElement.classList.remove('alert-hidden');

// Sembunyikan alert setelah 5 detik
setTimeout(function() {
var bsAlert = new bootstrap.Alert(alertElement);
bsAlert.close();
}, 5000); 

console.log('Respon dari server:', result);
})
.catch(error => {
// Tampilkan alert kesalahan
var alertElement = document.getElementById('info');
alertElement.classList.remove('alert-hidden');
alertElement.classList.remove('alert-success');
alertElement.classList.add('alert-danger');
alertElement.querySelector('strong').textContent = 'Error!';
alertElement.querySelector('p').textContent = 'Gagal menyimpan data: ' + error.message;

// Sembunyikan alert setelah 5 detik
setTimeout(function() {
var bsAlert = new bootstrap.Alert(alertElement);
bsAlert.close();
}, 5000);

console.error('Kesalahan:', error);
});
});
});




document.getElementById('reset').addEventListener('click', function()
{
// Reset semua formulir di dalam elemen dengan class 'form_opportunities'
document.querySelectorAll('.form_opportunities form').forEach(function(form) {
form.reset(); 
// Reset form di dalam setiap elemen form-instance
});
document.getElementById('form_opportunities').reset();
// Refresh halaman setelah semua formulir di-reset
location.reload();
});

$(document).ready(function() {
$('#contact').on('click', function() {
$('#modal_contact').modal('show');
});
});


///sales pipeline copy item////

$(document).ready(function() {
var uniqueCountz = 1;

$("#copy").click(function (event) {
$('#lblead').hide(); // Menyembunyikan semua elemen <h4>
$('#lblead2').hide();  // Menyembunyikan semua elemen <p>

// document.getElementById("item-form").style.visibility = "visible"; // Menyembunyikan elemen tapi masih mengambil ruang
// Menyembunyikan elemen tapi masih mengambil ruang
event.preventDefault();

console.log("Button clicked");
const originalContainer = document.getElementById("SalesPipelineContainer");
if (!originalContainer) {
console.error("Original container not found");
return;
}
const clone = originalContainer.cloneNode(true);

const uniqueId = "SalesPipelineContainer_" + uniqueCountz;
clone.id = uniqueId;
const form = document.getElementById("form_sales_pipeline");
if (!form) {
console.error("Form not found");
return;
}

form.appendChild(clone);

const inputs = clone.querySelectorAll('input');
inputs.forEach((input) => {
const originalId = input.id;
if (originalId) {
const uniqueInputId = originalId + "_" + uniqueCountz;
input.id = uniqueInputId;
}
});

// Menyembunyikan elemen dengan id "xx" dan "xxx" di dalam clone
const hiddenRow1 = clone.querySelector('#xx');
const hiddenRow2 = clone.querySelector('#xxxx');

if (hiddenRow1) hiddenRow1.style.display = 'none';
if (hiddenRow2) hiddenRow2.style.display = 'block';
// Make input fields within "xx" and "xxx" readonly
if (hiddenRow1) 
{
hiddenRow1.style.display = 'none';
// Set every input inside hiddenRow1 to readonly
hiddenRow1.querySelectorAll('input').forEach((input) => {
input.readOnly = true;
});
}
uniqueCountz++;
console.log("Cloned container added with ID: " + uniqueId);
});
});

$(document).ready(function ()
 {
document.getElementById("slsp1").addEventListener("click", function () {
var SalesPipelineContainer = document.querySelectorAll('[id^="SalesPipelineContainer_"]');
var valuesx = [];

// Iterasi melalui setiap container yang ditemukan
for (var i = 0; i < SalesPipelineContainer.length; i++) {
var currentContainer = SalesPipelineContainer[i];
var uniqueCountx = i + 1; // Perbarui nilai unik berdasarkan indeks
 // Perbarui nilai unik berdasarkan indeks

// Ambil elemen-elemen dari container
var id_salespipeline = currentContainer.querySelector("#id_salespipeline_" + uniqueCountx);
var leadName = currentContainer.querySelector("#leadName_" + uniqueCountx);
var contactInfo = currentContainer.querySelector("#contactInfo_" + uniqueCountx);
var industry = currentContainer.querySelector("#industry_" + uniqueCountx);
var transaction_date = currentContainer.querySelector("#transaction_date_" + uniqueCountx);
var leadStatus = currentContainer.querySelector("#leadStatus_" + uniqueCountx);
var opportunityName = currentContainer.querySelector("#opportunityName_" + uniqueCountx);
var opportunityValue = currentContainer.querySelector("#opportunityValue_" + uniqueCountx);
var salesStage = currentContainer.querySelector("#salesStage_" + uniqueCountx);
var estimatedCloseDate = currentContainer.querySelector("#estimatedCloseDate_" + uniqueCountx);
var salesRepresentative = currentContainer.querySelector("#salesRepresentative_" + uniqueCountx);
var notes = currentContainer.querySelector("#notes_" + uniqueCountx);
var item = currentContainer.querySelector("#item_" + uniqueCountx);
var quantity = currentContainer.querySelector("#quantity_" + uniqueCountx);
var estimatedPrice = currentContainer.querySelector("#estimatedPrice_" + uniqueCountx);


// Periksa apakah setiap elemen ditemukan sebelum membaca nilainya
var data_salespipeline = 
{
    id_salespipeline: id_salespipeline ? id_salespipeline.value : '',
    leadName: leadName ? leadName.value : '',
    contactInfo: contactInfo ? contactInfo.value : '',
    industry: industry ? industry.value : '',
    transaction_date: transaction_date ? transaction_date.value : '',
    leadStatus: leadStatus ? leadStatus.value : '',
    opportunityName: opportunityName ? opportunityName.value : '',
    opportunityValue: opportunityValue ? opportunityValue.value : '',
    salesStage: salesStage ? salesStage.value : '',
    estimatedCloseDate: estimatedCloseDate ? estimatedCloseDate.value : '',
    salesRepresentative: salesRepresentative ? salesRepresentative.value : '',
    notes: notes ? notes.value : '',
    item: item ? item.value : '',
    quantity: quantity ? quantity.value : '',
    estimatedPrice: estimatedPrice ? estimatedPrice.value : ''
};

// Tambahkan data dari container ini ke array valuesx
valuesx.push(data_salespipeline);
}

// Kirim data ke server
fetch('/salespipeline/SaveAll', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(valuesx)
})
.then(response => response.text())
.then(text => {
if (!text) {
throw new Error('Response is empty');
}
console.log('text :', text);
return JSON.parse(text);
})
.then(result => {
// Tampilkan alert sukses
var alertElement = document.getElementById('info');
alertElement.classList.remove('alert-hidden');

// Sembunyikan alert setelah 5 detik
setTimeout(function() {
var bsAlert = new bootstrap.Alert(alertElement);
bsAlert.close();
}, 5000); 

console.log('Respon dari server:', result);
})
.catch(error => {
// Tampilkan alert kesalahan
var alertElement = document.getElementById('info');
alertElement.classList.remove('alert-hidden');
alertElement.classList.remove('alert-success');
alertElement.classList.add('alert-danger');
alertElement.querySelector('strong').textContent = 'Error!';
alertElement.querySelector('p').textContent = 'Gagal menyimpan data: ' + error.message;

// Sembunyikan alert setelah 5 detik
setTimeout(function() {
var bsAlert = new bootstrap.Alert(alertElement);
bsAlert.close();
}, 5000);

console.error('Kesalahan:', error);
});
});
});

//////end code///////