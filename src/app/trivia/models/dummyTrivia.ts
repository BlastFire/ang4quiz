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
                    id: 1,
                    answerTitle: "q1_answerTitle1",
                    correct: false
                },
                {
                    id: 2,
                    answerTitle: "q1_answerTitle2",
                    correct: true
                },
                {
                    id: 3,
                    answerTitle: "q1_answerTitle3",
                    correct: false
                }
            ]
        },
        {
            id: 2,
            name: "question2",
            answers: [
                {
                    id: 1,
                    answerTitle: "q2_answerTitle1",
                    correct: false
                },
                {
                    id: 2,
                    answerTitle: "q2_answerTitle2",
                    correct: false
                },
                {
                    id: 3,
                    answerTitle: "q2_answerTitle3",
                    correct: true
                }
            ]
        },
    ]
};