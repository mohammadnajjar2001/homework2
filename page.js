//تعريف متغيرات
let firstname;
let factor;
let NumberOfProblems;
let result;
let resultuserTorF;

/*
تحجيم ازرار اللعبة عند وضع الماوس عليهم
كان بالامكان عملهم بملف سي اس اس وبطؤيقة ابسط لكن عملتها على سبيل التجربة
*/
function scal(ID){
    document.getElementById(ID).style.scale=1.1;
    }
function not_scal(ID){
        document.getElementById(ID).style.scale=1;
}

//دالة بدء اللعبة
function startgame() {
    //مسح المحتوى القديم لظهور المحتوى الجديد فقط
    document.getElementById('add_ex').innerHTML="";
    document.getElementById('scoreResult').innerHTML ="";
    //جلب القيمة المدخلة للمتغيرات وبناء اللعبة عليها
    firstname = document.getElementById('FirstName').value;
    factor = document.getElementById('Factor').value;
    NumberOfProblems = document.getElementById('NumberOfProblem').value;
    //مصفوفتين الاولى لتخزين النواتج الفعلية , والثانية لتخزين النواتج الدخلة من المستخدم
    result = new Array(NumberOfProblems);
    resultuserTorF = new Array(NumberOfProblems);
    //رسالة تعريفية
    $('<p>you are use name ' + firstname + '</p>').appendTo('#add_ex');
    //فحص العملية ضرب او جمع في حال كانت ضرب تابع هكذا
    if (document.getElementById('operation').value == "Multiply") {
        for (i = 0; i < NumberOfProblems; i++) {
            //تخزين النواتج الفعلية
            result[i] = factor * (i + 1);
            //طباعة العملية الحاسبية وبجانبها صندوق لوضع الاجابة من المستخدم ونزول سطرين
            $('<p class="A">' + factor + 'x' + (i + 1) + '=  </P>').appendTo('#add_ex');
            $('<input class="A" type="number" id="usernumber' + i + '" />').appendTo('#add_ex');
            $('<br/><br/>').appendTo('#add_ex');
        }
    } 
    //في حال كانت العملية المختارة غير ذلك (اي ستكون عملية جمع)
    else {
        for (i = 0; i < NumberOfProblems; i++) {
            result[i] = factor*1 + i + 1;
            $('<p class="A">' + factor + '+' + (i + 1) + '=  </P>').appendTo('#add_ex');
            $('<input class="A" type="number" id="usernumber' + i + '"/>').appendTo('#add_ex');
            $('<br/><br/>').appendTo('#add_ex');
        }
    }
}
//دالة طلب النتيجة
function calculatescore() {
    //متغير لتخزين عدد الاجوبة الصحيحة
    let correctAnswers = 0;
    for (let i = 0; i < NumberOfProblems; i++) {
        //جلب القيم المدخلة من المستخدم واحدة تلو الاخرى
        var userInput = parseInt(document.getElementById('usernumber' + i).value);
        //فحص القيمة المدخلة من المستخدم مع النتيجة الفعلية
        if (userInput === result[i]) {
            //في حال تحقق الشرط قم بزيادة عدد الاجوبة الصحية بمقدار وااحد
            correctAnswers++;
        }    
    }
    //عرض النتيجة عند طلبها
    document.getElementById('scoreResult').innerHTML = 'عدد الإجابات الصحيحة الحالية قبل اعادة بدء اللعبة مرة ثانية : ' + correctAnswers;
}