const CodingQuestion = ({ answer, setAnswer }) => {

  return (

    <textarea
      rows={14}
      value={answer || ""}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder="Write your code here..."
      spellCheck={false}
      className="w-full bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

  );

};

export default CodingQuestion;