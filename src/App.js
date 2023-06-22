import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>
        Clinical Chemistry Reviewer #1 <span className="emoji">🧪</span>
      </h1>
      <Flashcards />
    </div>
  );
}
const questions = [
  {
    id: 1,
    question: 'What are the tests included in a Liver Function Test?',
    answer: 'ALT, AST, Bilirubin, Total Protein, Albumin, GGT',
  },
  {
    id: 2,
    question:
      'What is the clinical significance of elevated serum creatinine levels?',
    answer: 'Possible renal disease',
  },
  {
    id: 3,
    question: 'What is the end product of protein metabolism',
    answer: 'Urea',
  },
  {
    id: 4,
    question: 'What is the primary lipoprotein carrying cholesterol?',
    answer: 'LDL',
  },
  {
    id: 5,
    question: 'What is the major blood electrolyte?',
    answer: 'Sodium (Na+)',
  },
  {
    id: 6,
    question: 'What is the main function of albumin?',
    answer: 'Maintain osmotic pressure',
  },
  {
    id: 7,
    question: 'Give 5 common causes of artefactual hypernkalemia',
    answer:
      'Haemolysis, Delayed Sample Processing, Anticoagulant(commonly EDTA contamination), High platelet count, Prolonged tourniquet application',
  },
  {
    id: 8,
    question: 'What is the normal range for blood pH??',
    answer: '7.35-7.45',
  },
  {
    id: 9,
    question: 'What enzyme breaks down starch?',
    answer: 'Amylase',
  },
  {
    id: 10,
    question:
      'What is the role of lipase in clinical chemistry, and what does its elevation indicate?',
    answer:
      'Assists in breaking down fats. Elevation indicates pancreatic damage or inflammation.',
  },
  {
    id: 11,
    question: 'Give at least 3 cardiac markers.',
    answer: 'Troponin, CK-MB, BNP',
  },
  {
    id: 12,
    question: 'What is the principle behind immunoassay?',
    answer:
      'Utilizing the specificity of antigen and antibody binding to detect and quantify analytes from patient samples',
  },
];

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() =>
            setSelectedId(selectedId !== question.id ? question.id : null)
          }
          className={selectedId === question.id ? 'selected' : ''}
        >
          <p>
            {selectedId === question.id ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
