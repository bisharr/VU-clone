import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Modules from "./Pages/Modules";
import Lectures from "./Pages/Lectures";
import CourseWork from "./Pages/CourseWork";
import Examination from "./Pages/Examination";
import Main from "./components/Main";
import PageNotFound from "./Pages/PageNotFound";
import ExamResults from "./Pages/ExamResults";
import Fiancial from "./Pages/Fiancial";
import Teachers from "./Pages/Teachers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="modules" element={<Modules />} />

        <Route path="lectures" element={<Lectures />} />
        <Route path="coursework" element={<CourseWork />} />
        <Route path="exams" element={<Examination />} />
        <Route path="examresults" element={<ExamResults />} />
        <Route path="financial" element={<Fiancial />} />
        <Route path="teachers" element={<Teachers />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
