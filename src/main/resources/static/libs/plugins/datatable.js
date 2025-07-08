var tabelcon;
var tabelcon2;
var tt;
var tabel_budget;
var tabel_transaction;

$(document).ready( function ()
{
    tabel_transaction = $('#tabel_transaction').DataTable({
   "columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],"select": {"style": "multi"},
"sAjaxSource": "/transaction/All",
"scrollX": "200px",
"scrollY": "500px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"searching": false,
"paging": false,
"aoColumns": [
    { "mData": "id_transactions" },            // Sesuai dengan id_company
    { "mData": "budget" },                  // Sesuai dengan name
    { "mData": "amountSpent" },               // Sesuai dengan address
    { "mData": "transaction_date" }  ,                // Sesuai dengan city
    { "mData": "description" }  
]
});
setInterval(function () {
    tabel_transaction.ajax.reload();
}, 3000);
});






//var table1 = $('#tabelspare').DataTable();
//$('#tabelspare tbody').on( 'click','td', function ()
// {
// tablex.search(table1.cell().data()+3).draw();
//});

//$('#tabelspare tbody').on( 'click', 'td', function () {
//
//   alert( tablex.cell().data()+-1);
//} )



//var table = $('#tabel_log_wo_asset').DataTable();
//
//// #myInput is a <input type="text"> element
//$('#kode_asset').on( 'keyup', function ()
// {
//    table.search( this.value ).draw();
//} );

$(document).ready( function ()
{
var table = $('#tabelsafety').DataTable({
   "columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"sAjaxSource": "/SafetyAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_safety"},
{ "mData": "referensi"},
{ "mData": "keterangan"},
{ "mData": "safety_procedure"},
{ "mData": "alat_safety"}
]
});
});

$(document).ready( function ()
{
var tablev = $('#tabelsafety_spare').DataTable({
   "columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"sAjaxSource": "/SafetyAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_safety"},
{ "mData": "referensi"},
{ "mData": "keterangan"},
{ "mData": "safety_procedure"},
{ "mData": "alat_safety"}
]
});

$('#safety_referensi').on( 'keyup click', function ()
 {
    tablev.search( this.value ).draw();
});
$('#safety_referensi').on( 'click', function ()
 {
    tablev.search( this.value ).draw();
} );
});

$(document).ready(function() {
    $('#tabelcon tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    var table = $('#tabelcon').DataTable();

    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );

$(document).ready(function() {
    $('#tabelsal tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    var table = $('#tabelsal').DataTable();

    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );

$(document).ready(function() {
    $('#tabelcamp tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    var table = $('#tabelcamp').DataTable();

    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );


$(document).ready(function() {
    $('#tabeleads tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    var table = $('#tabeleads').DataTable();

    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );

$(document).ready(function() {
    $('#tabelopor tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    var table = $('#tabelopor').DataTable();

    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );

$(document).ready(function() {
    $('#tabelcase tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

    var table = $('#tabelcase').DataTable();

    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );