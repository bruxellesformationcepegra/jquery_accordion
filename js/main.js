// J'ajoute une classe active sur le premier panneau et je montre son texte
$('.accordion-pannel:nth-of-type(1)').addClass('active');
$('.accordion-pannel:nth-of-type(1) .accordion-pannel__bodytxt').show();

// au click sur un titre du panneau ...
$('.accordion-pannel__title').click(function() {
     // Si l'élément a la classe Active, j'exécute les lignes ci-dessous :
    if ($(this).parent('.accordion-pannel').hasClass('active')) {
        $(this).siblings('.accordion-pannel__bodytxt').slideToggle();
        $(this).parent('.accordion-pannel').toggleClass('active');
    // Si l'élément n'a pas la classe active, j'exécute les lignes ci-dessous :
    } else {
        $('.accordion-pannel').removeClass('active');
        $(this).parent('.accordion-pannel').addClass('active');
        $('.accordion-pannel__bodytxt').slideUp();
        $(this).siblings('.accordion-pannel__bodytxt').slideDown();
    }
});










// $('.accordion-pannel:nth-of-type(1) .accordion-pannel__bodytxt').show();

// $('.accordion-pannel__title').click(function () {
//     let cePanneau = $(this).parent('.accordion-pannel');
//     let txtPanneau = $('.accordion-pannel__bodytxt');
//     let txtPanneauFrere = $(this).siblings('.accordion-pannel__bodytxt');
//     if (cePanneau.hasClass('active')) {
//         txtPanneauFrere.slideToggle();
//         cePanneau.toggleClass('active');
//     } else {
//         $('.accordion-pannel').removeClass('active');
//         cePanneau.addClass('active');
//         txtPanneau.slideUp();
//         txtPanneauFrere.slideDown();
//     }
// });