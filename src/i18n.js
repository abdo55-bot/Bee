import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    resources:{
        en:{
           translation:{
            DigitalMarketing:"DigitalMarketing",
            Home:"Home",
            tickets:"tickets",
            login:"login",
            createaccount:"create account",
            Learnfromthemostimportantexpertsinallfields:"Learn from the most important experts in all fields",
            Donotmisstheopportunitytoattendthemostimportanteventsandobtainthecoursesatthelowestprices:"Do not miss the opportunity to attend the most important events and obtain the courses at the lowest prices",
            startnow:"start now",
            Ahmedmahmoud:"Ahmedmahmoud",
            Expertinelectronicmarketing:"Expert in electronic marketing",
            MasterdigitalmarketingandenhanceyourcareerpathbypossessingthemostskillsDemandinthelabormarket:"Master digital marketing and enhance your career path by possessing the most skills Demand in the labor market",
            Gotothecourse:"Go to the course",
            Watchalltheevents:"Watch all the events",
            Viewallcommunities:"View all communities",
            privacypolicy:"privacy policy",
            whoarewe:"who are we",
            Copyright:"Copyright",
            AllReservedRights:"All Reserved Rights"
           }
        },
        ar:{
            translation:{
                DigitalMarketing:"التسويق الرقمي",
                Home:"الرئيسية",
                tickets:"التذاكر",
                login:"تسجيل دخول",
                createaccount:"إنشاء حساب",
                Learnfromthemostimportantexpertsinallfields:"تعلم من أهم الخبراء فى جميع المجالات",
                Donotmisstheopportunitytoattendthemostimportanteventsandobtainthecoursesatthelowestprices:"لاتفوت فرصة حضور اهم الاحداث و الحصول علي الدورات باقل الاسعار",
                startnow:"ابدأ الان",
                Ahmedmahmoud:"احمد محمود",
                Expertinelectronicmarketing:"خبير فى التسويق الالكترونى",
                MasterdigitalmarketingandenhanceyourcareerpathbypossessingthemostskillsDemandinthelabormarket:"	احترف التسويق الرقمى و عزز مسارك المهنى بامتلاك المهارة الاكثر طلبا فى سوق العمل",
                Gotothecourse:"اذهب الى الدورة",
                Watchalltheevents:"شاهد كل الاحداث ",
                Viewallcommunities:"شاهد كل المجتمعات",
                privacypolicy:"سياسة الخصوصية",
                whoarewe:"من نحن",
                Copyright:"حقوق النشر",
                AllReservedRights:"جميع الحقوق محفوظة"



               }
        }
    }
})