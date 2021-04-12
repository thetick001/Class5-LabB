$(document).ready(function () {
    $("input#ljqNum").on("change", ljqRe);
    $("input#jqdNum").on("change", jqdRe);
    $("input#ljqNum").on("change", total);
    $("input#jqdNum").on("change", total);
});

function ljqRe()
{
    let bookP = 39.99;
    let bookUserNum = $("#ljqNum").val();
    let bTotal = bookP * bookUserNum;

    $("p#ljqtotal").text(`Total: ${bTotal}`);
}

function jqdRe()
{
    let doprice = 14.99;
    let donUserNum = $("input#jqdNum").val();
    let dTotal = doprice * donUserNum;
    $("p#jqdtotal").text(`Total: ${dTotal}`);
}

function total()
{
    let bookP = 39.99;
    let bookUserNum = $("#ljqNum").val();
    let bTotal = bookP * bookUserNum;

    let doprice = 14.99;
    let donUserNum = $("input#jqdNum").val();
    let dTotal = doprice * donUserNum;

    let grandtotal = dTotal + bTotal;



    $("p#grandtotal").text(`Grand Total: ${grandtotal.toFixed(2)}`);
}