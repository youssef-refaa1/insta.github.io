$(document).ready(function() {
    const texts = ["I'm a web developer", "Buld your website with me", "Creat website for your  business" , "Website can boost your  business" , "Convert your imagination to code"]; // Add your texts here
    let index = 0;

    function typeWriter(text, i, callback) {
        if (i < text.length) {
            $("#changeText").append(text.charAt(i));
            i++;
            setTimeout(function() {
                typeWriter(text, i, callback);
            }, 10); // Adjust typing speed here
        } else {
            setTimeout(callback, 2000); // Adjust pause between texts here
        }
    }

    function changeText() {
        $("#changeText").empty();
        typeWriter(texts[index], 0, function() {
            index = (index + 1) % texts.length;
            setTimeout(changeText, 3000); // Change text every 10 seconds
        });
    }

    changeText();

    let enBtn = $('#enLang');
    let arBtn = $('#arLang');
    let text = $('#textAbout');
    let title = $('.aboutTitle')

    enBtn.click(function(){
        arBtn.css('color' , 'rgb(53, 53, 53)')
        enBtn.css('color' , 'rgb(27, 95, 255)')
        text.text("🚀 Welcome to my corner of the web! I'm Youssef Refaat,an Egyptian web developer fueled by creativityand a passion for crafting digital experiences.With over three years of experience in the field, I've honed my skills in bringing ideas to life through sleek and functional websites. Previously, I had the privilege of working on a project for MySchool,a company specializing in book sales, where I played a pivotal role in creating their onlinepresence. Whether it's building from scratch or revamping existing platforms, I thrive on turningconcepts into captivating online realities. Let's collaborate and make your digitalvision a stunning reality!")
        title.text('Let me interduce mysilf')
    });

    arBtn.click(function(){
        enBtn.css('color' , 'rgb(53, 53, 53)')
        arBtn.css('color' , 'rgb(27, 95, 255)')
        text.text("🚀 مرحبًا بك في ركني على الويب! أنا يوسف رفعت، مطور ويب مصري ينطلق بالإبداع وشغف لبناء تجارب رقمية. بخبرة تزيد عن ثلاث سنوات في المجال، لقد عملت على تنمية مهاراتي في تحويل الأفكار إلى حقيقة رقمية، من خلال مواقع الويب الأنيقة والوظيفية. سبق لي أن عملت على مشروع لشركة مدرستي ، شركة تختص في بيع الكتب، حيث لعبت دورًا حاسمًا في إنشاء وجودهم على الإنترنت. سواء كان الأمر ببناء موقع جديد أو تطوير المنصات الحالية، فإنني أزدهر في تحويل الأفكار إلى واقع رقمي مثير. دعنا نتعاون لجعل رؤيتك الرقمية حقيقة مذهلة!");
        title.text('دعني اعرف نفسي')
    })

    /*if(enBtn.click()){

    }

    if(arBtn.click()){

    }*/
});