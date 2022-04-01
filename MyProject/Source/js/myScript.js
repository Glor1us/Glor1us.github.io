$(document).ready(function () {
            let options = (threshold: [0.5])
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation'); 
        elements.each((i, el) => {
            observer.observe(el);
        });

        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classlist.add('show-animation');

                }
            })
        }




        /*
        project()
        function project() {
            let costT0, costT1, costT2, sum1
            let costD0, costD1, costD2, sum2
            let costA0, costA1, costA2, sum3
            let siteType = prompt ("Расчет стоимости проекта - Тип Сайта (0 - Визитка, 1 - Лендинг, 2 - Онлайн-магазин)")
            if (siteType === '0'){
                costT0 = "6000 rub"
                console.log(costT0)
                sum1 = costT0
            }
            else if (siteType === '1'){
                costT1 = "8000"
                console.log(costT1)
                sum1 = costT1
            }
            else if (siteType === '2'){
                costT2 = "10000"
                console.log(costT2)
                sum1 = costT2
            }
            else {
                alert ("Такого варианта нет")
                project()
                return this;
            };
            /------------------------------------------------------/
                let siteDesign = prompt ("Расчет стоимости проекта - Дизайн Сайта (0 - Обычный, 1 - Простой, 2 - Тяжелый)")
            if (siteDesign === '0'){
                costD0 = "1000"
                console.log(costD0)
                sum2 = costD0
            }
            else if (siteDesign === '1'){
                costD1 = "500"
                console.log(costD1)
                sum2 = costD1
            }
            else if (siteDesign === '2'){
                costD2 = "2000"
                console.log(costD2)
                sum2 = costD2
            }
            else {
                alert ("Такого варианта нет")
                project()
                return this;
            };
            /------------------------------------------------------/
                let siteAdapt = prompt ("Расчет стоимости проекта - Адаптивность (0 - Неадаптивный (Только для ПК), 1 - Адаптивный (Для всех устройств))")
            if (siteAdapt === '0'){
                costA0 = "0"
                console.log(costA0)
                sum3 = costA0
            }
            else if (siteAdapt === '1'){
                costA1 = "2000"
                console.log(costA1)
                sum3 = costA1
            }
            else {
                alert ("Такого варианта нет")
                project()
                return this;
            };
           
                let summ = Number (sum1) + Number (sum2) + Number (sum3)
                console.log(summ)
            
                    console.log(siteType, siteDesign, siteAdapt)
            alert (summ + " рублей будет стоить проект");
            
        } 
        */
