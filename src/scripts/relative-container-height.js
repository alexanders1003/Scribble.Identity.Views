$(function() {
    let main = $("#layout-content-container");
    let additionals = $("#layout-content-container-additionals");
    let footer = $("#layout-content-container-footer");

    GetHeight(main, additionals, footer);

    $(window).resize(function() {
        GetHeight(main, additionals, footer);
    });
});

function OnCssLoad() {
    let main = $("#layout-content-container");
    let additionals = $("#layout-content-container-additionals");
    let footer = $("#layout-content-container-footer");

    GetHeight(main, additionals, footer);
}

function GetHeight(main, additionals, footer) {
    main.css({ minHeight: $("#shadow-box-main").height() + 60 });

    if ($("#shadow-box-additionals").length)
        additionals.css({ minHeight: $("#shadow-box-additionals").height() + 40 });
    else
        additionals.css({ display: "none" });

    footer.css({ minHeight: $("#shadow-box-footer").height() });

    $("html").css({ minHeight: main.height() + additionals.height() + footer.height() + 60 });
    $(".circles").css({ minHeight: $("html").height() });
}