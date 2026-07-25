const TheoryQuestion = ({ answer, setAnswer }) => {

  return (

    <textarea
      rows={8}
      value={answer || ""}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder="Write your answer here..."
      className="w-full border rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

  );

};

export default TheoryQuestion;