import { useContext, useEffect } from "react";
import { QuizContext } from "../../context/quiz";

import Welcome from "./Welcome";
import Question from "./Question";
import GameOver from "./GameOver";

const Quiz=()=>{
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
    }, [quizState.gameStage]); // Agora observa o estágio do jogo

    return (
        <main className="mt-20 min-h-screen flex flex-col items-center w-full overflow-x-hidden relative bg-quiz bg-cover bg-center sombra-login">
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 to-black/50"></div>
            <h1 className="relative inline-block mb-1 pt-12 text-green-500 font-bold text-5xl">Bright Path Quiz</h1>
            {quizState.gameStage === "Start" && <Welcome/>}    {/*Acessando o Welcome*/}
            {quizState.gameStage === "Playing" && <Question/>}    {/*Acessando o Question*/}
            {quizState.gameStage === "End" && <GameOver/>}  {/*Acessando o Fim do Jogo*/}
        </main>
    )
}

export default Quiz