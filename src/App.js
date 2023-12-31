import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import MenuOfNav from "./components/navbar/MenuOfNav";
import MainPage from "./pages/mainPage/MainPage";
import BaseInfo from "./pages/about/baseInfo/BaseInfo";
import Footer from "./components/footer/Footer";
import { useTranslation } from "react-i18next";
import Videos from "./ReusableComponents/vids/Videos";
import { useContext, useEffect, useState } from "react";
import Stats from "./ReusableComponents/stats/Stats";
import About from "./pages/about/About";
import Brand from "./pages/about/brand/Brand";
import Partners from "./pages/about/partners/Partners";
import Structure from "./pages/about/structure/Structure";
import WorkerSingle from "./pages/about/structure/WorkerSingle";
import Statistics from "./pages/about/statistics/Statistics";
import Services from "./pages/services/Services";
import OurServices from "./pages/services/ourServices/OurServices";
import ForOrgs from "./pages/services/ourServices/forOrgs/forOrgs";
import ForUsers from "./pages/services/ourServices/forUsers/ForUsers";
import Migration from "./pages/services/migration/Migration";
import Grants from "./pages/services/grants/Grants";
import Projects from "./pages/services/projects/Projects";
import Blog from "./pages/blog/Blog";
import Researches from "./pages/blog/researches/Researches";
import Articles from "./pages/blog/articles/Articles";
import Calendar from "./pages/blog/calendar/Calendar";
import Classification from "./pages/blog/profClassification/Classification";
import Profesiograma from "./pages/blog/profesiograma/Profesiograma";
import VideoLessons from "./pages/blog/videoLessons/VideoLessons";
import Media from "./pages/media/Media";
import Gallery from "./pages/media/gallery/Gallery";
import News from "./pages/media/news/News";
import Vacancy from "./pages/Vacancy/Vacancy";
import PublicInformation from "./pages/publicInfromation/PublicInformation";
import Law from "./pages/publicInfromation/law/Law";
import Kanonebi from "./pages/publicInfromation/law/Kanonebi";
import Dadgenilebebi from "./pages/publicInfromation/law/Dadgenilebebi";
import Konvenciebi from "./pages/publicInfromation/law/Kovenciebi";
import Brdzanebebi from "./pages/publicInfromation/law/Brdzanebebi";
import Information from "./pages/publicInfromation/information/Information";

import Contact from "./pages/contactUs/Contact";
import Registered from "./pages/about/partners/registered/Registrered";
import NonRegistered from "./pages/about/partners/nonRegistered/NonRegistered";
import Register from "./pages/Register/Register";
import Jan from "./pages/blog/calendar/months/Jan";
import Feb from "./pages/blog/calendar/months/Feb";
import Mar from "./pages/blog/calendar/months/Mar";
import Apr from "./pages/blog/calendar/months/Apr";
import May from "./pages/blog/calendar/months/May";
import June from "./pages/blog/calendar/months/June";
import July from "./pages/blog/calendar/months/July";
import Test from "./Test";
import NewsSingle from "./pages/media/news/NewsSingle";
import ArticlesSingle from "./pages/blog/articles/ArticlesSingle";
import VideoLessonsSingle from "./pages/blog/videoLessons/VideoLessonsSingle";
import VacancySingle from "./pages/Vacancy/VacancySingle";
import ProfesiogramaTypeSingle from "./pages/blog/profesiograma/ProfesiogramaTypeSingle";
import ProfesiogramaSingle from "./pages/blog/profesiograma/ProfesiogramaSingle";
import ProjectsSingle from "./pages/services/projects/ProjectsSingle";
import GrantsSingle from "./pages/services/grants/GrantsSingle";
import PartnerSingle from "./pages/about/partners/PartnerSingle";
import MigrationSIngle from "./pages/services/migration/MigrationSIngle";
import Article from "./pages/blog/articles/Article";
import CalendarSingle from "./pages/blog/calendar/CalendarSingle";
import ClassificationSingle from "./pages/blog/profClassification/ClassificationSingle";
import VideoLesson from "./pages/blog/videoLessons/VideoLesson";
// import './cardAlignment.scss'
import Privacy from "./pages/Register/privacy/Privacy";
import GallerySingle from "./pages/media/gallery/GallerySingle";
import Guide from "./pages/Guide/Guide";
import QnA from "./pages/Guide/QnA/QnA";
import Manual from "./pages/Guide/userManual/Manual";
import StructureOfSite from "./pages/Guide/siteStruct/StructureOfSite";
import GrantsTypeSingle from "./pages/services/grants/GrantsTypeSingle";
import ResearchSingle from "./pages/blog/researches/ResearchSingle";
import Verify from "./pages/Register/Verify";
import User from "./pages/user/User";
import Cabinet from "./pages/user/cabinet/Cabinet";
import Profile from "./pages/user/profile/Profile";
import Inbox from "./pages/user/cabinet/inbox/Inbox";
import Vacancies from "./pages/user/cabinet/vacancies/Vacancies";
import MyVacancies from "./pages/user/cabinet/MyVacancies";
import CV from "./pages/user/cv/CV";
import StatisticsCab from "./pages/user/cabinet/stats/Statistics";
import OtherDetails from "./pages/user/otherDetailsCv/OtherDetails";
import VacAdd from "./pages/user/cabinet/vacancyAdd/vac/VacAdd";
import EduAdd from "./pages/user/cabinet/vacancyAdd/edu/EduAdd";
import Skeletons from "./ReusableComponents/Skeletons";
import Loading from "./ReusableComponents/loadingPage/Loading";
import Err from "./ReusableComponents/Err";
import ProjectsSingleForm from "./pages/services/projects/ProjectsSingleForm";
import { AuthenticationContext } from "./AuthenticationContext";
import FamilyWork from "./pages/user/famWork/FamilyWork";
import FamCabinet from "./pages/user/famWork/FamCabinet";
import PassChange from "./pages/Register/PassChange";

