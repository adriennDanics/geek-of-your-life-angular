import {Question} from "./question.model";

export class Answer {
  public question: Question;
  public answer: string;

  constructor(question: Question, answer: string) {
    this.question = question;
    this.answer = answer;
  }
}
