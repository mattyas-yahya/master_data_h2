
 var form_contact = $('#form_contact');
 var form_budget = $('#form_budget');
 var form_company = $('#form_company');
 var form_product = $('#form_product');
var form_transaction=$('#form_transaction');


 $("#form_transaction").on("click", "#tr1", function()
 {
  $.ajax
  ({
  type: "POST",
  url: "/transaction/save",
  data: form_transaction.serialize(),
  cache: false,
  beforeSend: function(data)
  {
  var result = data;
  Sender();
  },
  success: function(data)
  {
  var result = data;
  success();
  },
  complete: function(data)
  {
  var result = data;
  complete();
  },
  error: function(xhr, status, error)
  {
  ERROR();
  }
  });
  return false;
  }); 

$("#form_company").on("click", "#com1", function()
 {
  $.ajax
  ({
  type: "POST",
  url: "/company/save",
  data: form_company.serialize(),
  cache: false,
  beforeSend: function(data)
  {
  var result = data;
  Sender();
  },
  success: function(data)
  {
  var result = data;
  success();
  },
  complete: function(data)
  {
  var result = data;
  complete();
  },
  error: function(xhr, status, error)
  {
  ERROR();
  }
  });
  return false;
  }); 

$("#form_budget").on("click", "#jk1", function()
 {
  $.ajax
  ({
  type: "POST",
  url: "/budget/save",
  data: form_budget.serialize(),
  cache: false,
  beforeSend: function(data)
  {
  var result = data;
  Sender();
  },
  success: function(data)
  {
  var result = data;
  success();
  },
  complete: function(data)
  {
  var result = data;
  complete();
  },
  error: function(xhr, status, error)
  {
  ERROR();
  }
  });
  return false;
  }); 


// $("#form_contact").on("click", "#jk1", function()
//  {
//   $.ajax
//   ({
//   type: "POST",
//   url: "/ContactSave",
//   data: form_contact.serialize(),
//   cache: false,
//   beforeSend: function(data)
//   {
//   var result = data;
//   Sender();
//   },
//   success: function(data)
//   {
//   var result = data;
//   success();
//   },
//   complete: function(data)
//   {
//   var result = data;
//   complete();
//   },
//   error: function(xhr, status, error)
//   {
//   ERROR();
//   }
//   });
//   return false;
//   }); 



function Sender()
{
$("#info").html('Send');
$("#info").addClass("alert alert-success");
$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
}
function success()
{
$("#info").html('success');
$("#info").addClass("alert alert-success");
$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});




}
function complete()
 {
 $("#info").html('complete');
 $("#info").addClass("alert alert-success");
 $("#info").fadeTo(2000, 500).slideUp(500, function()
 {
 $("#info").slideUp(500);
 });
 }
 function ERROR()
  {
  $("#info").html('lengkapi kembali data anda / pastikan tidak salah ketik');
  $("#info").addClass("alert alert-danger");
  $("#info").fadeTo(2000, 500).slideUp(500, function()
  {
  $("#info").slideUp(500);
  });
  }




// $(document).ready(function () {
//     document.getElementById("oprt1").addEventListener("click", function () {
//         var OpportunitiesContainers = document.querySelectorAll('[id^="OpportunitiesContainers_"]');
//         var valuesx = [];

//         for (var i = 0; i < OpportunitiesContainers.length; i++) {
//             var currentContainer = OpportunitiesContainers[i];
//             var uniqueCountx = i + 1; // Perbarui nilai unik berdasarkan indeks
//             var id_opportunities = currentContainer.querySelector("#id_opportunities_" + uniqueCountx);
//             var name = currentContainer.querySelector("#name_" + uniqueCountx);
//             var accounts = currentContainer.querySelector("#accounts_" + uniqueCountx);
//             var stage = currentContainer.querySelector("#stage_" + uniqueCountx);
//             var amounts = currentContainer.querySelector("#amounts_" + uniqueCountx);
//             var close_date = currentContainer.querySelector("#close_date_" + uniqueCountx);
//             var contact = currentContainer.querySelector("#contact_" + uniqueCountx);
//             var lead_source = currentContainer.querySelector("#lead_source_" + uniqueCountx);
//             var description = currentContainer.querySelector("#description_" + uniqueCountx);
//             var item = currentContainer.querySelector("#item_" + uniqueCountx);
//             var qty = currentContainer.querySelector("#qty_" + uniqueCountx);
//             var price = currentContainer.querySelector("#price_" + uniqueCountx);

//             // Pastikan elemen ditemukan sebelum membaca nilai
//             var data_opportunities = {
//                 id_opportunities: id_opportunities ? id_opportunities.value : '',
//                 name: name ? name.value : '',
//                 accounts: accounts ? accounts.value : '',
//                 stage: stage ? stage.value : '',
//                 amounts: amounts ? amounts.value : '',
//                 close_date: close_date ? close_date.value : '',
//                 contact: contact ? contact.value : '',
//                 lead_source: lead_source ? lead_source.value : '',
//                 description: description ? description.value : '',
//                 item: item ? item.value : '',
//                 qty: qty ? qty.value : '',
//                 price: price ? price.value : ''
//             };

//             valuesx.push(data_opportunities);
//         }

//         fetch('/opportunities/SaveAll', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(valuesx)
//         })
//         .then(response => response.text())
//         .then(text => {
//             if (!text) {
//                 throw new Error('Response is empty');
//             }
//             console.log('text :', text);
//             return JSON.parse(text);
//         })
//         .then(result => {
//             // Tampilkan alert sukses
//             var alertElement = document.getElementById('info');
//             alertElement.classList.remove('alert-hidden');

//             // Sembunyikan alert setelah 5 detik
//             setTimeout(function() {
//                 var bsAlert = new bootstrap.Alert(alertElement);
//                 bsAlert.close();
//             }, 5000); // Ganti 5000 dengan waktu dalam milidetik jika diperlukan

//             console.log('Respon dari server:', result);
//         })
//         .catch(error => {
//             // Tampilkan alert kesalahan
//             var alertElement = document.getElementById('info');
//             alertElement.classList.remove('alert-hidden');
//             alertElement.classList.remove('alert-success');
//             alertElement.classList.add('alert-danger');
//             alertElement.querySelector('strong').textContent = 'Error!';
//             alertElement.querySelector('p').textContent = 'Gagal menyimpan data: ' + error.message;

//             // Sembunyikan alert setelah 5 detik
//             setTimeout(function() {
//                 var bsAlert = new bootstrap.Alert(alertElement);
//                 bsAlert.close();
//             }, 5000); // Ganti 5000 dengan waktu dalam milidetik jika diperlukan

//             console.error('Kesalahan:', error);
//         });
//     });
// });
