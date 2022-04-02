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
            let options1 = {threshold: [0.2] };
    
        let observer1 = new IntersectionObserver(imgEntry, options1);
        let elements1 = $('.badImg'); 
        elements1.each((i, el) => {
            observer1.observe(el);
        })
    });

        function imgEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.src = change.target.dataset.src;
                }
            })
        }





//calculator
$('#type, #design, #adapt').on('change', function(){
    sum();
    sum2();
})

function sum(){
    var type = $('#type').val();
    var design = $('#design').val();
    var adapt = $('#adapt').val();
    
    var sum = Number (type) + Number (design) + Number (adapt);
    $('.span').text(sum + ' рублей');
}
function sum2(){
    var typeB =  $('#type').val();
    var designB = $('#design').val();
    var adaptB = $('#adapt').val();
    
    if (typeB === '6000') {
        typeB = '7';
    }
    else if (typeB === '8000') {
        typeB = '9';
    }
    else if (typeB === '10000') {
        typeB = '11';
    }
    if (designB === '1000') {
        designB = '2';
    }
    else if (designB === '500') {
        designB = '1';
    }
    else if (designB === '2000') {
        designB = '4';
    }
    if (adaptB === '2000') {
        adaptB = '2';
    }
    
    var sum2 = Number (typeB) + Number (designB) + Number (adaptB);
    $('.span1').text(sum2 + ' дней');
}


//Увеличение цифр статистики

var upper_clients = $('#upper_clients').text();
    setInterval (function getMore() {
        upper_clients = Number (upper_clients);
        upper_clients+=1;
        $('#upper_clients').text(upper_clients);
    }, 15000);

var upper_projects = $('#upper_projects').text();
    setInterval (function getMore_projects() {
        upper_projects = Number (upper_projects);
        upper_projects+=1;
        $('#upper_projects').text(upper_projects);
    }, 10000);





//Для якорных ссылок
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 100 + "px"})
})



















