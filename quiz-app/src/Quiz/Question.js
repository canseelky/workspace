import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";
import "./Question.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const questions = [
  {
    question: "İstanbulun fethi ne zamandır?",
    id: Math.random().toString(),
    result: "1443",
    options: ["1443", "3455", "3455", "3434"],
  },

  {
    id: Math.random().toString(),
    question: "Türkiye uluslararası telefon kodu kaçtır?",
    result: "90",
    options: ["453", "23", "11", "90"],
  },

  {
    id: Math.random().toString(),
    question: "Telefonun mucidi kimdir?",
    result: "Graham Bell",
    options: ["Tesla", "Erikson", "Graham Bell", "Eistein"],
  },

  {
    id: Math.random().toString(),
    question:
      " Aşağıdakilerden hangisi '' Dünya Sağlık Örgütü '' nün kısaltılmış halidir?",
    result: "WHO",
    options: ["WHO", "UNICEF", "UHW", "NATO"],
  },
  {
    id: Math.random().toString(),
    question: "Dünyanın ilk haritasını çizen ünlü Türk denizcisi kimdir?",
    result: "Piri Reis",
    options: ["Piri Reis", "Fatih Sultan Süleyman", "Çaka Beyi", "Picasso"],
  },
];

const Question = () => {
  const userChoice = useSelector((state) => state.userChoiceReducer.userAnswer);

  const dispatch = useDispatch();
  const questionIndex = useSelector(
    (state) => state.questionReducer.currentQuestionIndex
  );
  const question = questions[questionIndex];
  const result = question.result;
  const score = useSelector((state) => state.scoreReducer.score);
  const userAnswered = useSelector(
    (state) => state.userChoiceReducer.userAnswered
  );

  const answerHandler = (choice) => {
    dispatch(actions.setUserChoice(choice));

    dispatch(actions.setUserAnswered(true));
    if (choice === result) {
      dispatch(actions.setScore());
    }
  };

  const getClass = (option) => {
    if (userAnswered === null) {
      return ``;
    }
    if (option === result && userChoice === option) {
      return `correct`;
    }
    if (option === userChoice) {
      return `selected`;
    }
  };

  const nextQuestionHandler = () => {
    dispatch(actions.getNextQuestion(questions.length));
    dispatch(actions.setUserAnswered(false));
  };

  return (
    <div className="main ">
      <h1 className="header">Quiz App</h1>
      <p className="question">{` Question:${questionIndex + 1} / 5 `}</p>
      <p className="score"> {`Score: ${score} `}</p>
      <p className="question">{question.question}</p>

      <button
        className={`${getClass(question.options[3])} main__button`}
        disabled={userAnswered}
        onClick={answerHandler.bind(null, question.options[0])}
      >
        {question.options[0]}
      </button>

      <button
        className={`${getClass(question.options[3])} main__button`}
        disabled={userAnswered}
        onClick={answerHandler.bind(null, question.options[1])}
      >
        {question.options[1]}
      </button>

      <button
        className={`${getClass(question.options[3])} main__button`}
        disabled={userAnswered}
        onClick={answerHandler.bind(null, question.options[2])}
      >
        {question.options[2]}
      </button>

      <button
        className={`${getClass(question.options[3])} main__button`}
        disabled={userAnswered}
        onClick={answerHandler.bind(null, question.options[3])}
      >
        {question.options[3]}
      </button>

      <ArrowForwardIcon onClick={nextQuestionHandler}></ArrowForwardIcon>
    </div>
  );
};

export default Question;
