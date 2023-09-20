// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      main: 'Main',
      versionForBlind: 'Version for people with poor vision',
      about: "About",
      baseInfo: "Base information",
      brand : 'Brand',
      structure: "Structure",
      gallery: "Gallery",
      news: "News",
      ourServices: 'Our Services',
      partners: "Partners",
      projects: "Projects",
      stats: "Statistics",
      researches: "Researches",
      aboutServices: "About our Services",
      services: "Services",
      grants: "Grants and programmes",
      migration: "Migration",
      career: "Career",
      blog: "Blog",
      articles: "Articles",
      lessons: "Lessons",
      profesiograma: "Profession",
      classification: "Classification",
      calendar: "Calendar",
      media : "Media",
      vacancy : "Vacancy",
      employement: 'Employement',
      internship: 'Internship',
      volunteering: 'Volunteering',
      familyWork: 'Work in families',
      guide: "Guide",
      instructions: "Instructions",
      qA:"Q&A",
      userManual: 'User Manual',
      siteStructure: 'Stie Structure',
      contacts: "Contact us",
      pubInfo: "Public Information",
      publicInformation: "Public Information",
      Information: "Public Information",
      law: 'Law',
      kanonebi: 'Laws',
      dadgenilebebi: 'Resolutions',
      brdzanebebi: 'Orders',
      konvenciebi: 'Ratified Conventions',

      conference: 'Conference',
      lectures: 'Lectures',
      professional: 'Professional knowledge',
      trainings: 'Trainings',
      //mainpage
      companies: "Companies",
      seekers: "Seekers",
      activePlaces: "Active workplaces",
      alreadyWorks: "Already works",
      adviceTaken: "Advice taken",
      educationalProgrammes: "Educational Programmes",
      statements: 'Statements',
      //strucure
      agencyStructure: 'Agency Structure',
      worker: 'Team member',
      position : "Position",
      nameSurname: "Name, Surname",
      username: "Username",
      //researches
      name: 'Name',
      view: 'View',
      date : 'Date',
      //months
      jan:'January',
      feb:'February',
      mar:'March',
      apr:'April',
      may:'May',
      jun:'June',
      jul:'July',
      //back
      back: 'Back',
      //some other things
      employers: 'Employers',
      ourPartners: 'Our Partners',
      employement: "Employement",
      educational : "Educational",
      //user
      user: 'User',
      profile: 'Profile',
      cabinet: 'Cabinet'
      
    },
  },
  ge: {
    translation: {
      main: 'მთავარი',
      versionForBlind: 'ვერსია სუსტი მხედველობის მქონე პირთათვის',
      about: "ჩვენს შესახებ",
      baseInfo: "მთავარი ინფორმაცია",
      brand : 'ბრენდი',
      structure: "სტრუქტურა",
      ourServices: 'ჩვენი სერვისები',
      gallery: "გალერეა",
      news: "ახალი ამბები",
      partners: "პარტნიორები",
      projects: "პროექტები",
      stats: "სტატისტიკა",
      researches: "კვლევები",
      aboutServices: "სერვისების შესახებ",
      services: "სერვისები",
      grants: "გრანტები და პროგრამები",
      migration: "მიგრაცია",
      blog: "შემეცნებითი ბლოგი",
      forOrg: "ორგანიზაციებს",
      forUsers: "მაძიებელს",
      articles: "სტატიები",
      lessons: "გაკვეთილები",
      profesiograma: "პროფესიოგრამა",
      classification: "კლასიფიკაცია",
      calendar: "კალენდარი",
      media : "მედია",
      vacancy : "ვაკანსია",
      employement: 'დასაქმება',
      internship: 'სტაჟირება',
      volunteering: 'მოხალისეობა',
      familyWork: 'ოჯახში დასაქმება',
      guide: "გზამკვლევი",
      instructions: "ინსტრუქციები",
      qA:"კითხვა-პასუხი",
      siteStructure: 'საიტის სტრუქტურა',
      userManual: 'სარგებლობის ინსტრუქცია',
      contacts: "კონტაქტები",
      pubInfo: "საჯარო ინფორმაცია",
      publicInformation: "საჯარო ინფორმაცია",
      Information: 'საჯარო ინფორმაცია',
      Law: 'კანონმდებლობა',
      law: 'კანონმდებლობა',
      kanonebi: 'კანონები',
      dadgenilebebi: 'დადგენილებები',
      brdzanebebi: 'ბრძანებები',
      konvenciebi: 'რატიფიცირებული კონვენციები',
      conference: 'კონფერენცია',
      lectures: 'სემინარები',
      professional: 'პროფესიული სასწავლებელი',
      trainings: 'ტრენინგები',
      forOrgs : 'ორგანიზაციებისთვის',
      statistics: 'სტატისტიკა',
      contact: 'კონტაქტი',
      Registered: 'ავტორიზირებული',
      NonRegistered: 'გარეშე პარტნიორები',
      //mainpage
      companies: "კომპანია",
      seekers: "მაძიებელი",
      activePlaces: "აქტიური ვაკანსია",
      alreadyWorks: "უკვე დასაქმდა",
      adviceTaken: "მიიღო კონსულტაცია",
      educationalProgrammes: "საგანმანათლებლო პროგრამები",
      statements: 'განცხადებები',
      //strucure
      agencyStructure: 'სააგენტოს სტრუქტურა',
      worker: 'გუნდის წევრი',
      position : "პოზიცია",
      nameSurname: "სახელი, გვარი",
      username: "მეტსახელი",
      //researches
      name: 'სახელი',
      view: 'ნახვა',
      date : 'თარიღი',
      //months
      jan:'იანვარი',
      feb:'თებერვალი',
      mar:'მარტი',
      apr:'აპრილი',
      may:'მაისი',
      jun:'ივნისი',
      jul:'ივლისი',
      //back
      back: 'უკან',
      //some other things
      employers: 'დამსაქემებელი',
      ourPartners: 'ჩვენი პარტნიორები',
      employement: "დასაქმება",
      educational : "საგანმანათლებლო",
      //user
      user: 'მომხმარებელი',
      profile: 'პროფილი',
      cabinet: 'კაბინეტი'
    },
  },
  // Add more languages and translations as needed
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ge", // Default language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