function App() {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  let fontPrimary = "Georgian Primary"; // Default font
  if (selectedLanguage === "en") {
    fontPrimary = "Poppins";
  }
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/main") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location]);
  var Scroll = require("react-scroll");
  var scroll = Scroll.animateScroll;
  useEffect(() => {
    scroll.scrollToTop();
  }, [scroll, location]);
  const { signIn, isAuthenticated } = useContext(AuthenticationContext);
  return (
    <div
      style={{
        fontFamily: `${fontPrimary}, sans-serif`,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <MenuOfNav />
      <div className="site_container">
        <div className="app_wrapper">
          <Routes>
            <Route index path="/main" element={<MainPage />} />
            {/* about */}
            <Route path="/about" element={<About />} />
            <Route path="/about/baseInfo" element={<BaseInfo />} />
            <Route path="/about/brand" element={<Brand />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route
              path="/about/partners/employers/:id"
              element={<PartnerSingle />}
            />
            <Route
              path="/about/partners/ourPartners/:id"
              element={<PartnerSingle />}
            />
            <Route path="/about/partners/employers" element={<Registered />} />
            <Route
              path="/about/partners/ourPartners"
              element={<NonRegistered />}
            />
            <Route path="/about/structure" element={<Structure />} />
            <Route path="/about/statistics" element={<Statistics />} />
            <Route path="/about/structure/:id" element={<WorkerSingle />} />
            {/* services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/ourServices" element={<OurServices />} />
            <Route path="/services/grants" element={<Grants />} />
            <Route
              path="/services/grants/:type"
              element={<GrantsTypeSingle />}
            />
            <Route
              path="/services/grants/:type/:id"
              element={<GrantsSingle />}
            />
            <Route path="/services/projects" element={<Projects />} />
            <Route path="/services/projects/:id" element={<ProjectsSingle />} />
            <Route
              path="/services/projects/:id/form"
              element={<ProjectsSingleForm />}
            />
            <Route
              path="/services/projects/shes/:id"
              element={<ResearchSingle />}
            />
            <Route path="/services/migration" element={<Migration />} />
            <Route
              path="/services/migration/:id"
              element={<MigrationSIngle />}
            />
            <Route path="/services/ourServices/forOrgs" element={<ForOrgs />} />
            <Route
              path="/services/ourServices/forUsers"
              element={<ForUsers />}
            />
            {/* blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/articles" element={<Articles />} />
            <Route path="/blog/articles/:type" element={<ArticlesSingle />} />
            <Route path="/blog/articles/:type/:id" element={<Article />} />
            <Route path="/blog/calendar" element={<Calendar />} />
            {/* ----> calendar */}
            <Route
              path="/blog/calendar/:month/:id"
              element={<CalendarSingle />}
            />

            <Route path="/blog/calendar/jan" element={<Apr />} />
            <Route path="/blog/calendar/feb" element={<Apr />} />
            <Route path="/blog/calendar/mar" element={<Apr />} />
            <Route path="/blog/calendar/apr" element={<Apr />} />
            <Route path="/blog/calendar/may" element={<Apr />} />
            <Route path="/blog/calendar/june" element={<Apr />} />
            <Route path="/blog/calendar/july" element={<Apr />} />

            <Route path="/blog/classification" element={<Classification />} />
            <Route
              path="/blog/classification/:id"
              element={<ClassificationSingle />}
            />
            <Route path="/blog/profesiograma" element={<Profesiograma />} />
            <Route
              path="/blog/profesiograma/:id"
              element={<ProfesiogramaTypeSingle />}
            />
            <Route
              path="/blog/profesiograma/:id/:id"
              element={<ProfesiogramaSingle />}
            />
            <Route path="/blog/researches" element={<Researches />} />
            <Route path="/blog/researches/:id" element={<ResearchSingle />} />
            <Route path="/blog/lessons" element={<VideoLessons />} />
            <Route
              path="/blog/lessons/:type"
              element={<VideoLessonsSingle />}
            />
            <Route path="/blog/lessons/:type/:id" element={<VideoLesson />} />
            {/* media */}
            <Route path="/media" element={<Media />} />
            <Route path="/media/gallery" element={<Gallery />} />
            <Route path="/media/gallery/:id" element={<GallerySingle />} />
            <Route path="/media/news" element={<News />} />
            <Route path="/media/news/:id" element={<NewsSingle />} />
            {/* vacancy */}
            <Route path="/vacancy" element={<Vacancy />} />
            <Route path="/vacancy/:id" element={<VacancySingle />} />
            {/* QnA */}
            <Route path="/guide" element={<Guide />} />
            <Route path="/guide/qA" element={<QnA />} />
            <Route path="/guide/userManual" element={<Manual />} />
            <Route path="/guide/siteStructure" element={<StructureOfSite />} />

            {/* pubInfo */}
            <Route path="/pubInfo" element={<PublicInformation />} />
            <Route path="/pubInfo/law" element={<Law />} />
            <Route path="/pubInfo/law/Kanonebi" element={<Kanonebi />} />
            <Route
              path="/pubInfo/law/Dadgenilebebi"
              element={<Dadgenilebebi />}
            />
            <Route path="/pubInfo/law/Konvenciebi" element={<Konvenciebi />} />
            <Route path="/pubInfo/law/Brdzanebebi" element={<Brdzanebebi />} />
            <Route path="/pubInfo/information" element={<Information />} />

            {/* contact */}
            <Route path="/contact" element={<Contact />} />
            {/* register */}
            <Route path="/register" element={<Register />} />
            <Route path="/register/verify" element={<Verify />} />
            <Route path="/passchange" element={<PassChange />} />
            <Route path="/register/privacy" element={<Privacy />} />
            <Route path="/test" element={<Test />} />
            {/*userr*/}
            {isAuthenticated && (
              <>
                <Route path="/user" element={<User />} />
                <Route path="/user/cabinet" element={<Cabinet />} />
                <Route path="user/CV" element={<CV />} />
                <Route path="user/otherDetails" element={<OtherDetails />} />
                <Route path="/user/cabinet/inbox" element={<Inbox />} />
                <Route path="user/cabinet/vacancies" element={<Vacancies />} />
                <Route path="user/cabinet/vacAdd" element={<VacAdd />} />
                <Route path="user/cabinet/eduAdd" element={<EduAdd />} />
                <Route
                  path="user/cabinet/myVacancies"
                  element={<MyVacancies />}
                />
                <Route
                  path="/user/cabinet/statistics"
                  element={<StatisticsCab />}
                />
                <Route path="/user/profile" element={<Profile />} />
                <Route path="/familyWork" element={<FamilyWork />} />
                <Route path="/familyWork/cabinet" element={<FamCabinet />} />
              </>
            )}

            {/* components */}
            <Route path="/skeletons" element={<Skeletons />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="*" element={<Err />} />
          </Routes>
        </div>
        <div className="videos_wrapper">
          {isOpen && (
            <>
              <Videos /> <Stats />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
