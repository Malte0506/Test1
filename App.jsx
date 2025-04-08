import { useState } from "react";

const questions = [
  {
    question: "Welche Aussage zum ökonomischen Prinzip ist richtig?",
    options: [
      "Um das ökonomische Prinzip zu beachten, müssen in einer Volkswirtschaft die Produktionskapazitäten ständig erweitert werden.",
      "Das ökonomische Prinzip als Maximalprinzip besagt, dass ein bestimmter Erfolg mit möglichst geringem Mitteleinsatz erzielt werden soll.",
      "Das ökonomische Prinzip ist ohne den Einsatz von Produktionsfaktoren zu verwirklichen.",
      "Wegen der Knappheit der Güter muss das ökonomische Prinzip beim wirtschaftlichen Handeln beachtet werden.",
      "Wird das ökonomische Prinzip in einem Unternehmen beachtet, können keine Verluste entstehen."
    ],
    answer: 3
  },
  {
    question: "Wer handelt nach dem Minimalprinzip?",
    options: [
      "Eine Hausfrau kauft nach Preisvergleich ihren monatlichen Warenbedarf beim günstigsten Einzelhändler ein.",
      "Eine Hausfrau kauft für ihr monatliches Haushaltsgeld so viele Waren wie möglich bei ihrem Einzelhändler ein.",
      "Eine Hausfrau kauft beim Einzelhändler so viele Waren wie möglich mit dem geringstmöglichen Haushaltsgeld ein.",
      "Ein Unternehmen bearbeitet in einer Produktionsschicht so viele Aufträge wie möglich.",
      "Ein Unternehmen bearbeitet innerhalb der geringst möglichen Zeit so viele Aufträge wie möglich."
    ],
    answer: 2
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const question = questions[current];

  const handleOptionClick = (index) => {
    setSelected(index);
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowAnswer(false);
    setCurrent((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-4 border p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-2">Frage {current + 1}</h2>
        <p className="mb-4">{question.question}</p>
        <div className="space-y-2">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              className={\`w-full text-left px-4 py-2 border rounded \${showAnswer ? (idx === question.answer ? 'bg-green-200' : idx === selected ? 'bg-red-200' : '') : 'hover:bg-gray-100'}\`}
              onClick={() => handleOptionClick(idx)}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {showAnswer && (
        <button onClick={nextQuestion} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Nächste Frage
        </button>
      )}
    </div>
  );
}