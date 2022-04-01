$(document).ready(function () {
            let options = {threshold: [0.5] };
    
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation'); 
        elements.each((i, el) => {
            observer.observe(el);
        })
    });

        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('show-animation');
                }
            })
        }

$(document).ready(function () {
            let options1 = {threshold: [0.5] };
    
        let observer1 = new IntersectionObserver(imgEntry, options1);
        let elements1 = $('.badImg'); 
        elements1.each((i, el) => {
            observer1.observe(el);
        })
    });

        function imgEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('black');
                    change.target.src = change.target.dataset.src;
                }
            })
        }





//calculator
$('#type, #design, #adapt').on('change', function(){
    sum()
})

function sum(){
    var type = $('#type').val();
    var design = $('#design').val();
    var adapt = $('#adapt').val();
    
    var sum = Number (type) + Number (design) + Number (adapt);
    $('.span').text(sum + ' рублей');
}
//Увеличение цифр статистики








$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 100 + "px"})
})



















