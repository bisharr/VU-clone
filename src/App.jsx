import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Modules from "./Pages/Modules";
import Lectures from "./Pages/Lectures";
import CourseWork from "./Pages/CourseWork";
import Examination from "./Pages/Examination";
// import Main from "./components/Main";
import PageNotFound from "./Pages/PageNotFound";
import ExamResults from "./Pages/ExamResults.jsx";
import Fiancial from "./Pages/Fiancial";

import Teachers from "./Pages/Teachers.jsx";
import Elections from "./Pages/Elections";
import Setting from "./Pages/Setting";
import LogOut from "./Pages/LogOut";
import TeacherDetail from "./components/TeacherDetail";
import LoginPage from "./pages/LoginPage.jsx";
import VuAiModel from "./Pages/VuAiModel";
import NewTodoList from "./Pages/NewTodoList";
import { createContext } from "react";

export const Vucontext = createContext();

function App() {
  const teacher = [
    {
      id: 1,
      name: "John Smith",
      age: 42,
      gender: "Male",
      subject: "Advanced Mathematics",
      photo: "https://i.pravatar.cc/150?img=3",
      experience: 15,
      qualification: "PhD in Mathematics",
      email: "john.smith@example.com",
      phone: "+1 234 567 890",
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
      skills: [
        "Linear Algebra",
        "Calculus",
        "Differential Equations",
        "Statistics",
      ],
      availability: {
        days: ["Monday", "Wednesday", "Friday"],
        time: "9:00 AM - 3:00 PM",
      },
      description:
        "Dr. John Smith has over 15 years of teaching experience in university mathematics. He has worked on advanced research in calculus and statistical modeling. He enjoys mentoring students and has contributed to multiple academic publications.",
    },
    {
      id: 2,
      name: "Emily Johnson",
      age: 35,
      gender: "Female",
      subject: "Literary Studies",
      photo: "https://i.pravatar.cc/150?img=5",
      experience: 12,
      qualification: "PhD in English Literature",
      email: "emily.johnson@example.com",
      phone: "+1 987 654 321",
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        country: "USA",
      },
      skills: [
        "Shakespearean Literature",
        "Postcolonial Theory",
        "Academic Writing",
      ],
      availability: {
        days: ["Tuesday", "Thursday"],
        time: "10:00 AM - 2:00 PM",
      },
      description:
        "Dr. Emily Johnson is an expert in English Literature with a passion for analyzing classical and modern literary works. She has authored several papers on feminist literature and enjoys guiding students through critical thinking and storytelling techniques.",
    },
    {
      id: 3,
      name: "Ahmed Ali",
      age: 40,
      gender: "Male",
      subject: "Theoretical Physics",
      experience: 18,
      qualification: "PhD in Physics",
      email: "ahmed.ali@example.com",
      photo: "https://i.pravatar.cc/150?img=6",
      phone: "+44 123 456 789",
      address: {
        street: "789 Maple Rd",
        city: "London",
        country: "UK",
      },
      skills: ["Quantum Mechanics", "Relativity", "Statistical Physics"],
      availability: {
        days: ["Monday", "Wednesday", "Friday"],
        time: "8:00 AM - 1:00 PM",
      },
      description:
        "Dr. Ahmed Ali specializes in quantum mechanics and relativity. With 18 years of teaching and research, he has worked on groundbreaking projects in particle physics. He loves inspiring students to explore the mysteries of the universe.",
    },
    {
      id: 4,
      name: "Fatima Hassan",
      age: 38,
      gender: "Female",
      photo: "https://i.pravatar.cc/150?img=7",
      subject: "Molecular Biology",
      experience: 14,
      qualification: "PhD in Biological Sciences",
      email: "fatima.hassan@example.com",
      phone: "+971 55 678 910",
      address: {
        street: "101 Palm St",
        city: "Dubai",
        country: "UAE",
      },
      skills: ["Genetics", "Biotechnology", "Immunology"],
      availability: {
        days: ["Tuesday", "Thursday"],
        time: "9:00 AM - 3:00 PM",
      },
      description:
        "Dr. Fatima Hassan is a renowned researcher in genetics and biotechnology. With over a decade of experience, she has led research projects on genetic disorders and worked in collaboration with top universities on biotech innovations.",
    },
    {
      id: 5,
      name: "Carlos Rodriguez",
      age: 45,
      gender: "Male",
      photo: "https://i.pravatar.cc/150?img=8",
      subject: "World History & Politics",
      experience: 20,
      qualification: "PhD in History",
      email: "carlos.rodriguez@example.com",
      phone: "+34 600 123 456",
      address: {
        street: "202 Heritage Ln",
        city: "Madrid",
        country: "Spain",
      },
      skills: ["Ancient Civilizations", "Political History", "Historiography"],
      availability: {
        days: ["Monday", "Wednesday", "Friday"],
        time: "10:00 AM - 4:00 PM",
      },
      description:
        "Dr. Carlos Rodriguez is a passionate historian with expertise in world politics and ancient civilizations. He has published several books and is a frequent speaker at international conferences on global history.",
    },
    {
      id: 6,
      name: "Sophia Lee",
      age: 32,
      gender: "Female",
      subject: "Artificial Intelligence & Data Science",
      photo: "https://i.pravatar.cc/150?img=9",
      experience: 10,
      qualification: "PhD in Computer Science",
      email: "sophia.lee@example.com",
      phone: "+82 10 2345 6789",
      address: {
        street: "303 Tech Park",
        city: "Seoul",
        country: "South Korea",
      },
      skills: ["Machine Learning", "Deep Learning", "Big Data Analytics"],
      availability: {
        days: ["Tuesday", "Thursday", "Saturday"],
        time: "8:00 AM - 2:00 PM",
      },
      description:
        "Dr. Sophia Lee is an AI researcher specializing in deep learning and data science. She has worked with top tech companies and contributes to open-source AI projects. She enjoys mentoring students on AI ethics and innovation.",
    },
    {
      id: 7,
      name: "Daniel Brown",
      age: 50,
      photo: "https://i.pravatar.cc/150?img=10",
      gender: "Male",
      subject: "Organic Chemistry",
      experience: 25,
      qualification: "PhD in Chemistry",
      email: "daniel.brown@example.com",
      phone: "+1 321 654 987",
      address: {
        street: "505 Science St",
        city: "Toronto",
        country: "Canada",
      },
      skills: ["Polymer Chemistry", "Spectroscopy", "Chemical Synthesis"],
      availability: {
        days: ["Monday", "Wednesday"],
        time: "9:00 AM - 1:00 PM",
      },
      description:
        "Dr. Daniel Brown is a leading expert in organic chemistry with 25 years of experience. He has worked on groundbreaking research in polymer chemistry and is passionate about making chemistry accessible to students.",
    },
    {
      id: 8,
      name: "Hiroshi Tanaka",
      photo: "https://i.pravatar.cc/150?img=11",
      age: 37,
      gender: "Male",
      subject: "Fine Arts & Digital Media",
      experience: 13,
      qualification: "PhD in Fine Arts",
      email: "hiroshi.tanaka@example.com",
      phone: "+81 90 8765 4321",
      address: {
        street: "707 Art Lane",
        city: "Tokyo",
        country: "Japan",
      },
      skills: ["Visual Design", "3D Modeling", "Art History"],
      availability: {
        days: ["Tuesday", "Thursday", "Saturday"],
        time: "10:00 AM - 3:00 PM",
      },
      description:
        "Dr. Hiroshi Tanaka is a fine arts professor with a focus on digital media and visual storytelling. His work has been featured in international exhibitions, and he enjoys helping students blend traditional and modern art techniques.",
    },
  ];

  const [fullname, setFullname] = useState("Bishar Abdinur");
  const [regno, setRegno] = useState("VU-BCS-2301-0961-DAY");
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Vucontext.Provider
        value={{
          fullname,
          regno,
          setRegno,
          openMenu,
          setOpenMenu,
          setFullname,
          teacher,
        }}
      >
        <BrowserRouter basename="/VU-clone">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="modules" element={<Modules />} />
            <Route path="vuai" element={<VuAiModel />} />

            <Route path="lec" element={<Lectures />} />
            <Route path="coursework" element={<CourseWork />} />
            <Route path="exams" element={<Examination />} />
            <Route path="examresults" element={<ExamResults />} />
            <Route path="financial" element={<Fiancial />} />
            <Route path="todoList" element={<NewTodoList />} />
            <Route path="teachers" element={<Teachers />} />
            {/* <Route path="teachers/:id" element={<TeacherDetail />} /> */}
            <Route path="teachers/:id" element={<TeacherDetail />} />

            <Route path="elections" element={<Elections />} />
            <Route path="setting" element={<Setting />} />

            <Route path="logout" element={<LogOut />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Vucontext.Provider>
    </>
  );
}

export default App;
