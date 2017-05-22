import { Trivia, Question } from './trivia.interface';
export const TriviaMock: Trivia = {
    id: 1,
    triviaName: "triviaName1",
    questions: [
        {
            id: 1,
            name: "question1",
            answers: [
                {
                    answerTitle: "q1_answerTitle1",
                    correct: false
                },
                {
                    answerTitle: "q1_answerTitle1",
                    correct: true
                },
                {
                    answerTitle: "q1_answerTitle1",
                    correct: false
                }
            ]
        },
        {
            id: 2,
            name: "question2",
            answers: [
                {
                    answerTitle: "q2_answerTitle1",
                    correct: false
                },
                {
                    answerTitle: "q2_answerTitle1",
                    correct: false
                },
                {
                    answerTitle: "q2_answerTitle1",
                    correct: true
                }
            ]
        },

    ]
};