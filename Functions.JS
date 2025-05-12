// Search section

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("input-search");
    searchInput.addEventListener("input", search); 
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            search();
        }
    });
});

function search() {
    const searchInput = document.getElementById("input-search").value.trim().toLowerCase();
    const currentScript = localStorage.getItem("script");
    
    switch(currentScript) {
        case 'CallIssue':
            OpenScriptCallIssue(searchInput);
            break;
        case 'XMention':
            OpenScriptXMention(searchInput);
            break;
        case 'XDirect':
            OpenScriptXDirect(searchInput);
            break;
        case 'InstagramFacebook':
            OpenScriptInstagramFacebook(searchInput);
            break;
        case 'LiveChat':
            OpenScriptLiveChat(searchInput);
            break;
        case 'Email':
            OpenScriptEmail(searchInput);
            break;
        case 'CallIssue':
            OpenScriptCallIssue(searchInput);
            break;
    }
}


// Languages section
function OpenLanguges(){
    const languges = document.getElementById("languges");
    const showLanguges = document.getElementById("show-languges");

    document.addEventListener("click", function(event) {
        if (!languges.contains(event.target) && !languges.contains(event.target)) {
            showLanguges.style.display = "none";
        }
    });

    if (showLanguges.style.display == "block"){
        showLanguges.style.display = "none";
    }
    else{
        showLanguges.style.display = "block";
    }
}

const languges = document.getElementById("languges");
if (localStorage.getItem("lang") === ''){
    localStorage.setItem("lang", 'عربي');
}
languges.innerText = localStorage.getItem("lang") || 'Languages';

function ChangeLanguage(lang){
    const languges = document.getElementById("languges");
    if (lang == "ar"){
        localStorage.setItem("lang", 'عربي');
        languges.innerText = localStorage.getItem("lang");
    }
    else{
        localStorage.setItem("lang", 'English');
        languges.innerText = localStorage.getItem("lang");
    }
    window.location.reload();
}


