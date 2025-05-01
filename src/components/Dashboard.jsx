import { Routes, Route, Navigate, Router } from "react-router-dom";
import HardCoverFiction from "./HardCoverFiction";
import HardCoverNonFiction from "./HardCoverNonFiction";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SingleBook from "./SingleBook";
import BookDetails from "./BookDetails";
import HardCoverAdvice from "./HardCoverAdvice";
import HardCoverYoungAdult from "./HardCoverYoungAdult";
import HardCoverChildrensMiddleGrade from "./HardCoverChildrensMiddleGrade";
import PaperbackTradeFiction from "./PaperbackTradeFiction";
import PaperbackMassMarket from "./PaperbackMassMarket";
import PaperbackAdvice from "./PaperbackAdvice";
import PaperbackChildrensMiddleGrade from "./PaperbackChildrensMiddleGrade";
import PaperbackYoungAdult from "./PaperbackYoungAdult";
import EBookNonFiction from "./EBookNonFiction";
import EBookFiction from "./EBookFiction";
import MiscellaneousAdvice from "./MiscellaneousAdvice";
import BusinessBooks from "./BusinessBooks";
import Sports from "./Sports";
import Travel from "./Travel";
import EBookFiction1 from "./EbookFiction1";
import PaperbackNonFiction from "./PaperbackNonFiction";
import BookList from "./BookList";
import GoogleBookCard from "./GoogleBookCard";
import AuthForm from "./AuthForm";
import NotificationBell from "./NotificationBell";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64"} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div className="py-8 px-8 ml-32">
        <Routes>
          <Route index element={<Navigate to="/hardcover_fiction" replace />} />
          <Route path="/hardcover_fiction" element={<HardCoverFiction />} />
          <Route
            path="/hardcover_nonfiction"
            element={<HardCoverNonFiction />}
          />
          <Route path="/hardcover_advice" element={<HardCoverAdvice />} />
          <Route path="/paperback_advice" element={<PaperbackAdvice />} />
          <Route path="/e_book_nonfiction" element={<EBookNonFiction />} />
          <Route path="/e_book_fiction" element={<EBookFiction />} />
          <Route path="/business_books" element={<BusinessBooks />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/books_search" element={<BookList />} />
          <Route path="/google_book/:id" element={<GoogleBookCard />} />
          <Route
            path="/paperback_nonfiction"
            element={<PaperbackNonFiction />}
          />
          <Route
            path="/advice_how_to_and_miscellaneous"
            element={<MiscellaneousAdvice />}
          />
          <Route
            path="/young_adult_paperback"
            element={<PaperbackYoungAdult />}
          />
          <Route
            path="/childrens_middle_grade_paperback"
            element={<PaperbackChildrensMiddleGrade />}
          />
          <Route
            path="/mass_market_paperback"
            element={<PaperbackMassMarket />}
          />
          <Route
            path="/trade_fiction_paperback"
            element={<PaperbackTradeFiction />}
          />
          <Route
            path="/childrens_middle_grade_hardcover"
            element={<HardCoverChildrensMiddleGrade />}
          />
          <Route
            path="/young_adult_hardcover"
            element={<HardCoverYoungAdult />}
          />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </div>
    </div>

    // <div className="ml-56 py-8 px-8">
    //   <Routes>
    //     <Route index element={<Navigate to="/hardcover_fiction" replace />} />
    //     <Route path="/hardcover_fiction" element={<HardCoverFiction />} />
    //     <Route path="/hardcover_nonfiction" element={<HardCoverNonFiction />} />
    //     <Route path="/hardcover_advice" element={<HardCoverAdvice />} />
    //     <Route path="/paperback_advice" element={<PaperbackAdvice />} />
    //     <Route path="/e_book_nonfiction" element={<EBookNonFiction />} />
    //     <Route path="/e_book_fiction" element={<EBookFiction />} />
    //     <Route path="/business_books" element={<BusinessBooks />} />
    //     <Route path="/sports" element={<Sports />} />
    //     <Route path="/travel" element={<Travel />} />
    //     <Route path="/paperback_nonfiction" element={<PaperbackNonFiction />} />
    //     <Route
    //       path="/advice_how_to_and_miscellaneous"
    //       element={<MiscellaneousAdvice />}
    //     />
    //     <Route
    //       path="/young_adult_paperback"
    //       element={<PaperbackYoungAdult />}
    //     />
    //     <Route
    //       path="/childrens_middle_grade_paperback"
    //       element={<PaperbackChildrensMiddleGrade />}
    //     />
    //     <Route
    //       path="/mass_market_paperback"
    //       element={<PaperbackMassMarket />}
    //     />
    //     <Route
    //       path="/trade_fiction_paperback"
    //       element={<PaperbackTradeFiction />}
    //     />
    //     <Route
    //       path="/childrens_middle_grade_hardcover"
    //       element={<HardCoverChildrensMiddleGrade />}
    //     />
    //     <Route
    //       path="/young_adult_hardcover"
    //       element={<HardCoverYoungAdult />}
    //     />
    //     <Route path="/book/:id" element={<BookDetails />} />
    //   </Routes>
    // </div>
  );
};

export default Dashboard;
