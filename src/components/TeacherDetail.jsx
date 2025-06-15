import { useParams, Link } from "react-router-dom";
import Button from "./Button";
import LeftSide from "./LeftSide";
import Details from "./Details";
import { useContext } from "react";
import { Vucontext } from "../App";

function TeacherDetail() {
  const { teacher } = useContext(Vucontext);
  const { id } = useParams(); // Get the teacher ID from the URL
  const selectedTeacher = teacher.find((t) => t.id === parseInt(id)); // Find teacher by ID

  if (!selectedTeacher) {
    return <p className="text-center mt-5 text-red-500">Teacher not found!</p>;
  }

  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen overflow-scroll scrol ">
        <Details />
        <div className="w-[96%] mb-4 mx-auto mt-4 pb-2.5 bg-gray-300 border-amber-200 shadow-2xs overflow-hidden rounded-xl">
          <img
            className="w-full h-80 object-fill"
            src={selectedTeacher.photo}
            alt={selectedTeacher.name}
          />
          <div className="px-3">
            <h2 className="mt-2 font-bold">Name: {selectedTeacher.name}</h2>
            <p className="font-semibold text-gray-900 mt-2 mb-3">
              Desc: {selectedTeacher.description}
            </p>
            <p>Age: {selectedTeacher.age}</p>
            <p>Phone: {selectedTeacher.phone}</p>
            <p>Available Time: {selectedTeacher.availability.time}</p>
            <div className="flex gap-x-2 items-center">
              Available Days:
              {selectedTeacher.availability.days.map((day, index) => (
                <p key={index}>{day}</p>
              ))}
            </div>
            <p>Experience: {selectedTeacher.experience} Years</p>
            <a
              className=" font-medium text-gray-500"
              href={`mailto:${selectedTeacher.email}`}
            >
              Email:{selectedTeacher.email}
            </a>

            <div className="flex gap-x-1.5 items-center mt-2">
              Skills:
              {selectedTeacher.skills.map((skill, index) => (
                <button
                  className="bg-blue-900 text-center px-3 py-1 text-white rounded-[6px]"
                  key={index}
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="mt-1">
              <h3>Follow me 😍</h3>
              <div className="flex items-center gap-1.5">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAtVJREFUWEftl1moz0EUxz83yZI9StmTeBGliPCAB0mJFyQppZTtiojsESK7F5QXe5GUlPAiRLygxAOFlO0BIVvMt+be/sas/3vTTU7duv/fnDnnM2dmzjlTQxOTmibGwz8DNBKYDgwDutg/Bfs18Aq4CRwFbpTuQEmEWgJzgVqgV6ajx8BO4CDwJWdOLtBsYCvQOceoR0dRWwwcS83PARLIspShzPHVwMaYbgxIY4eBWZnOctX2AItCyjGgvcD8XC9W7zNwy/7fHGgBDAaaOXbWm9/rfLZDQNrvHQUwT4E1xvlZc1beOfNmAEc8tmb6vvuAOgBy0DYT6AkwHHgZ0J8MnPGMPQf6Al8rx3xAGwAdvlwZB1yOKE8BTgfGdST2x4C072/MdrXLpNEqe3h0dWYGWTujAC3SJ8pTilK9uBEab7LvhUwYqZ0DJjn6/WzEfKA+0wK/WzfgAh0A5hQAnQKmOvq61gsKbKytjKALdBsYUmDsJDDN0T/u+RYzeR6YGIrQM6B7A4FOeKIWM3nfHPqBIaBPpma1KgCSc1X9SikFem8KcPsQ0EegdQToEdC/AFiq+0xbMi8yRz7bhICU5Ho3MtAlYGzE5m9X3z3U123WDc1/CAwojJByVbfInKvA6FCEtgNLGjFC2ooPiQVsMc3bihDQmEQZqKzmsnHFk4VVZGVHogsyNAGkdvhaCEilQ4W1a+a2+PJQyS1TmuljauePEJC+rwQ2/SUgtTm7Kn01tP1oSITeAj1Ne6zcVy+hBk0FU81WSqoF+gmokF90HcRa2N3AwgRRtUBqR1RU/5BUk3/IHHI9gUJSDdBme069NnOeQVrNKvA+u0uAvtu3mUpJUHKANHmEfeS5L9ZcoAe2A7iXOpS5QLKjJKfGaznQyRpOAb2wKURP6W8pGI2XANXZU6swwfbMurrbHEdLgY7AHUDNV9abvs5GNUA5C61a5z9QKnS/AIE3giXLaGFzAAAAAElFTkSuQmCC" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA5hJREFUWEftl1moTmEUhp9jDLkhY5RkJlNJpAyRKbkwS5JQppKhkHmIEJIhUxKZiVKEkDKFzFMoRRQukczfq7X1+c7+996/38W5sOp0zv/t9a39nrXe9a71F1HCrKiE4eE/oLSK5JOhFkAboB5QOi2wPf8GPAduAvey3MkCaBiwCGiQJWCCzxNgDnAgKU4SoFrATqBHgUDC66dd1kYBr+LiJgE6CfS0S5eAHcANS/2XjCDLA62A9sAEoIndOwH0yQfQAOCQXZgNLMsIIMmtHLAWGG9OA4HD4YVcGVK9xRnVe0gBYLoCw4EawHHL8nWgJfDYy9jvV8QBagbcN4/OwIUCAE0E1gdlGgHssrO6wEs/fhwgv1xKcy6+VAamAR2A1sAP4BZwBVgJfLDs7rMXqkFEZmVeFZD1s8wlZkg13gi8A6rlyE5368DaOZ6/AEYC511pJBvVLetnHNhKwHu7pwzqXYmAZgArgKdAw5gXdgHOeedngTtAGcc5lbub96yTk42LQQxV5budzQKWpwGaa0J418jn+6tMD4A6lkERVrrim6RiD1DFVLo58DHw+WpqP8/9XpwGaIHjw3xA3dAuCDQG2Gpn0hHpSZyppQ/aA5UuInHkK14qo5kALTRHkVOE9W07MNoJ5mWgYw4w0bHml8i+yUTRd//ktE2imQmQ5pbKdtsC+oEemnaolSenANoCjM0RRx1Y0aihavy2uLaPSvYIaBq8VGeNXfdtcByalAJos5tX44xz4pFv6jJ1m/ijLGUCJPKGgfYCQ01rwnKG+KRJmmPij3jkm0hewR3onxdF/hrQTG+uFRM1L+5gl9399nkqsCYA9Bkoa9RYkgZINRXyuJLVtGlfFXjrtEpj4FTwst5OjXdb27826ZDIRlbKAdHiJis2uOM4JKelwLMcS1mvoN2ThFEi6YuoQIjMIrVMo2d1Wob+9egIueWPDu1IkoVEDvV37X7UhqW0Imm4asxo+dKurXEQDtcQjD7Xt+zrbw3yI2mAtNVJb2SFrh9xgPz1Q18colXnl2/agibCRmtsXPB8zzQurpngvrHF7Y8YuQD19fYU6YR+tO8UYuEKG7saJy35Wl8HGYKrbsJvsyVfW4CmdRaLlnwN6Sle1ypG27g4SYDUnqu8pTwLgCw+2gLUXb42JXZZGFQcWud2nEZZ3pbgo4VvuuvIY0lxsnxzje6XmK/SBSYmv+v5ZCi/yH/p/R9QWuJ+ArGquSWsrGisAAAAAElFTkSuQmCC" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAnRJREFUWEftlkuIjlEYx3/jtplcYjYKkctkN9KQhVBSSGFG0rAyU6SUQiEm5JbLUhZkYSMLScx27EhS00hNIqbJhrCRlMucfz1vTd+c9z3njPfNLL5TX99X3znP+Z3/c21gnK2GccZDHSjkkbpC/0OhxcBBYBWwFOgHngG37HfGNAlYArweCelz2UxgLXA/9BrP/yeAbmByztkO4BWwDjgAbAEGQkCHgMvAduBhAtRu4E7C/gsGP9Up+iU751PoHrAD+A1sBR5FXNIEvAFmROzVll7gq3PjXFPrexGQVJGUWn+Aa+77FPCj4LKdwN1ImGzbJ4uztyGXHXcxcK7G+CAgVz4wyNq75eLDCUCCWA+8rz3jc9kaF9RPcox/BG7bZ+TLbgJ7E4COAFd8+31AEwDFUVvgAkkuKH0WASsTgLoAPWLU8gFtAJ5b2is9q1ibgZ5YIKmzDfjg0nhhFTQuFlvcHX2xQJeAoxWByKxSfLqVlSiXif4lVDaaqAPkxmdetz/jXnCyIpU6ra95zReNH8oEpea0EsG+ueyaY25LBtoITAFUhXeVBHXWqn6uuSKFlgMvSgLJgnk+8LnIZmhivA7sLwlKKgf7XQhI/1+1PvYvXDdiHxYCyiBaAc07y4DViWSPLc1/xpyLBZoI7HO16TQwK8aw7ZGL9gC/Ys8UAWnmnWdl/jzQHGvUTYJ/XYbqjGqZfkevWqBN1jYWWL1Q509d6oEK4KepB7Xfp5CUOOaG8XY3WzcmGNXwrrZwMTBdFposcpmKosYPzTkrANWQ2QapSe+dTXzq2grcoQT4MRXGMuwn24jNsmTDYz1QBwopV1copNAwPqtfJYPlU7sAAAAASUVORK5CYII=" />
              </div>
            </div>

            {/* Back to Teacher List */}
            <Link to="/teachers" className="mt-3 mb-2.5 cursor-pointer">
              <button className="mt-3 bg-gray-800 px-7 py-0.5 text-center rounded-[5px] text-white">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    // test
  );
}

export default TeacherDetail;