// Condition section
function OpenConditions(){
    const conditions = document.getElementById("conditions");
    const showConditions = document.getElementById("show-conditions");
    const arrow = document.getElementById("arrow");

    document.addEventListener("click", function(event) {
        if (!conditions.contains(event.target) && !conditions.contains(event.target)) {
            showConditions.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        }
    });

    if (showConditions.style.display == "block"){
        showConditions.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }
    else{
        showConditions.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}

const conditions = document.getElementById("conditions");
if (localStorage.getItem("Conditions") === ''){
    localStorage.setItem("Conditions", 'Positive');
}
conditions.innerText = localStorage.getItem("Conditions") || 'CC';

function ChangeCondition(conditions){
    const conditions_id = document.getElementById("conditions");
    if (conditions == "Positive"){
        localStorage.setItem("Conditions", 'Positive');
        conditions_id.innerText = localStorage.getItem("Conditions");
    }
    else if(conditions == "Neutral"){
        localStorage.setItem("Conditions", 'Neutral');
        conditions_id.innerText = localStorage.getItem("Conditions");
    }
    else if(conditions == "Negative"){
        localStorage.setItem("Conditions", 'Negative');
        conditions_id.innerText = localStorage.getItem("Conditions");
    }else{
        localStorage.setItem("Conditions", 'All');
        conditions_id.innerText = localStorage.getItem("Conditions");
    }
    window.location.reload();
}

// Script section and functions categoryes and scripts
//         <script src="https://cdn.tailwindcss.com"></script>

const emailbtn = document.getElementById("EmailBTN");
const XDirectbtn = document.getElementById("XDirectbtn");
const XMentionbtn = document.getElementById("XMentionbtn");
const InstagramFacebookbtn = document.getElementById("InstagramFacebookbtn");
const LiveChatbtn = document.getElementById("LiveChatbtn");
const CallIssuebtn = document.getElementById("CallIssuebtn");

function ResetButtons(OpenScript){
    if(OpenScript === 'Email'){
        XDirectbtn.classList.remove('bg-gray-200');
        XMentionbtn.classList.remove('bg-gray-200');
        InstagramFacebookbtn.classList.remove('bg-gray-200');
        LiveChatbtn.classList.remove('bg-gray-200');
        CallIssuebtn.classList.remove('bg-gray-200');
    }else if(OpenScript === 'XDirect'){
        emailbtn.classList.remove('bg-gray-200');
        XMentionbtn.classList.remove('bg-gray-200');
        InstagramFacebookbtn.classList.remove('bg-gray-200');
        LiveChatbtn.classList.remove('bg-gray-200');
        CallIssuebtn.classList.remove('bg-gray-200');
    }else if(OpenScript === 'XMention'){
        emailbtn.classList.remove('bg-gray-200');
        XDirectbtn.classList.remove('bg-gray-200');
        InstagramFacebookbtn.classList.remove('bg-gray-200');
        LiveChatbtn.classList.remove('bg-gray-200');
        CallIssuebtn.classList.remove('bg-gray-200');
    }else if(OpenScript === 'InstagramFacebook'){
        emailbtn.classList.remove('bg-gray-200');
        XDirectbtn.classList.remove('bg-gray-200');
        XMentionbtn.classList.remove('bg-gray-200');
        LiveChatbtn.classList.remove('bg-gray-200');
        CallIssuebtn.classList.remove('bg-gray-200');
    }
    else if(OpenScript === 'LiveChat'){
        emailbtn.classList.remove('bg-gray-200');
        XDirectbtn.classList.remove('bg-gray-200');
        XMentionbtn.classList.remove('bg-gray-200');
        InstagramFacebookbtn.classList.remove('bg-gray-200');
        CallIssuebtn.classList.remove('bg-gray-200');
    }else if(OpenScript === 'CallIssue'){
        emailbtn.classList.remove('bg-gray-200');
        XDirectbtn.classList.remove('bg-gray-200');
        XMentionbtn.classList.remove('bg-gray-200');
        InstagramFacebookbtn.classList.remove('bg-gray-200');
        LiveChatbtn.classList.remove('bg-gray-200');
    }
}

if (localStorage.getItem("script") === 'Email'){
    emailbtn.classList.add('bg-gray-200');
    OpenScriptEmail();
}else if(localStorage.getItem("script") === 'XDirect'){
    XDirectbtn.classList.add('bg-gray-200');
    OpenScriptXDirect();
}else if(localStorage.getItem("script") === 'XMention'){
    XMentionbtn.classList.add('bg-gray-200');
    OpenScriptXMention();
}else if(localStorage.getItem("script") === 'InstagramFacebook'){
    InstagramFacebookbtn.classList.add('bg-gray-200');
    OpenScriptInstagramFacebook();
}else if(localStorage.getItem("script") === 'LiveChat'){
    LiveChatbtn.classList.add('bg-gray-200');
    OpenScriptLiveChat();
}else if(localStorage.getItem("script") === 'CallIssue'){
    CallIssuebtn.classList.add('bg-gray-200');
    OpenScriptCallIssue();
}

function OpenScriptEmail(query = '') {
    const emailbtn = document.getElementById("EmailBTN");
    emailbtn.classList.add('bg-gray-200');
    localStorage.setItem("script", 'Email');

    ResetButtons('Email');

    const script_arabic = {
        'أول رد': `حياك الله أ......... ،\nشكراً لتواصلك مع شركة ناقل.\n\nلو تكرمت تزودنا بتفاصيل طلبك أو استفسارك، لمساعدتك بشكل أسرع.\nوفي حال وجود شحنة مع شركة ناقل، فضلاً شاركنا بالبيانات التالية:\nرقم التتبع:\nالاسم الكريم: \nرقم التواصل: \nالعنوان:\n`,
        ' مطابقة البيانات / Matching the data ': `حياك الله أستاذ/ه ..... ،\nشكراً لتواصلك مع شركة ناقل.\n\nلو تكرمت تشاركنا بالبيانات التالية لمساعدتك بشكل أفضل وأسرع\n\nرقم الشحنة:\nالاسم الكريم :\nرقم الهاتف:\nاسم المدينة:\nاسم الحي:\nالعنوان الوطني:\nتفاصيل الطلب- المشكلة:\n`,
        'Tracking / تتبع الشحنة': `أهلاً بك أستاذ/ه ..... ،\nشكراً لتواصلك مع شركة ناقل.\nبخصوص تتبع الشحنة، يرجى العلم بأن شحنتك حالياً متواجدة في ( )، علماً أن الشحنة في طريقها  إلى ( ) وسيتم العمل على توصيلها في أقرب وقت ممكن بإذن الله.\nفي حال وجود إستفسارات أخرى فريقنا بالخدمة.\n\nنتمنى لك يوم سعيد.`,
        'تغيير العنوان/رقم الجوال/ Address/Mobile Change': `أهلاً بك أستاذ/ه ..... ،\nشكراً لتواصلك مع شركة ناقل.\n\nيرجى العلم بأن شحنتك حالياً متواجدة في ( )، ووجهتها النهائية هي ( ).\nبخصوص طلب تغيير رقم الجوال أو العنوان، نرجو منك إرسال المعلومات المسجلة مسبقاً على الشحنة، مع العنوان أو الرقم الجديد.\nعلماً بأن تعديل البيانات قد يؤدي إلى تأخير في تسليم الشحنة.\n\nنتمنى لك يوم سعيد.`,
        'ظهور (لايوجد رد, الهاتف مغلق, عنوان خاطيء) في الانفو تراك عند تتبع الشحنة / No Answer/Mobile Closed/Bad Address ( Info track )': `أهلاً بك أستاذ/ه ..... ،\nشكراً لتواصلك مع شركة ناقل.\n\nشحنتك حالياً متواجدة في ( )، وقد حاول المندوب التواصل معك ولم يتمكن بسبب (عدم الرد / الهاتف مغلق / العنوان غير صحيح).\nنأمل منك تزويدنا بـ رقم الهاتف والعنوان الجديد (المدينة – الحي – الشارع) أو العنوان الوطني حتى نتمكن من التحقق وعمل اللازم.\n\nنتمنى لك يوم سعيد`,
        'الشحنة تم استلامها / Shipment delivered': `أهلاً بك أستاذ/ه ..... ،\nشكراً لتواصلك مع شركة ناقل.\n\nنود إبلاغك بأن شحنتك تم تسليمها إلى ( ) بتاريخ ( ).\nإذا لم تستلمها، نرجو منك تزويدنا بـ اسمك الكامل، رقم الجوال، والعنوان (المدينة – الحي – الشارع) أو العنوان الوطني حتى نتمكن من المتابعة.\n\nنتمنى لك يوم سعيد.`,
        'طلب رفع شكوى / Raise a Complaint':`أهلاً بك أستاذ/ه ..... ،\nنعتذر لإنزعاجك، يرجى تزويدنا برقم تتبع الشحنة وتفاصيل الشكوى من فضلك\nشكراً لتواصلك معنا.`,
        'تم رفع شكوى / Complaint request': `أهلاً بك أستاذ/ه ..... ،\nنأسف على أي إزعاج، تم تسجيل شكواك برقم (#####) والقسم المختص يعمل على حلها حالياً. سنسعى على توصيل شحنتك بأسرع وقت ممكن.\nسيصلك تحديث عبر الرسائل النصية، وبإمكانك متابعة حالة الشكوى من خلال موقع ناقل - تتبع الشكاوى.\n\nنتمنى لك يوم سعيد.`,
        'individual Courier / استفسار مندوب جزئي - التوظيف': `أهلاً بك شريكنا،  للتقديم كمندوب جزئي في شركة ناقل من فضلك زيارة الرابط التالي: https://register.naqelexpress.com\nمع تمنياتنا لك بالتوفيق`,
        'استفسار عن التوظيف/ Career': `أهلا بك أستاذ/ه ....،\nشكراً لإهتمامك بشركة ناقل.\nللإطلاع على الشواغر الوظيفية، يرجى زيارة صفحتنا في لينكدإن : https://ae.linkedin.com/company/naqelexpress\nأو أرسل سيرتك الذاتية مباشرة على الإيميل: Saudi.jobs@naqel.com.sa\n\nمع تمنياتنا لك بالتوفيق.`,
        'رفع طلب / Request': `أهلاً بك أستاذ/ه ....،\nشكراً لتواصلك مع شركة ناقل.\nشحنتك وصلت مستودع ناقل الموجود في منطقتك، وتم رفع طلب توصيلها لك في أقرب وقت ممكن إن شاء الله، وستصلك رسالة نصية عند خروجها للتسليم.\nتتردد في التواصل معنا في حال وجود استفسارات أخرى.\n\nنتمنى لك يوم سعيد.`,
        'طلب تعاقد / New Cooperative or Store': `أهلاً بك أستاذ/ه ....،\nشكراً لتواصلك مع شركة ناقل.\n\nلو تكرمت، نحتاج البيانات التالية للمساعدة:\n- الاسم الكريم:\n- رقم الهاتف:\n- العنوان بالتفصيل:\n- اسم المنشأة ونشاطها:\n- عدد الشحنات المتوقعة شهرياً:\n- السجل التجاري:\n- إذا تم التعاقد مع شركة أخرى من قبل وما اسمها:\n`,
        'Data Registered / الشحنة لم تصل': `أهلاً بك أستاذ/ه ....،\nشكراً لتواصلك مع شركة ناقل.\n الشحنة رقم () لم يتم استلامها بعد، وبمجرد استلامها ستصلك رسالة نصية والتواصل معك بأسرع وقت إن شاء الله.\nويمكنك تتبع شحنتك في أي وقت عبر قنواتنا الرقمية. يومك سعيد`,
        'طلب استرجاع شحنة / Return Shipment': `أهلاً بك أستاذ/ه ..... ،\n
        شكراً لتواصلك مع شركة ناقل.\n\nيرجى العلم أن طلب استرجاع الشحنة يكون عن طريق المتجر المرسل، يرجى التواصل مع المتجر لاكمال طلبك وتزويدك برقم الاسترجاع.\n\nلاتتردد في التواصل معنا في حال وجود إستفسارات أخرى.\n\nنتمنى لك يوم سعيد.`,
        'رقم الشحنة غير صحيح /ً Wrong waybill No.': `أهلاً وسهلاً أستاذ/ة ...،\n
        شكراً لتواصلك مع شركة ناقل.\n\nيُرجى العلم أن رقم الشحنة المرسل غير صحيح أو غير تابع لناقل.\nلمعرفة رقم الشحنة الصحيح أو اسم شركة الشحن، نرجو منك التواصل مع المتجر المرسل، ثم التواصل معنا مجدداً لتزويدك بكافة التفاصيل المتعلقة بالشحنة.\n\nنتمنى لك يوم سعيد.`,
        'إلغاء الشحنة / Cancel the shipment': `أهلاً بك أستاذ/ه ..... ،\nشكراً لتواصلك مع شركة ناقل.\n\nيرجى العلم بأن شحنتك حالياً متواجدة في ( )، ووجهتها النهائية هي ( ).\nبخصوص طلب إلغاء الشحنة، يرجى التواصل مع المتجر المرسل لرفع طلب الإلغاء.\n\nنتمنى لك يوم سعيد.`,
        'استفسارات عن الشحن / Shipping Inquiries':`أهلاً بك أستاذ/ه ..... ،\nشكراً لتواصلك مع شركة ناقل.\nمن فضلك تزويدنا ببيانات الشحنة:\n\n- عدد القطع:\n- وزنها:\n- أبعاد الشحنة "الطول، العرض، الإرتفاع":\n- نوع الشحنة (أوراق ومستندات، صناديق، غيرها):\n- مدينة الإرسال:\n- مدينة الإستلام:\n\nليتم تزويدك بتكاليف الشحن.`,
        'استفسار الشحن الدولي': `أهلاً بك أستاذ/ه ..... ،\nشكراً لتواصلك مع شركة ناقل.\nنعتذر منك، خدمة الشحن الدولي حاليًا غير متاحة.\n`,
        'Returned Shipments (RTO + waybill number) / الشحنات المرتجعة  ': `أهلاً بك أستاذ/ه ..... ،\nشكراً لتواصلك مع شركة ناقل.\nللأسف، تم استرجاع الشحنة إلى المصدر لعدم التمكن من تسليمها لك. وفي حال وجود أي استفسار بخصوصها يرجى التواصل مع الشركة المرسلة.\nتتردد في التواصل معنا في حال وجود استفسارات أخرى.\n\nنتمنى لك يوم سعيد.`,
        'Shipment Not Arrived to the Warehouse /عدم وصول الشحنة للمستودع': `حياك الله أستاذ/ه .....، شكراً لتواصلك معنا.\nشحنتك رقم () تم استلامها من شركة ناقل، لكنها لم تصل للمستودع الموجود في منطقتك. سيتم التواصل معك مجرد وصولها للتسليم بأسرع وقت إن شاء الله. بإمكانك تتبع شحنتك بأي وقت عن طريق موقعنا، تطبيق الجوال، أو المساعد الرقمي.\nإذا عندك أي استفسار ثاني، فريقنا بالخدمة.\n\nنتمنى لك يوم سعيد.`
    };

    const script_english = {
        'أول رد': `Hello Mr./Ms. A........,\nThank you for contacting Naqel Express.\n\nPlease provide us with the details of your request or inquiry to assist you faster.\nIf you have a shipment with Naqel Express, please share the following information:\nTracking Number:\nFull Name:\nContact Number:\nAddress:\n`,
        ' مطابقة البيانات / Matching the data ': `Hello Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\n\nPlease share the following information to assist you better and faster:\n\nShipment Number:\nFull Name:\nPhone Number:\nCity Name:\nDistrict Name:\nNational Address:\nRequest Details - Problem:\n`,
        'Tracking / تتبع الشحنة': `Welcome Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\nRegarding shipment tracking, please note that your shipment is currently in ( ), knowing that the shipment is on its way to ( ) and delivery will be attempted as soon as possible, God willing.\nIf you have any other inquiries, our team is at your service.\n\nHave a nice day.`,
        'تغيير العنوان/رقم الجوال/ Address/Mobile Change': `Welcome Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\n\nPlease note that your shipment is currently in ( ), and its final destination is ( ).\nRegarding the request to change the mobile number or address, please send us the previously registered information on the shipment, along with the new address or number.\nPlease note that modifying the data may lead to a delay in the delivery of the shipment.\n\nHave a nice day.`,
        'ظهور (لايوجد رد, الهاتف مغلق, عنوان خاطيء) في الانفو تراك عند تتبع الشحنة / No Answer/Mobile Closed/Bad Address ( Info track )': `Welcome Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\n\nYour shipment is currently in ( ), and the representative tried to contact you but was unable to due to (no answer / mobile closed / incorrect address).\nWe hope you can provide us with the new phone number and address (city – district – street) or the national address so that we can verify and take the necessary action.\n\nHave a nice day`,
        'الشحنة تم استلامها / Shipment delivered': `Welcome Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\n\nWe would like to inform you that your shipment was delivered to ( ) on ( ).\nIf you have not received it, please provide us with your full name, mobile number, and address (city – district – street) or the national address so that we can follow up.\n\nHave a nice day.`,
        'طلب رفع شكوى / Raise a Complaint': `Welcome Mr./Ms. ..... ,\nWe apologize for the inconvenience. Please provide us with the shipment tracking number and details of the complaint.\nThank you for contacting us.`,
        'تم رفع شكوى / Complaint request': `Welcome Mr./Ms. ..... ,\nWe apologize for any inconvenience. Your complaint has been registered with number (#####), and the concerned department is currently working on resolving it. We will strive to deliver your shipment as soon as possible.\nYou will receive updates via SMS, and you can track the status of the complaint through the Naqel website - Complaint Tracking.\n\nHave a nice day.`,
        'individual Courier / استفسار مندوب جزئي - التوظيف': `Welcome, our partner. To apply as a part-time courier at Naqel Express, please visit the following link: https://register.naqelexpress.com\nWe wish you the best of luck.`,
        'استفسار عن التوظيف/ Career': `Welcome Mr./Ms. ....,\nThank you for your interest in Naqel Express.\nTo view job vacancies, please visit our LinkedIn page: https://ae.linkedin.com/company/naqelexpress\nOr send your CV directly to the email: Saudi.jobs@naqel.com.sa\n\nWe wish you the best of luck.`,
        'رفع طلب / Request': `Welcome Mr./Ms. ....,\nThank you for contacting Naqel Express.\nYour shipment has arrived at the Naqel warehouse in your area, and a delivery request has been raised for you as soon as possible, God willing. You will receive an SMS when it is out for delivery.\nPlease do not hesitate to contact us if you have any further inquiries.\n\nHave a nice day.`,
        'طلب تعاقد / New Cooperative or Store': `Welcome Mr./Ms. ....,\nThank you for contacting Naqel Express.\n\nPlease provide the following information to assist you:\n- Full Name:\n- Phone Number:\n- Detailed Address:\n- Establishment Name and Activity:\n- Expected Number of Shipments per Month:\n- Commercial Registration:\n- If there was a previous contract with another company, what is its name:\n`,
        'Data Registered / الشحنة لم تصل': `Welcome Mr./Ms. ....,\nThank you for contacting Naqel Express.\nShipment number () has not been received yet, and once it is received, you will receive an SMS and we will contact you as soon as possible, God willing.\nYou can track your shipment at any time through our digital channels. Have a nice day.`,
        'طلب استرجاع شحنة / Return Shipment': `Welcome Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\n\nPlease note that the shipment return request must be made through the sending store. Please contact the store to complete your request and provide you with the return number.\n\nPlease do not hesitate to contact us if you have any further inquiries.\n\nHave a nice day.`,
        'رقم الشحنة غير صحيح /ً Wrong waybill No.': `Welcome Mr./Ms. ...,\nThank you for contacting Naqel Express.\n\nPlease note that the sent shipment number is incorrect or does not belong to Naqel.\nTo find out the correct shipment number or the name of the shipping company, please contact the sending store and then contact us again to provide you with all the details related to the shipment.\n\nHave a nice day.`,
        'إلغاء الشحنة / Cancel the shipment': `Welcome Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\n\nPlease note that your shipment is currently in ( ), and its final destination is ( ).\nRegarding the shipment cancellation request, please contact the sending store to raise the cancellation request.\n\nHave a nice day.`,
        'استفسارات عن الشحن / Shipping Inquiries': `Welcome Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\nPlease provide us with the shipment details:\n\n- Number of Pieces:\n- Weight:\n- Shipment Dimensions (Length, Width, Height):\n- Shipment Type (Papers and Documents, Boxes, Others):\n- Sending City:\n- Receiving City:\n\nTo provide you with shipping costs.`,
        'استفسار الشحن الدولي': `Welcome Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\nWe apologize, international shipping service is currently unavailable.\n`,
        'Returned Shipments (RTO + waybill number) / الشحنات المرتجعة  ': `Welcome Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\nUnfortunately, the shipment has been returned to the sender because it could not be delivered to you. If you have any inquiries regarding it, please contact the sending company.\nPlease do not hesitate to contact us if you have any further inquiries.\n\nHave a nice day.`,
        'Shipment Not Arrived to the Warehouse /عدم وصول الشحنة للمستودع': `Welcome Mr./Ms. ....., Thank you for contacting us.\nYour shipment number () has been received from Naqel Express, but it has not yet arrived at the warehouse in your area. You will be contacted as soon as it arrives for delivery as soon as possible, God willing. You can track your shipment at any time through our website, mobile application, or digital assistant.\nIf you have any other inquiries, our team is at your service.\n\nHave a nice day.`
    };

     const script_negative_arabic = {
        'طلب رفع شكوى / Raise a Complaint':`أهلاً بك أستاذ/ه ..... ،\nنعتذر لإنزعاجك، يرجى تزويدنا برقم تتبع الشحنة وتفاصيل الشكوى من فضلك\nشكراً لتواصلك معنا.`,
        'تم رفع شكوى / Complaint request': `أهلاً بك أستاذ/ه ..... ،\nنأسف على أي إزعاج، تم تسجيل شكواك برقم (#####) والقسم المختص يعمل على حلها حالياً. سنسعى على توصيل شحنتك بأسرع وقت ممكن.\nسيصلك تحديث عبر الرسائل النصية، وبإمكانك متابعة حالة الشكوى من خلال موقع ناقل - تتبع الشكاوى.\n\nنتمنى لك يوم سعيد.`,
    }

    const script_negative_english = {
        'طلب رفع شكوى / Raise a Complaint': `Welcome Mr./Ms. ..... ,\nWe apologize for the inconvenience. Please provide us with the shipment tracking number and details of the complaint.\nThank you for contacting us.`,
        'تم رفع شكوى / Complaint request': `Welcome Mr./Ms. ..... ,\nWe apologize for any inconvenience. Your complaint has been registered with number (#####), and the concerned department is currently working on resolving it. We will strive to deliver your shipment as soon as possible.\nYou will receive updates via SMS, and you can track the status of the complaint through the Naqel website - Complaint Tracking.\n\nHave a nice day.`,
    }

    let Language = localStorage.getItem("lang") || '';
    let condition = localStorage.getItem("Conditions") || '';
    let script = '';

    if (Language !== '' && condition !== '') {
        if (Language === 'عربي') {
            if (condition === 'Negative') {
                script = script_negative_arabic;
            } else if (condition === 'All' || condition === 'Positive' || condition === 'Neutral') {
                script = script_arabic;
            }
        } else if (Language === 'English') {
            if (condition === 'Negative') {
                script = script_negative_english;
            } else if (condition === 'All' || condition === 'Positive' || condition === 'Neutral') {
                script = script_english;
            }
        }
    } else if (Language !== '' && condition === '') {
        if (Language === 'عربي') {
            script = script_arabic;
        } else if (Language === 'English') {
            script = script_english;
        }
    } else if (Language === '' && condition !== '') {
        if (condition === 'Negative') {
            script = script_negative_arabic;
        } else {
            script = script_arabic; 
        }
    } else {
        script = script_arabic;
    }
    
    const tbody = document.getElementById("script-table-body");
    tbody.innerHTML = "";

    for (const category in script) {
        const value = script[category];
        const searchText = query.toLowerCase();
        
        if(query === '' || 
           category.toLowerCase().includes(searchText) || 
           value.toLowerCase().includes(searchText)) {
            
            const tr = document.createElement("tr");
            tr.classList.add("hover:bg-gray-50");

            const tdCategory = document.createElement("td");
            tdCategory.className = "px-6 py-4 text-center font-bold align-middle border border-gray-200";
            tdCategory.textContent = category;

            const tdScript = document.createElement("td");
            tdScript.className = "px-6 py-4 whitespace-pre-wrap align-middle border border-gray-200 relative group";

            const isArabic = /[\u0600-\u06FF]/.test(value);

            tdScript.style.direction = isArabic ? "rtl" : "ltr";
            tdScript.style.textAlign = isArabic ? "right" : "left";
            tdScript.textContent = value;

            const copyButton = document.createElement("button");
            copyButton.className = "copy-icon m-10 bg-gray-100 rounded-md transition-all duration-200 ease-in-out";
            copyButton.title = "Copy to clipboard";

            copyButton.style.display = "flex"; 
            copyButton.style.alignItems = "center"; 
            copyButton.style.padding = "0.25rem 0.5rem"; 
            copyButton.style.border = "1px solid #ccc"; 
            copyButton.style.cursor = "pointer"; 
            copyButton.style.borderRadius = "1.25rem"; 

            const copyIcon = document.createElement("img");
            copyIcon.src = "Images/copy.png";
            copyIcon.alt = "Copy";
            copyIcon.style.width = "26px";
            copyIcon.style.height = "26px";
            copyIcon.style.marginRight = "0.25rem"; 

            copyButton.appendChild(copyIcon);

            copyButton.addEventListener("click", (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(value)
                    .then(() => {
                        const originalSrc = copyIcon.src;
                        copyIcon.src = "Images/circle.png"; 
                        copyIcon.className = "w-4 h-4"; 
                        copyButton.classList.add("bg-green-100");
                        setTimeout(() => {
                            copyIcon.src = originalSrc;
                            copyButton.classList.remove("bg-green-100");
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                    });
            });

            tdScript.appendChild(copyButton);
            tr.appendChild(tdCategory);
            tr.appendChild(tdScript);
            tbody.appendChild(tr);
        }
    }
}

// X Direct Messages Scripts
function OpenScriptXDirect(query = '') {
    const XDirectbtn = document.getElementById("XDirectbtn");
    XDirectbtn.classList.add('bg-gray-200');
    localStorage.setItem("script", 'XDirect');

    ResetButtons('XDirect');

    const script_arabic = {
        'أول رد': "حياك الله أ......... ،\nشكراً لتواصلك مع شركة ناقل. لو تكرمت تزودنا بتفاصيل طلبك أو استفسارك، لمساعدتك بشكل أسرع.\nوفي حال وجود شحنة مع شركة ناقل، فضلاً شاركنا بالبيانات التالية:\nرقم التتبع:\nالاسم الكريم: \nرقم التواصل: \nالعنوان:\n\nنقدر تعاونك معنا ونتطلع لخدمتك",
        'نموذج طلب البيانات': "حياك الله أستاذ/ه ..... ، \nشكراً لتواصلك مع شركة ناقل.\n\nلو تكرمت تشاركنا بالبيانات التالية لمساعدتك بشكل أفضل وأسرع\n\nرقم الشحنة:\nالاسم الكريم :\nرقم الهاتف:\nاسم المدينة:\nاسم الحي:\nالعنوان الوطني:\nتفاصيل الطلب- المشكلة:\n\n\nنقدر تعاونك معنا ونتطلع لخدمتك",
        'رفع طلب / Request 1': "حياك الله أستاذ/ه ..... ، شكراً لتواصلك معنا.\nشحنتك وصلت المستودع الموجود في منطقتك، وتم طلب توصيلها لك قريباً. ستصلك رسالة نصية فور خروجها للتسليم.\nإذا عندك أي استفسار ثاني، فريقنا بالخدمة.\n نتمنى لك يوم سعيد.",
        'رفع طلب / Request 2': "حياك الله أستاذ/ة ...، شكراً لتواصلك مع شركة ناقل.\nشحنتك الآن في مستودعاتنا في منطقتك، وتم إبلاغ القسم المختص لتسريع توصيلها لك. سيتم تسليمها لك بأقرب وقت إن شاء الله، وبمجرد خروجها للتسليم، ستصلك رسالة نصية.\nإذا عندك أي استفسار آخر، فريقنا بالخدمة.\nنتمنى لك يوم سعيد.",
        'تصعيد / Escalation': "نعتذر على التأخير، شحنتك تم تصعيدها للقسم المختص لتسريع توصيلها. سيتم التحقق والتواصل معك قريباً لتسليمها بأسرع وقت، طاب يومك.",
        'طلب رفع شكوى / Raise a Complaint':`حياك الله أستاذ/ه ..... ، شكراً لتواصلك معنا.\nنعتذر لإنزعاجك، يرجى تزويدنا برقم تتبع الشحنة وتفاصيل الشكوى من فضلك، طاب يومك.`,
        'رفع شكوى / Complaint Request':`حياك الله أستاذ/ه ..... ، نأسف على أي إزعاج، تم تسجيل شكواك برقم (#####) والقسم المختص يعمل على حلها حالياً. نعمل على توصيل شحنتك بأسرع وقت ممكن.\nسيصلك تحديث عبر الرسائل النصية، وبإمكانك متابعة حالة الشكوى من خلال موقع ناقل - تتبع الشكاوى.`,
        'Data not matching / البيانات غير متطابقة':` حياك الله أستاذ/ه ..... ،  شكراً لتواصلك معنا.\nالمعلومات اللي زودتنا بها غير متطابقة مع البيانات المسجلة على الشحنة. من فضلك، أرسل لنا المعلومات كما هي مسجلة على الشحنة لمطابقتها بشكل صحيح.\nيومك سعيد.`,
        'Shipment Not Arrived to the Warehouse /عدم وصول الشحنة للمستودع':`حياك الله أستاذ/ه .....، شكراً لتواصلك معنا.\nشحنتك رقم () تم استلامها من شركة ناقل، لكنها لم تصل للمستودع الموجود في منطقتك. سيتم التواصل معك مجرد وصولها للتسليم بأسرع وقت إن شاء الله. بإمكانك تتبع شحنتك بأي وقت عن طريق موقعنا، تطبيق الجوال، أو المساعد الرقمي.\nإذا عندك أي استفسار ثاني، فريقنا بالخدمة.\n نتمنى لك يوم سعيد.`,
        'الشحنة خرجت للتسليم / Shipmnt Out for Delivery':`حياك الله أستاذ/ه ..... ، شكراً لتواصلك معنا.\n شحنتك خرجت للتوصيل اليوم، الرجاء التأكد من إبقاء هاتفك متاح للتواصل مع المندوب للتسليم بأسرع وقت ممكن.\nإذا عندك أي استفسار ثاني، فريقنا بالخدمة.\n نتمنى لك يوم سعيد.`,
        'Data Registered / الشحنة لم تصل لشركة ناقل':` حياك الله أستاذ/ه، شكراً لتواصلك معنا. الشحنة رقم () لم يتم استلامها بعد، وبمجرد استلامها بنرسل لك رسالة نصية ونتواصل معك بأسرع وقت إن شاء الله.\nويمكنك تتبع شحنتك في أي وقت عبر قنواتنا الرقمية. يومك سعيد  `,
        'Change Address / Phone Number - تعديل بيانات الشحنة':`حياك الله أستاذ/ه ..... ،  شكراً لتواصلك معنا،  لتغيير (العنوان/ رقم الهاتف) بشكل صحيح، من فضلك تزودنا بالمعلومات المسجلة على الشحنة، بالإضافة إلى العنوان ورقم التواصل الجديد. نسعد بخدمتك دائماً.`,
        'Held by Customs / الشحنة محتجزة في الجمارك':`حياك الله أستاذ/ه ..... ، شكراً لتواصلك مع ناقل. شحنتك حاليًا في المطار، من فضلك تزودنا بالاسم الثلاثي، رقم الجوال، ورقم الهوية الوطنية لإتمام الإجراءات.`,
        'No Scan / لا يوجد بيانات على الشحنة في الانفوتراك':`حياك الله أستاذ/ه .....، شكراً لتواصلك معنا، الشحنة رقم () ما لها أي بيانات مسجلة بالنظام حتى الآن، وهذا ممكن يعني إن رقم التتبع غير صحيح وتحتاج التأكد من الشركة المرسلة، أو إن الشحنة لم تستلمها ناقل حتى الآن.\nوإذا تم استلام الشحنة، ستصلك رسالة نصية من ناقل.\n \nنتمنى لك يوم سعيد.`,
        'رمز التسليم /OTP':`حياك الله أستاذ/ه ..... ، شكراً لتواصلك معنا. رمز التسليم يتم تسليمه للمندوب عند وصوله لضمان تأكيد تسليم الشحنة.\nلو عندك أي استفسار إضافي، فريقنا بالخدمة.\n \nنتمنى لك يوم سعيد.`,
        'الشحنات المرتجعة / RTO Shipment':`حياك الله أستاذ/ه ..... ، شكراً لتواصلك معنا. للأسف، تم استرجاع الشحنة إلى المصدر. يرجى التواصل مع الشركة المرسلة في حال وجود أي استفسار بخصوصها.إذا عندك أي استفسار ثاني، فريقنا بالخدمة.\n\nنتمنى لك يوم سعيد.`,
        'تم تسليم الشحنة / Shipment Delivered':` حياك الله أستاذ/ه، شكراً لتواصلك معنا. من الواضح أن الشحنة تم استلامها من قبل (). فضلًا تتأكد من ذلك، وإذا لم يتم استلامها، نرجو إبلاغنا حالاً للتأكد وعمل اللازم.\nإذا عندك أي استفسار ثاني، فريقنا بالخدمة.\n\nنتمنى لك يوم سعيد.`,
        'تحديث حالة الشحنة ومكان محطة الطرود':`حياك الله عميلنا العزيز. شكراً لتواصلك معنا.\nشحنتك الآن جاهزة للاستلام في محطة طرود (....... - اسم المدينة).\nيمكنك استلامها من المحطة خلال 3 أيام لتجنب إرجاعها للمستودع.\nإذا عندك أي استفسار، فريقنا بالخدمة.\n`,
        'طلب محطة طرود':`حياك الله عميلنا العزيز، شكراً لتواصلك معنا.\nمن فضلك تزويدنا بعنوان محطة الطرود التي ترغب باستلام الشحنة منها.`,
        'The Customer don’t have the shipment number / لا يوجد رقم شحنة':`حياك الله أستاذ/ه ..... ، شكراً لتواصلك معنا. لمعرفة رقم الشحنة تواصل مع الشركة المرسلة، والتواصل معنا مرة أخرى لتزويدك بتفاصيل الشحنة.\n إذا عندك أي استفسار ثاني، فريقنا بالخدمة.\n نتمنى لك يوم سعيد.\n`,
        'إغلاق 1/ Closure':`أنا بالخدمة! فيه شيء ثاني أقدر أساعدك فيه؟`,
        'إغلاق 2/ Closure':`سعدنا بخدمتك! شكراً لتواصلك مع ناقل، يومك سعيد.`,
        'شحنة ارجاع (سبل )':`حياك الله عميلنا العزيز، الإرجاع يتم عبر فروع سبل (البريد السعودي).\nيرجى الضغط على الرابط المرسل لك، واختيار أقرب فرع، ثم التوجه لتسليم الطرد لهم.\nيومك سعيد! `,
        'استفسارات عن تكاليف الشحن / Shipping Inquiries':`حياك الله أستاذ/ه ..... ، شكراً لتواصلك معنا.\n من فضلك تزويدنا ببيانات الشحنة:\n- عدد القطع:\n- وزنها:\n- أبعاد الشحنة "الطول، العرض، الإرتفاع":\n- نوع الشحنة (أوراق ومستندات، صناديق، غيرها):\n- مدينة الإرسال:\n- مدينة الإستلام:\nليتم تزويدك بتكاليف الشحن.\nإذا عندك أي استفسار ثاني، فريقنا بالخدمة. نتمنى لك يوم سعيد.`,
        'استفسار الشحن الدولي':`حياك الله أستاذ/هـ ..... ، شكراً لتواصلك معنا.\nنعتذر منك، خدمة الشحن الدولي حاليًا غير متاحة.\nإذا عندك أي استفسار ثاني، فريقنا بالخدمة. نتمنى لك يوم سعيد.\n`,
        'استفسار عن التوظيف/ Career':`حياك الله،\n شكراً لإهتمامك بشركة ناقل.\nللإطلاع على الشواغر الوظيفية، يرجى زيارة صفحتنا في لينكدإن : https://ae.linkedin.com/company/naqelexpress\n أو أرسل سيرتك الذاتية مباشرة على الإيميل: Saudi.jobs@naqel.com.sa \n مع تمنياتنا لك بالتوفيق.\n`,
        'individual Courier / استفسار مندوب جزئي - التوظيف':`حياك الله شريكنا،  للتقديم كمندوب جزئي في شركة ناقل من فضلك زيارة الرابط التالي: https://register.naqelexpress.com\n مع تمنياتنا لك بالتوفيق`,
        'إستفسار مندوب جزئي / Courier Inquiry':`حياك الله شريكنا العزيز،\nللتأكد وعمل اللازم من الفريق المختص، من فضلك التواصل عبر الواتساب: 966506602898+.\nكما يمكنك مراجعة الرابط التالي للمساعدة: https://t.me/NaqelCBUIND.\nشكراً لتواصلك معنا ونتمنى لك يوماً سعيداً.\n`,
        'استفسار مندوب جزئي - عن حالة طلب  التقديم':`حياك الله شريكنا العزيز،\nشكراً لتواصلك مع ناقل.\nفي حال انطباق الشروط وتوفر الشواغر، سيتم التواصل معك من القسم المختص.\nنتمنى لك النجاح والتوفيق.\n`,
        'رفع طلب فارما / Pharma Request':`حياك الله أستاذ/ه ..... ، شكراً لتواصلك معنا. تم إرسال بيانات الشحنة () للقسم المختص، وراح يتم التواصل معك بأقرب وقت للتسليم بإذن الله.\nإذا عندك أي استفسار ثاني، فريقنا بالخدمة.\n نتمنى لك يوم سعيد.\n`,
        'طلب تعاقد / New Cooperative or Store':`حياك الله أستاذ/ة ...، شكراً لتواصلك مع ناقل. لو تكرمت، نحتاج البيانات التالية للمساعدة:\n- الاسم الكريم:\n- رقم الهاتف:\n- العنوان بالتفصيل:\n- اسم المنشأة ونشاطها:\n- عدد الشحنات المتوقعة شهرياً:\n- السجل التجاري:\n- إذا تم التعاقد مع شركة أخرى من قبل وما اسمها:\n نسعد بخدمتك دائماً.\n`,
        'استفسار الفروع ':`حياك الله، شكراً لتواصلك مع شركة ناقل.\nيرجى العلم أن الفروع حالياً مغلقة، وإذا تحتاج أي مساعدة إضافية، فريقنا بالخدمة. نتمنى لك يوم سعيد.`,
    };

    const script_english = {
        'أول رد': "Hello Mr./Ms. A........,\nThank you for contacting Naqel Express. Please provide us with the details of your request or inquiry to assist you faster.\nIf you have a shipment with Naqel Express, please share the following information:\nTracking Number:\nFull Name:\nContact Number:\nAddress:\n\nWe appreciate your cooperation and look forward to serving you.",
        'نموذج طلب البيانات': "Hello Mr./Ms. ..... ,\nThank you for contacting Naqel Express.\n\nPlease share the following information to assist you better and faster:\n\nShipment Number:\nFull Name:\nPhone Number:\nCity Name:\nDistrict Name:\nNational Address:\nRequest Details - Problem:\n\n\nWe appreciate your cooperation and look forward to serving you.",
        'رفع طلب / Request 1': "Hello Mr./Ms. ..... , Thank you for contacting us.\nYour shipment has arrived at the warehouse in your area, and delivery has been requested for you soon. You will receive an SMS as soon as it is out for delivery.\nIf you have any other inquiries, our team is at your service.\nHave a nice day.",
        'رفع طلب / Request 2': "Hello Mr./Ms. ...., Thank you for contacting Naqel Express.\nYour shipment is now in our warehouses in your area, and the concerned department has been informed to expedite its delivery to you. It will be delivered to you as soon as possible, God willing, and once it is out for delivery, you will receive an SMS.\nIf you have any other inquiries, our team is at your service.\nHave a nice day.",
        'تصعيد / Escalation': "We apologize for the delay. Your shipment has been escalated to the concerned department to expedite its delivery. We will verify and contact you soon to deliver it as quickly as possible. Have a good day.",
        'طلب رفع شكوى / Raise a Complaint': `Hello Mr./Ms. ..... , Thank you for contacting us.\nWe apologize for the inconvenience. Please provide us with the shipment tracking number and details of the complaint. Have a good day.`,
        'رفع شكوى / Complaint Request': `Hello Mr./Ms. ..... , We apologize for any inconvenience. Your complaint has been registered with number (#####), and the concerned department is currently working on resolving it. We are working to deliver your shipment as soon as possible.\nYou will receive updates via SMS, and you can track the status of the complaint through the Naqel website - Complaint Tracking.`,
        'Data not matching / البيانات غير متطابقة': `Hello Mr./Ms. ..... , Thank you for contacting us.\nThe information you provided does not match the data registered on the shipment. Please send us the information as it is registered on the shipment for correct matching.\nHave a nice day.`,
        'Shipment Not Arrived to the Warehouse /عدم وصول الشحنة للمستودع': `Hello Mr./Ms. ....., Thank you for contacting us.\nYour shipment number () has been received from Naqel Express, but it has not yet arrived at the warehouse in your area. You will be contacted as soon as it arrives for delivery as soon as possible, God willing. You can track your shipment at any time through our website, mobile application, or digital assistant.\nIf you have any other inquiries, our team is at your service.\nHave a nice day.`,
        'الشحنة خرجت للتسليم / Shipmnt Out for Delivery': `Hello Mr./Ms. ..... , Thank you for contacting us.\nYour shipment is out for delivery today. Please make sure to keep your phone available to communicate with the representative for delivery as soon as possible.\nIf you have any other inquiries, our team is at your service.\nHave a nice day.`,
        'Data Registered / الشحنة لم تصل لشركة ناقل': `Hello Mr./Ms., Thank you for contacting us. Shipment number () has not been received yet, and once it is received, we will send you an SMS and contact you as soon as possible, God willing.\nYou can track your shipment at any time through our digital channels. Have a nice day.`,
        'Change Address / Phone Number - تعديل بيانات الشحنة': `Hello Mr./Ms. ..... , Thank you for contacting us. To correctly change the (address/phone number), please provide us with the information registered on the shipment, in addition to the new address and contact number. We are always happy to serve you.`,
        'Held by Customs / الشحنة محتجزة في الجمارك': `Hello Mr./Ms. ..... , Thank you for contacting Naqel. Your shipment is currently at the airport. Please provide us with your full name, mobile number, and national ID number to complete the procedures.`,
        'No Scan / لا يوجد بيانات على الشحنة في الانفوتراك': `Hello Mr./Ms. ....., Thank you for contacting us. Shipment number () does not have any data registered in the system yet. This may mean that the tracking number is incorrect and you need to verify it with the sending company, or that Naqel has not received the shipment yet.\nIf the shipment has been received, you will receive an SMS from Naqel.\nHave a nice day.`,
        'رمز التسليم /OTP': `Hello Mr./Ms. ..... , Thank you for contacting us. The delivery code is given to the representative upon arrival to ensure confirmation of shipment delivery.\nIf you have any additional inquiries, our team is at your service.\nHave a nice day.`,
        'الشحنات المرتجعة / RTO Shipment': `Hello Mr./Ms. ..... , Thank you for contacting us. Unfortunately, the shipment has been returned to the sender. Please contact the sending company if you have any inquiries regarding it. If you have any other inquiries, our team is at your service.\n\nHave a nice day.`,
        'تم تسليم الشحنة / Shipment Delivered': `Hello Mr./Ms., Thank you for contacting us. It appears that the shipment has been received by (). Please confirm this, and if it has not been received, please inform us immediately for verification and necessary action.\nIf you have any other inquiries, our team is at your service.\n\nHave a nice day.`,
        'تحديث حالة الشحنة ومكان محطة الطرود': `Hello dear customer. Thank you for contacting us.\nYour shipment is now ready for pickup at the parcel station (....... - city name).\nYou can pick it up from the station within 3 days to avoid its return to the warehouse.\nIf you have any inquiries, our team is at your service.`,
        'طلب محطة طرود': `Hello dear customer, Thank you for contacting us.\nPlease provide us with the address of the parcel station you wish to pick up the shipment from.`,
        'The Customer don’t have the shipment number / لا يوجد رقم شحنة': `Hello Mr./Ms. ..... , Thank you for contacting us. To find out the shipment number, contact the sending company and then contact us again to provide you with the shipment details.\nIf you have any other inquiries, our team is at your service.\nHave a nice day.\n`,
        'إغلاق 1/ Closure': `I'm at your service! Is there anything else I can help you with?`,
        'إغلاق 2/ Closure': `We were pleased to serve you! Thank you for contacting Naqel, have a nice day.`,
        'شحنة ارجاع (سبل )': `Hello dear customer, returns are made through SBL (Saudi Post) branches.\nPlease click on the link sent to you, choose the nearest branch, and then go to deliver the package to them.\nHave a nice day! `,
        'استفسارات عن تكاليف الشحن / Shipping Inquiries': `Hello Mr./Ms. ..... , Thank you for contacting us.\nPlease provide us with the shipment details:\n- Number of Pieces:\n- Weight:\n- Shipment Dimensions (Length, Width, Height):\n- Shipment Type (Papers and Documents, Boxes, Others):\n- Sending City:\n- Receiving City:\nTo provide you with shipping costs.\nIf you have any other inquiries, our team is at your service. Have a nice day.`,
        'استفسار الشحن الدولي': `Hello Mr./Ms. ..... , Thank you for contacting us.\nWe apologize, international shipping service is currently unavailable.\nIf you have any other inquiries, our team is at your service. Have a nice day.\n`,
        'استفسار عن التوظيف/ Career': `Hello,\nThank you for your interest in Naqel Express.\nTo view job vacancies, please visit our LinkedIn page: https://ae.linkedin.com/company/naqelexpress\nOr send your CV directly to the email: Saudi.jobs@naqel.com.sa\nWe wish you the best of luck.\n`,
        'individual Courier / استفسار مندوب جزئي - التوظيف': `Hello our partner, to apply as a part-time courier at Naqel Express, please visit the following link: https://register.naqelexpress.com\nWe wish you the best of luck`,
        'إستفسار مندوب جزئي / Courier Inquiry': `Hello dear partner,\nTo verify and take the necessary action from the concerned team, please contact us via WhatsApp: +966506602898.\nYou can also review the following link for assistance: https://t.me/NaqelCBUIND.\nThank you for contacting us and have a nice day.\n`,
        'استفسار مندوب جزئي - عن حالة طلب  التقديم': `Hello dear partner,\nThank you for contacting Naqel.\nIf the conditions apply and vacancies are available, you will be contacted by the concerned department.\nWe wish you success and good luck.\n`,
        'رفع طلب فارما / Pharma Request': `Hello Mr./Ms. ..... , Thank you for contacting us. The shipment details () have been sent to the concerned department, and you will be contacted as soon as possible for delivery, God willing.\nIf you have any other inquiries, our team is at your service.\nHave a nice day.\n`,
        'طلب تعاقد / New Cooperative or Store': `Hello Mr./Ms. ..., Thank you for contacting Naqel. Please provide the following information to assist you:\n- Full Name:\n- Phone Number:\n- Detailed Address:\n- Establishment Name and Activity:\n- Expected Number of Shipments per Month:\n- Commercial Registration:\n- If there was a previous contract with another company, what is its name:\nWe are always happy to serve you.\n`,
        'استفسار الفروع ': `Hello, thank you for contacting Naqel Express.\nPlease note that the branches are currently closed, and if you need any further assistance, our team is at your service. Have a nice day.`
    };

    const script_negative_arabic = {
        'تصعيد / Escalation': "نعتذر على التأخير، شحنتك تم تصعيدها للقسم المختص لتسريع توصيلها. سيتم التحقق والتواصل معك قريباً لتسليمها بأسرع وقت، طاب يومك.",
        'طلب رفع شكوى / Raise a Complaint':`حياك الله أستاذ/ه ..... ، شكراً لتواصلك معنا.\nنعتذر لإنزعاجك، يرجى تزويدنا برقم تتبع الشحنة وتفاصيل الشكوى من فضلك، طاب يومك.`,
        'رفع شكوى / Complaint Request':`حياك الله أستاذ/ه ..... ، نأسف على أي إزعاج، تم تسجيل شكواك برقم (#####) والقسم المختص يعمل على حلها حالياً. نعمل على توصيل شحنتك بأسرع وقت ممكن.\nسيصلك تحديث عبر الرسائل النصية، وبإمكانك متابعة حالة الشكوى من خلال موقع ناقل - تتبع الشكاوى.`,
    }

    const script_negative_english = {
        'تصعيد / Escalation': "We apologize for the delay. Your shipment has been escalated to the concerned department to expedite its delivery. We will verify and contact you soon to deliver it as quickly as possible. Have a good day.",
        'طلب رفع شكوى / Raise a Complaint': `Hello Mr./Ms. ..... , Thank you for contacting us.\nWe apologize for the inconvenience. Please provide us with the shipment tracking number and details of the complaint. Have a good day.`,
        'رفع شكوى / Complaint Request': `Hello Mr./Ms. ..... , We apologize for any inconvenience. Your complaint has been registered with number (#####), and the concerned department is currently working on resolving it. We are working to deliver your shipment as soon as possible.\nYou will receive updates via SMS, and you can track the status of the complaint through the Naqel website - Complaint Tracking.`,
    }

    //        


    let Language = localStorage.getItem("lang") || '';
    let condition = localStorage.getItem("Conditions") || '';
    let script = '';

    if (Language !== '' && condition !== '') {
        if (Language === 'عربي') {
            if (condition === 'Negative') {
                script = script_negative_arabic;
            } else if (condition === 'All' || condition === 'Positive' || condition === 'Neutral') {
                script = script_arabic;
            }
        } else if (Language === 'English') {
            if (condition === 'Negative') {
                script = script_negative_english;
            } else if (condition === 'All' || condition === 'Positive' || condition === 'Neutral') {
                script = script_english;
            }
        }
    } else if (Language !== '' && condition === '') {
        if (Language === 'عربي') {
            script = script_arabic;
        } else if (Language === 'English') {
            script = script_english;
        }
    } else if (Language === '' && condition !== '') {
        if (condition === 'Negative') {
            script = script_negative_arabic;
        } else {
            script = script_arabic; 
        }
    } else {
        script = script_arabic;
    }

    const tbody = document.getElementById("script-table-body");
    tbody.innerHTML = "";

    for (const category in script) {
        const value = script[category];
        const searchText = query.toLowerCase();
        
        if(query === '' || 
           category.toLowerCase().includes(searchText) || 
           value.toLowerCase().includes(searchText)) {
            
            const tr = document.createElement("tr");
            tr.classList.add("hover:bg-gray-50");

            const tdCategory = document.createElement("td");
            tdCategory.className = "px-6 py-4 text-center font-bold align-middle border border-gray-200";
            tdCategory.textContent = category;

            const tdScript = document.createElement("td");
            tdScript.className = "px-6 py-4 whitespace-pre-wrap align-middle border border-gray-200 relative group";

            const isArabic = /[\u0600-\u06FF]/.test(value);

            tdScript.style.direction = isArabic ? "rtl" : "ltr";
            tdScript.style.textAlign = isArabic ? "right" : "left";
            tdScript.textContent = value;

            const copyButton = document.createElement("button");
            copyButton.className = "copy-icon m-10 bg-gray-100 rounded-md transition-all duration-200 ease-in-out";
            copyButton.title = "Copy to clipboard";

            copyButton.style.display = "flex"; 
            copyButton.style.alignItems = "center"; 
            copyButton.style.padding = "0.25rem 0.5rem"; 
            copyButton.style.border = "1px solid #ccc"; 
            copyButton.style.cursor = "pointer"; 
            copyButton.style.borderRadius = "1.25rem"; 

            const copyIcon = document.createElement("img");
            copyIcon.src = "Images/copy.png";
            copyIcon.alt = "Copy";
            copyIcon.style.width = "26px";
            copyIcon.style.height = "26px";
            copyIcon.style.marginRight = "0.25rem"; 

            copyButton.appendChild(copyIcon);

            copyButton.addEventListener("click", (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(value)
                    .then(() => {
                        const originalSrc = copyIcon.src;
                        copyIcon.src = "Images/circle.png"; 
                        copyIcon.className = "w-4 h-4"; 
                        copyButton.classList.add("bg-green-100");
                        setTimeout(() => {
                            copyIcon.src = originalSrc;
                            copyButton.classList.remove("bg-green-100");
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                    });
            });

            tdScript.appendChild(copyButton);
            tr.appendChild(tdCategory);
            tr.appendChild(tdScript);
            tbody.appendChild(tr);
        }
    }
}

function OpenScriptXMention(query = '') {
    const XMentionbtn = document.getElementById("XMentionbtn");
    XMentionbtn.classList.add('bg-gray-200');
    localStorage.setItem("script", 'XMention');

    ResetButtons('XMention');

    const script_arabic = {
        'تعليق سلبي -Negative Mention Feedback - 1':"نعتذر عن أي تجربة غير مرضية واجهتك.\nلو تكرمت تتفضل بالتواصل معنا عبر الخاص لحل مشكلتك بشكل أسرع. 🙏🏼\n",
        'تعليق سلبي -Negative Mention Feedback - 2':"نعتذر منك ويؤسفنا ماحدث ، فضلاً تواصل معنا عبر الخاص و زودنا بالبيانات📩، نتطلع لخدمتك.",
        'تعليق سلبي -Negative Mention Feedback - 3':"عميلنا العزيز، الرجاء توضيح التفاصيل اللي واجهتك عبر الخاص حتى نتمكن من خدمتك بشكل أفضل 📩.\nرضاكم هو هدفنا. \n",
        '1 + Positive Mention Feedback - تعليق ايجابي':"شكراً  على كلماتك الطيبة! يسعدنا معرفة أنك راضٍ عن تجربتك معنا..",
        '2 + Positive Mention Feedback - تعليق ايجابي':"سعداء أن تجربتك مع ناقل كانت مميزة! شكراً لملاحظاتك اللي تساعدنا للاستمرار في تقديم الأفضل.",
        '3 + Positive Mention Feedback - تعليق ايجابي': "يسعدنا رضاك الذي يحفزنا للإستمرار بتقديم المزيد بإذن الله، يومك سعيد..",
        'General Inquiries or Suggestions استفسار أو اقتراح عام': "شكرًا لإطلاعنا، يرجى مشاركتنا إذا كان هناك أي اقتراح أو ملاحظة لتحسين خدماتنا، ثقتكم محل اهتمامنا.",
        'Mention to NAQELexpr / NaqelHelp': "أهلاً بك أستاذ/ه ..... \n  شكراً لتواصلك مع شركة ناقل، يرجى التواصل معنا عبر حساب ناقل لخدمة العملاء حتى نتمكن من مساعدتك بشكل أفضل https://twitter.com/messages/compose?recipient_id=833562173196664833%D8%8C  \n              نتمنى لك يوم سعيد.",
        'Handover SPL shipments (Complaint) مناولة شحناتSPL (شكوى) ': "حياك الله، نعتذر منك وملاحظاتك تهمنا. زملاؤنا في @SPL_Care جاهزين لخدمتك وتقديم الدعم اللي تحتاجه.",
        'Handover SPL shipments (Inquiry) مناولة شحناتSPL (استفسار) ': "شكرا لتواصلك معنا، زملاؤنا في @SPL_CARE جاهزين لخدمتك وتقديم الدعم اللي تحتاجه.                        \n",
        'تم الرد بالفعل عبر الرسائل المباشرة 1': "حياك الله، تم الرد على استفسارك عبر الخاص 📩 إذا احتجت أي مساعدة إضافية، فريقنا بالخدمة. طاب يومك.",
        'تم الرد بالفعل عبر الرسائل المباشرة 2': "شكراً لتواصلك معنا، تم تزويدك بالتفاصيل عبر الخاص 📩 إذا عندك أي استفسار إضافي، فريقنا بالخدمة دائماً. يومك سعيد.",
        'تم الرد بالفعل عبر الرسائل المباشرة 3': "تم التعامل مع استفسارك على الخاص نأمل مراجعة الرسالة وإبلاغنا إذا كنت بحاجة إلى أي مساعدة إضافية. طاب يومك 🙏🏼",
        'طلب الرد عبر الرسائل المباشرة 1': "شكراً لتواصلك معنا! سنرسل لك التفاصيل عبر الخاص قريباً 📩 طاب يومك",
        'طلب الرد عبر الرسائل المباشرة 2': "حياك الله، أرسلنا لك رسالة عبر الخاص لمناقشة التفاصيل📩. وفريقنا بالخدمة في حال احتجت أي مساعدة إضافية",
        'طلب الرد عبر الرسائل المباشرة 3': "حياك الله! متواصلين معك عبر الخاص 📩\nفضلًا مشاركتنا بالبيانات المطلوبة لمساعدتك بشكل أفضل. 🙏🏼\n",
        'Request data via DM / طلب بيانات الشحنة عبر الرسائل الخاصة': "حياك الله، كرماً لو تزودنا بعنوانك ورقم التواصل على الخاص.\n نقدر تعاونك معنا. طاب يومك",
        'Held at Customs - الجمارك': "حياك الله، شكراً لتواصلك مع ناقل. شحنتك حاليًا في المطار، من فضلك تزويدنا بالاسم الثلاثي، رقم الجوال، ورقم الهوية الوطنية في الخاص لإتمام الإجراءات.",
        'New Cooperative or Store / طلب تعاقد': "مرحباً أستاذ/ة ...، شكراً لتواصلك مع ناقل. لو تكرمت، نحتاج البيانات التالية عبر الخاص للمساعدة: الاسم الكريم، رقم الهاتف، العنوان بالتفصيل، اسم المنشأة ونشاطها، عدد الشحنات المتوقعة شهرياً، والسجل التجاري                         \n",
        'Pharma Inquiry / إستفسار شحنة فارما': "حياك الله أستاذ/ة ...، شكراً لتواصلك مع شركة ناقل. من فضلك تزويدنا باسم المستشفى، رقم ملف المريض، ورقم الهاتف عبر الخاص لمساعدتك بشكل أفضل.",
        'استفسار عن رقم الشحنة / No Shipment Number Provided': "حياك الله..... ، شكراً لتواصلك مع شركة ناقل، \nمن فضلك تزويدنا برقم التتبع المكون من (8) أو (9) خانات لمساعدتك بشكل أفضل.",
        'استفسار عن التوظيف/ Career': "حياك الله،\n شكراً لإهتمامك بشركة ناقل.\nللإطلاع على الشواغر الوظيفية، يرجى زيارة صفحتنا في لينكدإن : https://ae.linkedin.com/company/naqelexpress\n أو أرسل سيرتك الذاتية مباشرة على الإيميل: Saudi.jobs@naqel.com.sa \n مع تمنياتنا لك بالتوفيق.",
        'individual Courier / استفسار مندوب جزئي - التوظيف': "حياك الله شريكنا،  للرغبة في التقديم كمندوب جزئي في شركة ناقل يرجى زيارة الرابط التالي: https://register.naqelexpress.com\n مع تمنياتنا لك بالتوفيق",
        'Working days / أيام العمل': "حياك الله عميلنا العزيز، شكراً لتواصلك مع شركة ناقل. التوصيل متاح طول الأسبوع، وإذا فيه أي استفسارات ثانية، فريقنا بالخدمة. يومك سعيد.                           \n",
        'شحنة إرجاع - ASR': "حياك الله، شكراً لتواصلك معنا. في حال رغبتك في تسليم الشحنة للمندوب، لو تكرمت ترسل لنا رقم الإرجاع المكون من (9) أو (8) خانات عبر الخاص. طاب يومك",
        'طلب رقم تواصل المندوب/ Request Courier number': "حياك الله، من الواضح أن شحنتك خارجة للتوصيل مع المندوب، وبيتواصل معك في حال وصوله لموقعك بإذن الله. يومك سعيد.",
        'طلب رفع شكوى / Raise a Complaint': "نعتذر منك و مقدرين موقفك، لو تكرمت تزودنا برقم تتبع الشحنة وتفاصيل الشكوى عبر الخاص. طاب يومك.",
        'طرق الدفع': "حياك الله، شكرًا لتواصلك مع ناقل.\nتقدر تختار بين الدفع نقداً أو أونلاين.\nرابط الدفع أونلاين يصلك برسالة نصية من ناقل بمجرد خروج الشحنة للتوصيل.\nيومك سعيد.",
        'استفسار الشحن الدولي': "حياك الله أستاذ/هـ ..... ، شكراً لتواصلك معنا.\nنعتذر منك، خدمة الشحن الدولي حاليًا غير متاحة.\n إذا عندك أي استفسار ثاني، فريقنا بالخدمة.\nيوم سعيد.",
        'استفسار الفروع': "حياك الله، شكراً لتواصلك مع شركة ناقل. \nيرجى العلم أن الفروع حالياً مغلقة، وإذا تحتاج أي مساعدة إضافية، فريقنا بالخدمة. نتمنى لك يوم سعيد.",
        'استفسار مندوب جزئي - عن حالة طلب التقديم': "حياك الله شريكنا العزيز،\nشكراً لتواصلك مع ناقل.\nفي حال انطباق الشروط وتوفر الشواغر، سيتم التواصل معك من القسم المختص.\nنتمنى لك النجاح والتوفيق.\n",
        'أعتذار + رد': "نعتذر عن أي تجربة غير مرضية مررت بها. وتأكد فريقنا يسعى دائماً لتحسين خدماتنا. تم الرد على إستفسارك بالخاص،  نشكر تواصلك معنا، طاب يومك.",
        'Escalation / تصعيد': "حياك الله ...... نعتذر منك و مقدرين موقفك، رفعنا تفاصيل المشكلة للقسم المختص وسيتم التواصل معك وتزويدك بالمستجدات في أقرب وقت. طاب يومك",
        'تصعيد او شكوى 2': "حياك الله ...... نعتذر منك و مقدرين موقفك، نؤكد لك أنه تم اتخاذ الإجراء اللازم ومتابعتها مع القسم المختص وسيتم توصيلها في أقرب وقت ممكن. طاب يومك",
        'تصعيد او شكوى 3': "نعتذر منك و مقدرين موقفك، تم تصعيد المشكلة للقسم المختص وسيتم تسليمها في أقرب وقت ممكن، يومك سعيد.",
        'Data Registered / الشحنة لم تصل': "حياك الله، وشكراً لتواصلك معنا. الشحنة رقم () لم يتم استلامها بعد، وبمجرد استلامها بنرسل لك رسالة نصية ونتواصل معك بأسرع وقت إن شاء الله.\n ويمكنك تتبع شحنتك في أي وقت عبر قنواتنا الرقمية. يومك سعيد"
    };

    const script_english = {
        'تعليق سلبي -Negative Mention Feedback - 1':"We're sorry to hear about your experience. This isn’t the standard we aim for, and we’d like to make it right. Please DM us with more details so we can assist you promptly.",
        'تعليق سلبي -Negative Mention Feedback - 2':"We truly regret any inconvenience caused. Your feedback is important to us, and we’re here to help. Could you send us a direct message with more information?",
        'تعليق سلبي -Negative Mention Feedback - 3':"Thank you for bringing this to our attention. We're committed to resolving this matter as soon as possible. Kindly share the details with us via DM.",
        '1 + Positive Mention Feedback - تعليق ايجابي':"Thank you so much for your kind words! We're thrilled to hear about your positive experience. Your support means the world to us.",
        '2 + Positive Mention Feedback - تعليق ايجابي':"We're so glad you had a great experience with NAQEL! Thank you for sharing your feedback. It motivates us to keep delivering excellence.",
        '3 + Positive Mention Feedback - تعليق ايجابي':"Your satisfaction is our top priority, and your kind words just made our day! Thank you for being a valued part of the NAQEL family.",
        'General Inquiries or Suggestions استفسار أو اقتراح عام': "Thank you for bringing this to our attention. Please let us know if there is anything else we can do to improve our services. Kindly share your suggestions. We look forward to hearing back from you soon.",
        'Mention to NAQELexpr / NaqelHelp':"Welcome, Mr./Ms.\nThank you for contacting Naqel. Please contact us via Naqel's customer service account so we can better assist you. https://twitter.com/messages/compose?recipient_id=833562173196664833%D8%8C \nWe wish you a happy day.",
        'Handover SPL shipments (Complaint) مناولة شحناتSPL (شكوى) ': "Dear Customer, we apologize about this inconvenience matter, our colleagues in @SPL_Care will assist you.",
        'Handover SPL shipments (Inquiry) مناولة شحناتSPL (استفسار) ': "Thank you for reaching out, our colleagues in @SPL _Care are happy to assist you.",
        'تم الرد بالفعل عبر الرسائل المباشرة 1': "Thank you for reaching out! We've responded to your inquiry via direct message 📩. Please check your inbox for further details",
        'تم الرد بالفعل عبر الرسائل المباشرة 2': "We appreciate you contacting us! Our team has already sent you a message with the information you need📩. Please feel free to reply if you have further questions",
        'تم الرد بالفعل عبر الرسائل المباشرة 3': "Hi! We've addressed your concern via DM for privacy and quicker resolution 📩. Please check and let us know if there's anything else we can assist you with",
        'طلب الرد عبر الرسائل المباشرة 1': "Got it! We'll send you a direct message shortly to assist you. Please keep an eye on your inbox 📩.",
        'طلب الرد عبر الرسائل المباشرة 2': "Thank you for reaching out! We've sent you a message to discuss this further📩. Let us know if there's anything else we can assist with",
        'طلب الرد عبر الرسائل المباشرة 3': "We are here to help! You'll find a message from us in your inbox soon📩. Please feel free to reply with the necessary details",
        'Request data via DM / طلب بيانات الشحنة عبر الرسائل الخاصة': "Hello, please kindly provide us with your address and contact number via direct message.\nWe appreciate your cooperation. Have a good day.",
        'Held at Customs - الجمارك': "Hello, thank you for contacting Naqel. Your shipment is currently at the airport. Please provide us with your full name, mobile number, and national ID number via direct message to complete the procedures.",
        'New Cooperative or Store / طلب تعاقد': "Hello Mr./Ms. ..., Thank you for contacting Naqel. Please kindly provide the following information via direct message for assistance: Full Name, Phone Number, Detailed Address, Establishment Name and Activity, Expected Number of Shipments per Month, and Commercial Registration.",
        'Pharma Inquiry / إستفسار شحنة فارما': "Hello Mr./Ms. ..., Thank you for contacting Naqel Express. Please provide us with the hospital name, patient file number, and phone number via direct message to assist you better.",
        'استفسار عن رقم الشحنة / No Shipment Number Provided': "Hello..., Thank you for contacting Naqel Express,\nPlease provide us with the tracking number consisting of (8) or (9) digits to assist you better.",
        'استفسار عن التوظيف/ Career': "Hello,\nThank you for your interest in Naqel Express.\nTo view job vacancies, please visit our LinkedIn page: https://ae.linkedin.com/company/naqelexpress\nOr send your CV directly to the email: Saudi.jobs@naqel.com.sa\nWe wish you the best of luck.",
        'individual Courier / استفسار مندوب جزئي - التوظيف': "Hello our partner, to apply as a part-time courier at Naqel Express, please visit the following link: https://register.naqelexpress.com\nWe wish you the best of luck.",
        'Working days / أيام العمل': "Hello dear customer, thank you for contacting Naqel Express. Delivery is available throughout the week, and if you have any other inquiries, our team is at your service. Have a nice day.",
        'شحنة إرجاع - ASR': "Hello, thank you for contacting us. If you wish to hand over the shipment to the courier, please kindly send us the return number consisting of (9) or (8) digits via direct message. Have a good day.",
        'طلب رقم تواصل المندوب/ Request Courier number': "Hello, it appears that your shipment is out for delivery with the courier, and they will contact you upon arrival at your location, God willing. Have a nice day.",
        'طلب رفع شكوى / Raise a Complaint': "We apologize for the inconvenience and appreciate your understanding. Please kindly provide us with the shipment tracking number and details of the complaint via direct message. Have a good day.",
        'طرق الدفع': "Hello, thank you for contacting Naqel.\nYou can choose between cash on delivery or online payment.\nThe online payment link will be sent to you via SMS from Naqel once the shipment is out for delivery.\nHave a nice day.",
        'استفسار الشحن الدولي': "Hello Mr./Ms. ..., Thank you for contacting us.\nWe apologize, international shipping service is currently unavailable.\nIf you have any other inquiries, our team is at your service.\nHave a nice day.",
        'استفسار الفروع': "Hello, thank you for contacting Naqel Express.\nPlease note that the branches are currently closed, and if you need any further assistance, our team is at your service. We wish you a nice day.",
        'استفسار مندوب جزئي - عن حالة طلب التقديم': "Hello dear partner,\nThank you for contacting Naqel.\nIf the conditions apply and vacancies are available, you will be contacted by the concerned department.\nWe wish you success and good luck.",
        'أعتذار + رد': "We apologize for any unsatisfactory experience you had. Please be assured that our team is always striving to improve our services. Your inquiry has been answered via direct message. Thank you for contacting us, have a good day.",
        'Escalation / تصعيد': "Hello ..., we apologize for the inconvenience and appreciate your understanding. We have escalated the details of the issue to the concerned department, and you will be contacted and provided with updates as soon as possible. Have a good day.",
        'تصعيد او شكوى 2': "Hello ..., we apologize for the inconvenience and appreciate your understanding. We assure you that the necessary action has been taken and it is being followed up with the concerned department, and the shipment will be delivered as soon as possible. Have a good day.",
        'تصعيد او شكوى 3': "We apologize for the inconvenience and appreciate your understanding. The issue has been escalated to the concerned department and the shipment will be delivered as soon as possible. Have a nice day.",
        'Data Registered / الشحنة لم تصل': "Hello, and thank you for contacting us. Shipment number () has not been received yet, and once it is received, we will send you an SMS and contact you as soon as possible, God willing.\nYou can track your shipment at any time through our digital channels. Have a nice day."
    };

    const script_negative_arabic = {
        'تعليق سلبي -Negative Mention Feedback - 1':"نعتذر عن أي تجربة غير مرضية واجهتك.\nلو تكرمت تتفضل بالتواصل معنا عبر الخاص لحل مشكلتك بشكل أسرع. 🙏🏼\n",
        'تعليق سلبي -Negative Mention Feedback - 2':"نعتذر منك ويؤسفنا ماحدث ، فضلاً تواصل معنا عبر الخاص و زودنا بالبيانات📩، نتطلع لخدمتك.",
        'تعليق سلبي -Negative Mention Feedback - 3':"عميلنا العزيز، الرجاء توضيح التفاصيل اللي واجهتك عبر الخاص حتى نتمكن من خدمتك بشكل أفضل 📩.\nرضاكم هو هدفنا. \n",
        'Handover SPL shipments (Complaint) مناولة شحناتSPL (شكوى) ': "حياك الله، نعتذر منك وملاحظاتك تهمنا. زملاؤنا في @SPL_Care جاهزين لخدمتك وتقديم الدعم اللي تحتاجه.",
        'طلب رفع شكوى / Raise a Complaint': "نعتذر منك و مقدرين موقفك، لو تكرمت تزودنا برقم تتبع الشحنة وتفاصيل الشكوى عبر الخاص. طاب يومك.",
        'أعتذار + رد': "نعتذر عن أي تجربة غير مرضية مررت بها. وتأكد فريقنا يسعى دائماً لتحسين خدماتنا. تم الرد على إستفسارك بالخاص،  نشكر تواصلك معنا، طاب يومك.",
        'Escalation / تصعيد': "حياك الله ...... نعتذر منك و مقدرين موقفك، رفعنا تفاصيل المشكلة للقسم المختص وسيتم التواصل معك وتزويدك بالمستجدات في أقرب وقت. طاب يومك",
        'تصعيد او شكوى 2': "حياك الله ...... نعتذر منك و مقدرين موقفك، نؤكد لك أنه تم اتخاذ الإجراء اللازم ومتابعتها مع القسم المختص وسيتم توصيلها في أقرب وقت ممكن. طاب يومك",
        'تصعيد او شكوى 3': "نعتذر منك و مقدرين موقفك، تم تصعيد المشكلة للقسم المختص وسيتم تسليمها في أقرب وقت ممكن، يومك سعيد.",
    }

     const script_negative_english = {
        'تعليق سلبي -Negative Mention Feedback - 1':"We're sorry to hear about your experience. This isn’t the standard we aim for, and we’d like to make it right. Please DM us with more details so we can assist you promptly.",
        'تعليق سلبي -Negative Mention Feedback - 2':"We truly regret any inconvenience caused. Your feedback is important to us, and we’re here to help. Could you send us a direct message with more information?",
        'تعليق سلبي -Negative Mention Feedback - 3':"Thank you for bringing this to our attention. We're committed to resolving this matter as soon as possible. Kindly share the details with us via DM.",
        'Handover SPL shipments (Complaint) مناولة شحناتSPL (شكوى) ': "Dear Customer, we apologize about this inconvenience matter, our colleagues in @SPL_Care will assist you.",
        'طلب رفع شكوى / Raise a Complaint': "We apologize for the inconvenience and appreciate your understanding. Please kindly provide us with the shipment tracking number and details of the complaint via direct message. Have a good day.",
        'أعتذار + رد': "We apologize for any unsatisfactory experience you had. Please be assured that our team is always striving to improve our services. Your inquiry has been answered via direct message. Thank you for contacting us, have a good day.",
        'Escalation / تصعيد': "Hello ..., we apologize for the inconvenience and appreciate your understanding. We have escalated the details of the issue to the concerned department, and you will be contacted and provided with updates as soon as possible. Have a good day.",
        'تصعيد او شكوى 2': "Hello ..., we apologize for the inconvenience and appreciate your understanding. We assure you that the necessary action has been taken and it is being followed up with the concerned department, and the shipment will be delivered as soon as possible. Have a good day.",
        'تصعيد او شكوى 3': "We apologize for the inconvenience and appreciate your understanding. The issue has been escalated to the concerned department and the shipment will be delivered as soon as possible. Have a nice day.",
    }

    const script_positive_arabic = {
        '1 + Positive Mention Feedback - تعليق ايجابي':"شكراً  على كلماتك الطيبة! يسعدنا معرفة أنك راضٍ عن تجربتك معنا..",
        '2 + Positive Mention Feedback - تعليق ايجابي':"سعداء أن تجربتك مع ناقل كانت مميزة! شكراً لملاحظاتك اللي تساعدنا للاستمرار في تقديم الأفضل.",
        '3 + Positive Mention Feedback - تعليق ايجابي': "يسعدنا رضاك الذي يحفزنا للإستمرار بتقديم المزيد بإذن الله، يومك سعيد..",
    }

    const script_positive_english = {
       '1 + Positive Mention Feedback - تعليق ايجابي':"Thank you so much for your kind words! We're thrilled to hear about your positive experience. Your support means the world to us.",
       '2 + Positive Mention Feedback - تعليق ايجابي':"We're so glad you had a great experience with NAQEL! Thank you for sharing your feedback. It motivates us to keep delivering excellence.",
       '3 + Positive Mention Feedback - تعليق ايجابي':"Your satisfaction is our top priority, and your kind words just made our day! Thank you for being a valued part of the NAQEL family.",
    }

    let Language = localStorage.getItem("lang") || '';
    let condition = localStorage.getItem("Conditions") || '';
    let script = '';

    if (Language !== '' && condition !== '') {
        if (Language === 'عربي') {
            if (condition === 'Negative') {
                script = script_negative_arabic;
            } else if (condition === 'Positive') {
                script = script_positive_arabic;
            } else if (condition === 'All' || condition === 'Neutral') {
                script = script_arabic;
            }
        } else if (Language === 'English') {
            if (condition === 'Negative') {
                script = script_negative_english;
            } else if (condition === 'Positive') {
                script = script_positive_english;
            } else if (condition === 'All' || condition === 'Neutral') {
                script = script_english;
            }
        }
    } else if (Language !== '' && condition === '') {
        if (Language === 'عربي') {
            script = script_arabic;
        } else if (Language === 'English') {
            script = script_english;
        }
    } else if (Language === '' && condition !== '') {
        if (condition === 'Negative') {
            script = script_negative_arabic;
        }else if(condition === 'Positive'){
            script = script_positive_arabic; 
        } else {
            script = script_arabic; 
        }
    } else {
        script = script_arabic;
    }

    const tbody = document.getElementById("script-table-body");
    tbody.innerHTML = "";

    for (const category in script) {
        const value = script[category];
        const searchText = query.toLowerCase();
        
        if(query === '' || 
           category.toLowerCase().includes(searchText) || 
           value.toLowerCase().includes(searchText)) {
            
            const tr = document.createElement("tr");
            tr.classList.add("hover:bg-gray-50");

            const tdCategory = document.createElement("td");
            tdCategory.className = "px-6 py-4 text-center font-bold align-middle border border-gray-200";
            tdCategory.textContent = category;

            const tdScript = document.createElement("td");
            tdScript.className = "px-6 py-4 whitespace-pre-wrap align-middle border border-gray-200 relative group";

            const isArabic = /[\u0600-\u06FF]/.test(value);

            tdScript.style.direction = isArabic ? "rtl" : "ltr";
            tdScript.style.textAlign = isArabic ? "right" : "left";
            tdScript.textContent = value;

            const copyButton = document.createElement("button");
            copyButton.className = "copy-icon m-10 bg-gray-100 rounded-md transition-all duration-200 ease-in-out";
            copyButton.title = "Copy to clipboard";

            copyButton.style.display = "flex"; 
            copyButton.style.alignItems = "center"; 
            copyButton.style.padding = "0.25rem 0.5rem"; 
            copyButton.style.border = "1px solid #ccc"; 
            copyButton.style.cursor = "pointer"; 
            copyButton.style.borderRadius = "1.25rem"; 

            const copyIcon = document.createElement("img");
            copyIcon.src = "Images/copy.png";
            copyIcon.alt = "Copy";
            copyIcon.style.width = "26px";
            copyIcon.style.height = "26px";
            copyIcon.style.marginRight = "0.25rem"; 

            copyButton.appendChild(copyIcon);

            copyButton.addEventListener("click", (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(value)
                    .then(() => {
                        const originalSrc = copyIcon.src;
                        copyIcon.src = "Images/circle.png"; 
                        copyIcon.className = "w-4 h-4"; 
                        copyButton.classList.add("bg-green-100");
                        setTimeout(() => {
                            copyIcon.src = originalSrc;
                            copyButton.classList.remove("bg-green-100");
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                    });
            });

            tdScript.appendChild(copyButton);
            tr.appendChild(tdCategory);
            tr.appendChild(tdScript);
            tbody.appendChild(tr);
        }
    }
}


// Instagram & Facebook Scripts
function OpenScriptInstagramFacebook(query = '') {
    const InstagramFacebookbtn = document.getElementById("InstagramFacebookbtn");
    InstagramFacebookbtn.classList.add('bg-gray-200');
    localStorage.setItem("script", 'InstagramFacebook');

    ResetButtons('InstagramFacebook');

    const script_arabic = {
        '1 + Positive Mention Feedback - تعليق ايجابي':"حياك الله وشكرًا لتواصلك معنا، يسعدنا معرفة أنك راضٍ عن تجربتك معنا🙏🏼. طاب يومك.",     
        '2 + Positive Mention Feedback - تعليق ايجابي':"حياك الله، سعداء أن تجربتك مع ناقل كانت مميزة! شكراً لملاحظاتك اللي تساعدنا للاستمرار في تقديم الأفضل🙏🏼.",
        '1 - Negative Mention Feedback تعليق سلبي -':"حياك الله ...... نعتذر منك و مقدرين موقفك. فريقنا حريص أنه يحل المشكلة، من فضلك التواصل عبر المحادثة المباشرة لمساعدتك بشكل أفضل📩. طاب يومك",
        '2 - Negative Mention Feedback تعليق سلبي -':"نعتذر عن أي تجربة غير مرضية مررت بها. لو تكرمت تتفضل بالتواصل معنا عبر المحادثة المباشرة ومشاركة رقم تتبع الشحنة لعمل اللازم بشكل أسرع📩، طاب يومك",
        'General Inquiries or Suggestions استفسار أو اقتراح عام': "حياك الله، رأيك يهمنا! من فضلك مشاركتنا أي اقتراح أو ملاحظة لتحسين خدماتنا، للاستمرار في تقديم الأفضل.",
        'التحدث مع موظف خدمة العملاء': "حياك الله أ .....،  يرجى التواصل معنا عبر المحادثة المباشرة  واختيار (التحدث الى موظف خدمة العملاء) 📩 وسيتم الرد في أقرب وقت ممكن، نتطلع إلى خدمتكم.",
        'التحدث مع موظف خدمة العملاء + اعتذار': "حياك الله أ.....، نأسف لسماع أن تجربتك لم تكن على مستوى التوقعات، نود أن تتواصل معنا عبر المحادثة المباشرة واختيار (التحدث الى موظف خدمة العملاء) 📩 حتى يتم التحقق وعمل اللازم. نتطلع إلى خدمتكم دائماً.",
        'Thanks Message 1 / شكر': "حياك الله، شكرًا لتواصلك مع ناقل. نتمنى أن تكون خدماتنا دائمًا عند حسن ظنك🙏🏼.",
        'Thanks Message 2 / شكر': "حياك الله، شكرًا لتواصلك مع ناقل. نتمنى دائما إن خدماتنا تكون قد رضاك ونلبي كل تطلعاتك🙏🏼.",
        'تم الرد عبر المحادثة المباشرة 1': "حياك الله! تم الرد على استفسارك عبر المحادثة المباشرة📩. إذا احتجت أي مساعدة إضافية، فريقنا بالخدمة. طاب يومك",
        'تم الرد عبر المحادثة المباشرة 2': "حياك الله أستاذ/ه ..... ، نعتذر عن أي تأخير غير مقصود، تم الرد على استفسارك عبر المحادثة المباشرة📩، طاب يومك.",
        'Data Registered / الشحنة لم تصل': "حياك الله، وشكراً لتواصلك مع ناقل. الشحنة رقم () لم يتم استلامها بعد، وبمجرد استلامها سنرسل لك رسالة نصية ونتواصل معك بأسرع وقت إن شاء الله.\nويمكنك تتبع شحنتك في أي وقت عبر قنواتنا الرقمية. يومك سعيد",
        'Held at Customs - الجمارك': "حياك الله، شكراً لتواصلك مع ناقل. شحنتك حاليًا في المطار، من فضلك تزويدنا بالاسم الثلاثي، رقم الجوال، ورقم الهوية الوطنية عبر المحادثة المباشرة لإتمام الإجراءات.",
        'New Cooperative or Store / طلب تعاقد': "مرحباً أستاذ/هـ ...، شكراً لتواصلك مع ناقل. لو تكرمت، نحتاج البيانات التالية عبر المحادثة المباشرة للمساعدة: الاسم الكريم، رقم الهاتف، العنوان بالتفصيل، اسم المنشأة ونشاطها، عدد الشحنات المتوقعة شهرياً، والسجل التجاري",
        'Pharma Inquiry / إستفسار شحنة فارما': "حياك الله أستاذ/هـ ...، شكراً لتواصلك مع شركة ناقل. من فضلك تزويدنا باسم المستشفى، رقم ملف المريض، ورقم الهاتف عبر المحادثة المباشرة لمساعدتك بشكل أفضل.",
        'استفسار عن رقم الشحنة / No Shipment Number Provided': "حياك الله..... ، شكراً لتواصلك مع ناقل، \n من فضلك تزويدنا برقم التتبع المكون من (8) أو (9) خانات عبر المحادثة المباشرة لمساعدتك بشكل أفضل.",
        'استفسار عن التوظيف / Career': "حياك الله،\n  شكراً لإهتمامك بشركة ناقل.\n للإطلاع على الشواغر الوظيفية، يرجى زيارة صفحتنا في لينكدإن : https://ae.linkedin.com/company/naqelexpress\n  أو أرسل سيرتك الذاتية مباشرة على الإيميل: Saudi.jobs@naqel.com.sa \n  مع تمنياتنا لك بالتوفيق.",
        'individual Courier / استفسار مندوب جزئي - التوظيف': "حياك الله شريكنا، \n  للرغبة في التقديم كمندوب جزئي في شركة ناقل يرجى زيارة الرابط التالي: https://register.naqelexpress.com\n  مع تمنياتنا لك بالتوفيق",
        'Working days / أيام العمل': "حياك الله عميلنا العزيز، شكراً لتواصلك مع ناقل. التوصيل متاح طول الأسبوع، وإذا فيه أي استفسارات ثانية، فريقنا بالخدمة. يومك سعيد.",
        'Escalation / تصعيد': "حياك الله أستاذ/ه ..... ، \n  نعتذر منك و مقدرين موقفك، رفعنا تفاصيل المشكلة للقسم المختص وسيتم التواصل معك وتزويدك بالمستجدات في أقرب وقت، طاب يومك.",
        'شحنة إرجاع - ASR': "حياك الله أستاذ/ه ..... ، شكراً لتواصلك مع ناقل. في حال رغبتك في تسليم الشحنة للمندوب، لو تكرمت ترسل لنا رقم الإرجاع المكون من (9) أو (8) خانات عبر المحادثة المباشرة. طاب يومك",
        'Request data via DM / طلب بيانات الشحنة عبر المحادثة المباشرة': "حياك الله أستاذ/ه ..... ، شكراً لتواصلك مع ناقل، \n من فضلك تزويدنا بعنوانك ورقم التواصل عبر المحادثة المباشرة📩\n نقدر تعاونك معنا. طاب يومك.",
        'طلب رقم تواصل المندوب / Request Courier number': "حياك الله أستاذ/ه ..... ، شكراً لتواصلك مع ناقل. من الواضح أن شحنتك خارجة للتوصيل مع المندوب، وبيتواصل معك في حال وصوله لموقعك بإذن الله. يومك سعيد.",
        'طلب رفع شكوى / Raise a Complaint': "حياك الله أستاذ/ه ..... ،\n نعتذر منك و مقدرين موقفك، من فضلك تزودنا برقم تتبع الشحنة وتفاصيل الشكوى عبر المحادثة المباشرة. \nطاب يومك."
    };

    const script_english = {
        '1 + Positive Mention Feedback - تعليق ايجابي':"Thank you for contacting us, We appreciate you being a customer of the Naqel company.🙏🏼",
        '2 + Positive Mention Feedback - تعليق ايجابي':"Thank you for your valuable feedback. We appreciate you being our customer and we are thrilled to know that you are having a great experience with Naqel Express.🙏🏼",
        '1 - Negative Mention Feedback تعليق سلبي -':"We apologize for your dissatisfaction with our services, and we hope to have the opportunity again to correct this matter. We look forward to your communication with us via live chat so that we can assist you better📩and we will strive to provide the best.",
        '1 - Negative Mention Feedback تعليق سلبي -':"Welcome, Mr./Ms. ....., We are sorry to hear that your experience was not up to expectations, we would like you to contact us via live chat and provide us with the shipment tracking number so that we can check and take the necessary action. We look forward to serving you always.",
        'General Inquiries or Suggestions استفسار أو اقتراح عام': "Thank you for bringing this to our attention. Please let us know if there is anything else we can do to improve our services. Kindly share your suggestions. We look forward to hearing back from you soon.",
        'التحدث مع موظف خدمة العملاء': "Hello Mr./Ms. ..., please contact us via live chat and choose (Speak to a Customer Service Agent) 📩 and you will be answered as soon as possible. We look forward to serving you.",
        'التحدث مع موظف خدمة العملاء + اعتذار': "Hello Mr./Ms. ..., we are sorry to hear that your experience was not up to expectations. We would like you to contact us via live chat and choose (Speak to a Customer Service Agent) 📩 so that the matter can be checked and the necessary action taken. We always look forward to serving you.",
        'Thanks Message 1 / شكر': "Hello, thank you for contacting Naqel. We hope that our services will always meet your expectations 🙏🏼.",
        'Thanks Message 2 / شكر': "Hello, thank you for contacting Naqel. We always hope that our services have met your satisfaction and fulfilled all your expectations 🙏🏼.",
        'تم الرد عبر المحادثة المباشرة 1': "Hello! Your inquiry has been answered via live chat 📩. If you need any further assistance, our team is at your service. Have a good day.",
        'تم الرد عبر المحادثة المباشرة 2': "Hello Mr./Ms. ..., we apologize for any unintentional delay. Your inquiry has been answered via live chat 📩. Have a good day.",
        'Data Registered / الشحنة لم تصل': "Hello, thank you for contacting Naqel. Shipment number () has not been received yet, and once it is received, we will send you an SMS and contact you as soon as possible, God willing.\nYou can track your shipment at any time through our digital channels. Have a good day.",
        'Held at Customs - الجمارك': "Hello, thank you for contacting Naqel. Your shipment is currently at the airport. Please provide us with your full name, mobile number, and national ID number via live chat to complete the procedures.",
        'New Cooperative or Store / طلب تعاقد': "Hello Mr./Ms. ..., Thank you for contacting Naqel. Kindly provide the following information via live chat for assistance: Full Name, Phone Number, Detailed Address, Establishment Name and Activity, Expected Number of Shipments per Month, and Commercial Registration.",
        'Pharma Inquiry / إستفسار شحنة فارما': "Hello Mr./Ms. ..., Thank you for contacting Naqel Express. Please provide us with the hospital name, patient file number, and phone number via live chat to assist you better.",
        'استفسار عن رقم الشحنة / No Shipment Number Provided': "Hello..., Thank you for contacting Naqel. Please provide us with the tracking number consisting of (8) or (9) digits via live chat to assist you better.",
        'استفسار عن التوظيف / Career': "Hello,\nThank you for your interest in Naqel Express.\nTo view job vacancies, please visit our LinkedIn page: https://ae.linkedin.com/company/naqelexpress\nOr send your CV directly to the email: Saudi.jobs@naqel.com.sa\nWe wish you the best of luck.",
        'individual Courier / استفسار مندوب جزئي - التوظيف': "Hello our partner, to apply as a part-time courier at Naqel Express, please visit the following link: https://register.naqelexpress.com\nWe wish you the best of luck.",
        'Working days / أيام العمل': "Hello dear customer, thank you for contacting Naqel. Delivery is available throughout the week, and if you have any other inquiries, our team is at your service. Have a good day.",
        'Escalation / تصعيد': "Hello Mr./Ms. ..., we apologize for the inconvenience and appreciate your understanding. We have escalated the details of the issue to the concerned department, and you will be contacted and provided with updates as soon as possible. Have a good day.",
        'شحنة إرجاع - ASR': "Hello Mr./Ms. ..., thank you for contacting Naqel. If you wish to hand over the shipment to the courier, please kindly send us the return number consisting of (9) or (8) digits via live chat. Have a good day.",
        'Request data via DM / طلب بيانات الشحنة عبر المحادثة المباشرة': "Hello Mr./Ms. ..., thank you for contacting Naqel. Please kindly provide us with your address and contact number via live chat 📩.\nWe appreciate your cooperation. Have a good day.",
        'طلب رقم تواصل المندوب / Request Courier number': "Hello Mr./Ms. ..., thank you for contacting Naqel. It appears that your shipment is out for delivery with the courier, and they will contact you upon arrival at your location, God willing. Have a good day.",
        'طلب رفع شكوى / Raise a Complaint': "Hello Mr./Ms. ..., we apologize for the inconvenience and appreciate your understanding. Please kindly provide us with the shipment tracking number and details of the complaint via live chat. Have a good day."
    };

    const script_negative_arabic = {
        '1 - Negative Mention Feedback تعليق سلبي -':"حياك الله ...... نعتذر منك و مقدرين موقفك. فريقنا حريص أنه يحل المشكلة، من فضلك التواصل عبر المحادثة المباشرة لمساعدتك بشكل أفضل📩. طاب يومك",
        '2 - Negative Mention Feedback تعليق سلبي -':"نعتذر عن أي تجربة غير مرضية مررت بها. لو تكرمت تتفضل بالتواصل معنا عبر المحادثة المباشرة ومشاركة رقم تتبع الشحنة لعمل اللازم بشكل أسرع📩، طاب يومك",
        'التحدث مع موظف خدمة العملاء + اعتذار': "حياك الله أ.....، نأسف لسماع أن تجربتك لم تكن على مستوى التوقعات، نود أن تتواصل معنا عبر المحادثة المباشرة واختيار (التحدث الى موظف خدمة العملاء) 📩 حتى يتم التحقق وعمل اللازم. نتطلع إلى خدمتكم دائماً.",
        'طلب رفع شكوى / Raise a Complaint': "حياك الله أستاذ/ه ..... ،\n نعتذر منك و مقدرين موقفك، من فضلك تزودنا برقم تتبع الشحنة وتفاصيل الشكوى عبر المحادثة المباشرة. \nطاب يومك."
    }

    const script_negative_english = {
        '1 - Negative Mention Feedback تعليق سلبي -':"We apologize for your dissatisfaction with our services, and we hope to have the opportunity again to correct this matter. We look forward to your communication with us via live chat so that we can assist you better📩and we will strive to provide the best.",
        '1 - Negative Mention Feedback تعليق سلبي -':"Welcome, Mr./Ms. ....., We are sorry to hear that your experience was not up to expectations, we would like you to contact us via live chat and provide us with the shipment tracking number so that we can check and take the necessary action. We look forward to serving you always.",
        'التحدث مع موظف خدمة العملاء + اعتذار': "Hello Mr./Ms. ..., we are sorry to hear that your experience was not up to expectations. We would like you to contact us via live chat and choose (Speak to a Customer Service Agent) 📩 so that the matter can be checked and the necessary action taken. We always look forward to serving you.",
        'طلب رفع شكوى / Raise a Complaint': "Hello Mr./Ms. ..., we apologize for the inconvenience and appreciate your understanding. Please kindly provide us with the shipment tracking number and details of the complaint via live chat. Have a good day."
    }

    const script_positive_arabic = {
        '1 + Positive Mention Feedback - تعليق ايجابي':"حياك الله وشكرًا لتواصلك معنا، يسعدنا معرفة أنك راضٍ عن تجربتك معنا🙏🏼. طاب يومك.",     
        '2 + Positive Mention Feedback - تعليق ايجابي':"حياك الله، سعداء أن تجربتك مع ناقل كانت مميزة! شكراً لملاحظاتك اللي تساعدنا للاستمرار في تقديم الأفضل🙏🏼.",
    }

    const script_positive_english = {
      '1 + Positive Mention Feedback - تعليق ايجابي':"Thank you for contacting us, We appreciate you being a customer of the Naqel company.🙏🏼",
      '2 + Positive Mention Feedback - تعليق ايجابي':"Thank you for your valuable feedback. We appreciate you being our customer and we are thrilled to know that you are having a great experience with Naqel Express.🙏🏼",
    }

    let Language = localStorage.getItem("lang") || '';
    let condition = localStorage.getItem("Conditions") || '';
    let script = '';

    if (Language !== '' && condition !== '') {
        if (Language === 'عربي') {
            if (condition === 'Negative') {
                script = script_negative_arabic;
            } else if (condition === 'Positive') {
                script = script_positive_arabic;
            } else if (condition === 'All' || condition === 'Neutral') {
                script = script_arabic;
            }
        } else if (Language === 'English') {
            if (condition === 'Negative') {
                script = script_negative_english;
            } else if (condition === 'Positive') {
                script = script_positive_english;
            } else if (condition === 'All' || condition === 'Neutral') {
                script = script_english;
            }
        }
    } else if (Language !== '' && condition === '') {
        if (Language === 'عربي') {
            script = script_arabic;
        } else if (Language === 'English') {
            script = script_english;
        }
    } else if (Language === '' && condition !== '') {
        if (condition === 'Negative') {
            script = script_negative_arabic;
        }else if(condition === 'Positive'){
            script = script_positive_arabic; 
        } else {
            script = script_arabic; 
        }
    } else {
        script = script_arabic;
    }

    const tbody = document.getElementById("script-table-body");
    tbody.innerHTML = "";

    for (const category in script) {
        const value = script[category];
        const searchText = query.toLowerCase();
        
        if(query === '' || 
           category.toLowerCase().includes(searchText) || 
           value.toLowerCase().includes(searchText)) {
            
            const tr = document.createElement("tr");
            tr.classList.add("hover:bg-gray-50");

            const tdCategory = document.createElement("td");
            tdCategory.className = "px-6 py-4 text-center font-bold align-middle border border-gray-200";
            tdCategory.textContent = category;

            const tdScript = document.createElement("td");
            tdScript.className = "px-6 py-4 whitespace-pre-wrap align-middle border border-gray-200 relative group";

            const isArabic = /[\u0600-\u06FF]/.test(value);

            tdScript.style.direction = isArabic ? "rtl" : "ltr";
            tdScript.style.textAlign = isArabic ? "right" : "left";
            tdScript.textContent = value;

            const copyButton = document.createElement("button");
            copyButton.className = "copy-icon m-10 bg-gray-100 rounded-md transition-all duration-200 ease-in-out";
            copyButton.title = "Copy to clipboard";

            copyButton.style.display = "flex"; 
            copyButton.style.alignItems = "center"; 
            copyButton.style.padding = "0.25rem 0.5rem"; 
            copyButton.style.border = "1px solid #ccc"; 
            copyButton.style.cursor = "pointer"; 
            copyButton.style.borderRadius = "1.25rem"; 

            const copyIcon = document.createElement("img");
            copyIcon.src = "Images/copy.png";
            copyIcon.alt = "Copy";
            copyIcon.style.width = "26px";
            copyIcon.style.height = "26px";
            copyIcon.style.marginRight = "0.25rem"; 

            copyButton.appendChild(copyIcon);

            copyButton.addEventListener("click", (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(value)
                    .then(() => {
                        const originalSrc = copyIcon.src;
                        copyIcon.src = "Images/circle.png"; 
                        copyIcon.className = "w-4 h-4"; 
                        copyButton.classList.add("bg-green-100");
                        setTimeout(() => {
                            copyIcon.src = originalSrc;
                            copyButton.classList.remove("bg-green-100");
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                    });
            });

            tdScript.appendChild(copyButton);
            tr.appendChild(tdCategory);
            tr.appendChild(tdScript);
            tbody.appendChild(tr);
        }
    }

}

// Live Chat Scripts
function OpenScriptLiveChat(query = '') {
    const LiveChatbtn = document.getElementById("LiveChatbtn");
    LiveChatbtn.classList.add('bg-gray-200');
    localStorage.setItem("script", 'LiveChat');

    ResetButtons('LiveChat');

    const script_arabic = {
        'Welcome ترحيب -': "حياك الله عميلنا العزيز معك ## من شركة ناقل كيف أقدر أساعدك؟",
        'Ask for the customer name طلب اسم العميل /': "ممكن تزودني بالاسم من فضلك؟",
        'Moments please - لحظات من فضلك': "لحظات من فضلك أستاذ/ه ….، شاكرين انتظارك.",
        'Waiting إنتظار 1 /': "نحن هنا لخدمتك، بانتظار ردك.",
        'Waiting إنتظار 2 /': "عميلنا العزيز، لعدم وجود أي تفاعل خلال الدقائق الماضية، سيتم إغلاق المحادثة الآن. بإمكانك التواصل معنا في وقت آخر في حال لديك أي إستفسار، نشكر تواصلك",
        'Closure إغلاق 1/': "إذا عندك أي استفسار ثاني، أنا هنا لمساعدتك.",
        'Closure إغلاق 2 /': "شكرا لتواصلك مع خدمة عملاء ناقل، نتمنى لك يوم سعيد.",
        'أول رد': "حياك الله أ......... ،\n شكراً لتواصلك مع شركة ناقل. لو تكرمت تزودنا بتفاصيل طلبك أو استفسارك، لمساعدتك بشكل أسرع.\nوفي حال وجود شحنة مع شركة ناقل، فضلاً شاركنا بالبيانات التالية:\nرقم التتبع:\nالاسم الكريم: \nرقم التواصل: \nالعنوان:\n\nنقدر تعاونك معنا ونتطلع لخدمتك",
        'نموذج طلب البيانات': "حياك الله أستاذ/ه ..... ، \nشكراً لتواصلك مع شركة ناقل.\n\nلو تكرمت تشاركنا بالبيانات التالية لمساعدتك بشكل أفضل وأسرع\n\nرقم الشحنة:\nالاسم الكريم :\nرقم الهاتف:\nاسم المدينة:\nاسم الحي:\nالعنوان الوطني:\nتفاصيل الطلب- المشكلة:\n\n\nنقدر تعاونك معنا ونتطلع لخدمتك",
        '1 رفع طلب Raise a request': "شحنتك وصلت المستودع الموجود في منطقتك، وتم طلب توصيلها لك قريباً. ستصلك رسالة نصية في حال خروجها للتوصيل. مع العلم أنه يمكنك رفع طلب توصيل للشحنة عبر المساعد الرقمي بخطوات سهلة و واضحة",
        '2 رفع طلب Rasie a request': "نعتذر لانزعاجك، لقد تم إبلاغ القسم المختص بالإسراع في توصيل الشحنة وسوف يتم التواصل معك لتوصيلها في أقرب وقت بإذن الله.",
        'تصعيد / Escalation': "نعتذر منك و مقدرين موقفك، رفعنا تفاصيل المشكلة للقسم المختص وسيتم التواصل معك وتزويدك بالمستجدات في أقرب وقت.",
        'البيانات غير مطابقة / Data Not matching': "المعلومات غير متطابقة مع البيانات المسجلة على الشحنة. من فضلك تزويدنا بالمعلومات كما هي مسجلة على الشحنة لمطابقتها بشكل صحيح.",
        'Date Registered / الشحنة لم تصل لشركة ناقل': "الشحنة رقم () لم تستلم من شركة ناقل بعد وعند استلامها سيتم تزويدك برسالة نصية والتواصل معك في أقرب وقت بإذن الله.\n  كما يمكنك تتبع شحنتك عن طريق قنواتنا الرقمية في الموقع الإلكتروني، تطبيق الجوال، أو المساعد الرقمي",
        'خرجت للتوصيل / OFD': "شحنتك خرجت للتوصيل اليوم، الرجاء التأكد من أن هاتفك متاح للتواصل مع المندوب للتسليم بأسرع وقت ممكن.",
        'عدم وصول الشحنة للمستودع': "شحنتك رقم () تم استلامها من شركة ناقل، لكنها لم تصل للمستودع الموجود في منطقتك. سيتم التواصل معك مجرد وصولها للتسليم بأسرع وقت إن شاء الله. بإمكانك تتبع شحنتك بأي وقت عن طريق موقعنا، تطبيق الجوال، أو المساعد الرقمي.",
        'The shipment Tracking Link / رابط تتبع الشحنة': "بإمكانك تتبع شحنتك بكل سهولة من خلال قنواتنا الرقمية سواء عبر الموقع الإلكتروني، تطبيق الجوال، أو المساعد الرقمي: https://www.naqelexpress.com/",
        'Customs الجمارك /': "شحنتك حاليًا في المطار، من فضلك تزويدنا بالاسم الثلاثي، رقم الجوال، ورقم الهوية الوطنية في الخاص لإتمام الإجراءات.",
        'ASR Number / رقم الإسترجاع': "يرجى تزويدنا برقم الإرجاع المكون من (8) أو (9) خانات لمساعدتك بشكل أفضل.",
        'طلب رقم المندوب / Courier number': "من الواضح أن شحنتك () خارجة للتوصيل مع المندوب، وبيتواصل معك في حال وصوله لموقعك بإذن الله.",
        'OTP / رمز التسليم': "رمز التسليم يتم تسليمه للمندوب عند وصوله لضمان تأكيد تسليم الشحنة.",
        'طلب رفع شكوى / Raise a complaint': "نعتذر لإنزعاجك، يرجى تزويدنا برقم تتبع الشحنة وتفاصيل الشكوى من فضلك.",
        'Complaint request / تم رفع شكوى': "أستاذ/ه ..... ، نعتذر على أي إزعاج.\n تم تسجيل شكواك برقم (#####) والقسم المختص يعمل على حلها حالياً. نعمل على توصيل شحنتك بأسرع وقت ممكن.\n سيصلك تحديث عبر الرسائل النصية، وبإمكانك متابعة حالة الشكوى من خلال موقع ناقل - تتبع الشكاوى..",
        'Returned Shipments (RTO) / الشحنات المرتجعة': "حياك الله أستاذ/ه ..... ،\n\n  للأسف، تم استرجاع الشحنة إلى المصدر لعدم التمكن من تسليمها لك. وفي حال وجود أي استفسار بخصوصها يرجى التواصل مع الشركة المرسلة.\n \n إذا عندك أي استفسار ثاني، فريقنا بالخدمة.\n نتمنى لك يوم سعيد."
    };

    const script_english = {
        'Welcome ترحيب -': "Hello and welcome, dear customer, This is ( ) from Naqel. How may I assist you?",
        'Ask for the customer name طلب اسم العميل /': "May I have your name, please?",
        'Moments please - لحظات من فضلك': "Please hold on for a moment, Thank you for your patience.",
        'Waiting إنتظار 1 /': "We are waiting for your reply, dear customer",
        'Waiting إنتظار 2 /': "Dear customer, we have not received a response from you. Please feel free to contact us at any time if you have any inquiries.",
        'Closure إغلاق 1/': "Is there anything else we can assist you with today, dear customer?",
        'Closure إغلاق 2 /': "Thank you for contacting Naqel Customer Service, Have a nice day!",
        'أول رد': "Hello ..., Thank you for contacting Naqel Company. Please kindly provide us with the details of your request or inquiry to assist you faster.\nIn case you have a shipment with Naqel Company, please share the following data with us:\nTracking Number:\nFull Name:\nContact Number:\nAddress:\n\nWe appreciate your cooperation and look forward to serving you.",
        'نموذج طلب البيانات': "Hello Mr./Ms. ..., Thank you for contacting Naqel Company.\n\nPlease kindly share the following data with us to assist you better and faster:\n\nShipment Number:\nFull Name:\nPhone Number:\nCity Name:\nDistrict Name:\nNational Address:\nRequest/Problem Details:\n\n\nWe appreciate your cooperation and look forward to serving you.",
        '1 رفع طلب Raise a request': "Please be advised that your shipment has arrived at Naqel warehouse in your area. We have notified the concerned department to expedite its delivery, and it will be delivered to you as soon as possible. You will receive a text message when the shipment goes out for delivery.",
        '2 رفع طلب Rasie a request': "We apologize for any inconvenience caused. We have notified the concerned department to expedite the shipment delivery. We will contact you for the delivery as soon as it is available.",
        'تصعيد / Escalation': "We apologize for your inconvenience. The shipment has been escalated to the relevant department. It will be followed up and delivered as soon as possible.",
        'البيانات غير مطابقة / Data Not matching': "The information does not match the data registered for the shipment. Please provide us with the information as it is listed on the shipment so that we can accurately match it.",
        'Date Registered / الشحنة لم تصل لشركة ناقل': "Shipment No. () has not yet been received from Naqel Company. You will be notified via a text message when we receive the number and we will contact you soon after that.You can also track your shipment through our digital tools on the website, mobile application, or digital assistant.",
        'خرجت للتوصيل / OFD': "Please note that your shipment is out for delivery today. Kindly keep your phone nearby to receive delivery updates from the courier.",
        'عدم وصول الشحنة للمستودع': "Please be informed that we have received your shipment with tracking number () at Naqel. However, it has not yet reached your local warehouse. We will contact you as soon as it arrives to deliver it to you promptly. Thank you for your patience. You can also track your shipment through our digital tools on the website, mobile application, or Chatbot.",
        'The shipment Tracking Link / رابط تتبع الشحنة': "Please note that you can track your shipment through our digital tools on the website, mobile application, or Chatbot. Website link: https://www.naqelexpress.com/",
        'Customs الجمارك /': "Please provide your full name, phone number, and national ID number for clearance as your shipment is currently in the airport.",
        'ASR Number / رقم الإسترجاع': "Please provide us with the return waybill number consisting of (8) or (9) in order for us to better assist you.",
        'طلب رقم المندوب / Courier number': "It appears that your package is still on its way for delivery. The courier will contact you as soon as they arrive at your location.",
        'OTP / رمز التسليم': "Upon arrival, the courier must be provided with the delivery code to confirm shipment delivery.",
        'طلب رفع شكوى / Raise a complaint': "We apologize for any inconvenience, Please provide us the waybill number, and the complaint details.",
        'Complaint request / تم رفع شكوى': "Your complaint is our concern. A complaint has been registered under the following reference number (#####), and it will be followed up by the relevant department. We will endeavor to deliver the shipment to you as soon as possible, You will be updated on the status of the complaint via SMS from NAQEL, and you can also track the complaint by the shipment number or complaint number through NAQEL website - Complaint Tracking.",
        'Returned Shipments (RTO) / الشحنات المرتجعة': "Dear customer,\n \n We are sorry to inform you that the shipment was returned, because it wasn't possible to deliver it to you, and if there are any inquiries regarding it, please contact the original company.\n \n Please do not hesitate to contact us if you have any further inquiries.\n We wish you a happy day."
    };

    const script_negative_arabic = {
        '2 رفع طلب Rasie a request': "نعتذر لانزعاجك، لقد تم إبلاغ القسم المختص بالإسراع في توصيل الشحنة وسوف يتم التواصل معك لتوصيلها في أقرب وقت بإذن الله.",
        'تصعيد / Escalation': "نعتذر منك و مقدرين موقفك، رفعنا تفاصيل المشكلة للقسم المختص وسيتم التواصل معك وتزويدك بالمستجدات في أقرب وقت.",
        'طلب رفع شكوى / Raise a complaint': "نعتذر لإنزعاجك، يرجى تزويدنا برقم تتبع الشحنة وتفاصيل الشكوى من فضلك.",
        'Complaint request / تم رفع شكوى': "أستاذ/ه ..... ، نعتذر على أي إزعاج.\n تم تسجيل شكواك برقم (#####) والقسم المختص يعمل على حلها حالياً. نعمل على توصيل شحنتك بأسرع وقت ممكن.\n سيصلك تحديث عبر الرسائل النصية، وبإمكانك متابعة حالة الشكوى من خلال موقع ناقل - تتبع الشكاوى..",
    }

     const script_negative_english = {
        '2 رفع طلب Rasie a request': "We apologize for any inconvenience caused. We have notified the concerned department to expedite the shipment delivery. We will contact you for the delivery as soon as it is available.",
        'تصعيد / Escalation': "We apologize for your inconvenience. The shipment has been escalated to the relevant department. It will be followed up and delivered as soon as possible.",
        'طلب رفع شكوى / Raise a complaint': "We apologize for any inconvenience, Please provide us the waybill number, and the complaint details.",
        'Complaint request / تم رفع شكوى': "Your complaint is our concern. A complaint has been registered under the following reference number (#####), and it will be followed up by the relevant department. We will endeavor to deliver the shipment to you as soon as possible, You will be updated on the status of the complaint via SMS from NAQEL, and you can also track the complaint by the shipment number or complaint number through NAQEL website - Complaint Tracking.",
    }

    const script_positive_arabic = {
        '1 + Positive Mention Feedback - تعليق ايجابي':"حياك الله وشكرًا لتواصلك معنا، يسعدنا معرفة أنك راضٍ عن تجربتك معنا🙏🏼. طاب يومك.",     
        '2 + Positive Mention Feedback - تعليق ايجابي':"حياك الله، سعداء أن تجربتك مع ناقل كانت مميزة! شكراً لملاحظاتك اللي تساعدنا للاستمرار في تقديم الأفضل🙏🏼.",
    }

    const script_positive_english = {
        '1 + Positive Mention Feedback - تعليق ايجابي':"Thank you for contacting us, We appreciate you being a customer of the Naqel company.🙏🏼",
        '2 + Positive Mention Feedback - تعليق ايجابي':"Thank you for your valuable feedback. We appreciate you being our customer and we are thrilled to know that you are having a great experience with Naqel Express.🙏🏼",
    }

    let Language = localStorage.getItem("lang") || '';
    let condition = localStorage.getItem("Conditions") || '';
    let script = '';

    if (Language !== '' && condition !== '') {
        if (Language === 'عربي') {
            if (condition === 'Negative') {
                script = script_negative_arabic;
            } else if (condition === 'Positive') {
                script = script_positive_arabic;
            } else if (condition === 'All' || condition === 'Neutral') {
                script = script_arabic;
            }
        } else if (Language === 'English') {
            if (condition === 'Negative') {
                script = script_negative_english;
            } else if (condition === 'Positive') {
                script = script_positive_english;
            } else if (condition === 'All' || condition === 'Neutral') {
                script = script_english;
            }
        }
    } else if (Language !== '' && condition === '') {
        if (Language === 'عربي') {
            script = script_arabic;
        } else if (Language === 'English') {
            script = script_english;
        }
    } else if (Language === '' && condition !== '') {
        if (condition === 'Negative') {
            script = script_negative_arabic;
        }else if(condition === 'Positive'){
            script = script_positive_arabic; 
        } else {
            script = script_arabic; 
        }
    } else {
        script = script_arabic;
    }

    const tbody = document.getElementById("script-table-body");
    tbody.innerHTML = "";

    for (const category in script) {
        const value = script[category];
        const searchText = query.toLowerCase();
        
        if(query === '' || 
           category.toLowerCase().includes(searchText) || 
           value.toLowerCase().includes(searchText)) {
            
            const tr = document.createElement("tr");
            tr.classList.add("hover:bg-gray-50");

            const tdCategory = document.createElement("td");
            tdCategory.className = "px-6 py-4 text-center font-bold align-middle border border-gray-200";
            tdCategory.textContent = category;

            const tdScript = document.createElement("td");
            tdScript.className = "px-6 py-4 whitespace-pre-wrap align-middle border border-gray-200 relative group";

            const isArabic = /[\u0600-\u06FF]/.test(value);

            tdScript.style.direction = isArabic ? "rtl" : "ltr";
            tdScript.style.textAlign = isArabic ? "right" : "left";
            tdScript.textContent = value;

            const copyButton = document.createElement("button");
            copyButton.className = "copy-icon m-10 bg-gray-100 rounded-md transition-all duration-200 ease-in-out";
            copyButton.title = "Copy to clipboard";

            copyButton.style.display = "flex"; 
            copyButton.style.alignItems = "center"; 
            copyButton.style.padding = "0.25rem 0.5rem"; 
            copyButton.style.border = "1px solid #ccc"; 
            copyButton.style.cursor = "pointer"; 
            copyButton.style.borderRadius = "1.25rem"; 

            const copyIcon = document.createElement("img");
            copyIcon.src = "Images/copy.png";
            copyIcon.alt = "Copy";
            copyIcon.style.width = "26px";
            copyIcon.style.height = "26px";
            copyIcon.style.marginRight = "0.25rem"; 

            copyButton.appendChild(copyIcon);

            copyButton.addEventListener("click", (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(value)
                    .then(() => {
                        const originalSrc = copyIcon.src;
                        copyIcon.src = "Images/circle.png"; 
                        copyIcon.className = "w-4 h-4"; 
                        copyButton.classList.add("bg-green-100");
                        setTimeout(() => {
                            copyIcon.src = originalSrc;
                            copyButton.classList.remove("bg-green-100");
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                    });
            });

            tdScript.appendChild(copyButton);
            tr.appendChild(tdCategory);
            tr.appendChild(tdScript);
            tbody.appendChild(tr);
        }
    }
}

// Call Issue Script
function OpenScriptCallIssue(query = '') {
    const CallIssuebtn = document.getElementById("CallIssuebtn");
    CallIssuebtn.classList.add('bg-gray-200');
    localStorage.setItem("script", 'CallIssue');

    ResetButtons('CallIssue');

    const script_arabic = {
        'Technical Issues': "عزيزنا العميل ، \nيواجه مركز الاتصال لدينا حاليًا صعوبات تقنية ، و فريقنا يعمل على حلها بأسرع وقت . \nفي هذه الأثناء، نسعد بتلقي استفساراتكم عبر وسائل التواصل الاجتماعي، أو برنامج الدردشة الآلي الخاص بموقعنا الإلكتروني أو الواتساب ، أو تطبيق الهاتف المحمول الخاص بنا للحصول على المساعدة. \nيمكنك أيضًا مراسلتنا عبر البريد الإلكتروني على care@naqel.com.sa \nشكرا لكم.",
    };

    const script_english = {
        'Technical Issues': "Dear Customer , \nWe apologize for the inconvenience. Our call center is currently experiencing technical difficulties, but rest assured, our team is actively resolving the issue. \nIn the meantime, please reach out to us through social media, our website's chat-bot, or our mobile app for assistance. You can also email us at care@naqel.com.sa"
    };

    let Language = localStorage.getItem("lang") || '';
    let script = '';

    if(Language === 'عربي'){
        script = script_arabic;
    }else{
        script = script_english;
    }

    const tbody = document.getElementById("script-table-body");
    tbody.innerHTML = "";

    for (const category in script) {
        const value = script[category];
        const searchText = query.toLowerCase();
        
        if(query === '' || 
           category.toLowerCase().includes(searchText) || 
           value.toLowerCase().includes(searchText)) {
            
            const tr = document.createElement("tr");
            tr.classList.add("hover:bg-gray-50");

            const tdCategory = document.createElement("td");
            tdCategory.className = "px-6 py-4 text-center font-bold align-middle border border-gray-200";
            tdCategory.textContent = category;

            const tdScript = document.createElement("td");
            tdScript.className = "px-6 py-4 whitespace-pre-wrap align-middle border border-gray-200 relative group";

            const isArabic = /[\u0600-\u06FF]/.test(value);

            tdScript.style.direction = isArabic ? "rtl" : "ltr";
            tdScript.style.textAlign = isArabic ? "right" : "left";
            tdScript.textContent = value;

            const copyButton = document.createElement("button");
            copyButton.className = "copy-icon m-10 bg-gray-100 rounded-md transition-all duration-200 ease-in-out";
            copyButton.title = "Copy to clipboard";

            copyButton.style.display = "flex"; 
            copyButton.style.alignItems = "center"; 
            copyButton.style.padding = "0.25rem 0.5rem"; 
            copyButton.style.border = "1px solid #ccc"; 
            copyButton.style.cursor = "pointer"; 
            copyButton.style.borderRadius = "1.25rem"; 

            const copyIcon = document.createElement("img");
            copyIcon.src = "Images/copy.png";
            copyIcon.alt = "Copy";
            copyIcon.style.width = "26px";
            copyIcon.style.height = "26px";
            copyIcon.style.marginRight = "0.25rem"; 

            copyButton.appendChild(copyIcon);

            copyButton.addEventListener("click", (e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(value)
                    .then(() => {
                        const originalSrc = copyIcon.src;
                        copyIcon.src = "Images/circle.png"; 
                        copyIcon.className = "w-4 h-4"; 
                        copyButton.classList.add("bg-green-100");
                        setTimeout(() => {
                            copyIcon.src = originalSrc;
                            copyButton.classList.remove("bg-green-100");
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                    });
            });

            tdScript.appendChild(copyButton);
            tr.appendChild(tdCategory);
            tr.appendChild(tdScript);
            tbody.appendChild(tr);
        }
    }
}


