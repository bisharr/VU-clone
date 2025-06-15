import { useState } from "react";
import Button from "../components/Button";
import LeftSide from "../components/LeftSide";
import { askGemini } from "../serviceAPi/GeminiAPi";
import PageTitle from "../components/PageTitle";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Details from "../components/Details";

function VuAiModel() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    // Simulate an answer (you can replace this with API call later)
    const response = await askGemini(question);
    setLoading(false);

    console.log(response);

    setAnswer(response);
    setQuestion("");
  };

  const ClearAnswer = () => {
    setAnswer("");
  };
  return (
    <div className="w-full flex">
      <div className="md:basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>

      <div className="flex-1 bg-gray-100 h-screen ">
        <Details />
        <PageTitle className="my-2.5">VU AI</PageTitle>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
          <div className="w-full max-w-2xl">
            <h1 className="text-2xl font-bold text-center mb-4 ">
              Interact with VU AI – Ask Anything and Receive Immediate, Accurate
              Responses
            </h1>

            {/* Input and Button */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Ask something..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleAsk}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Ask
              </button>
            </div>

            {/* Output Area */}
            <div className="bg-white border border-gray-300 rounded-lg p-4 h-64 overflow-y-auto">
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin w-5 h-6" />
              ) : (
                <p className="whitespace-pre-wrap text-gray-800">{answer}</p>
              )}
            </div>
            <button
              onClick={ClearAnswer}
              className="bg-red-400 text-white text-sm p-2 w-[180px] round my-2.5 cursor-pointer hover:bg-red-500 transition-all"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VuAiModel;
