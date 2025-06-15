export interface CharacterData {
  character: string;
  languages: string[];
  description: string;
}

export interface QuizQuestion {
  character: string;
  correctAnswer: string;
  options: string[];
  description: string;
}

export interface GameResult {
  score: number;
  totalQuestions: number;
  timeElapsed: number;
  questions: QuestionResult[];
  date: string;
}

export interface QuestionResult {
  character: string;
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean;
}

export interface GameHistory {
  results: GameResult[];
}

export type GameMode = 'quiz' | 'memorize';

export interface CountryFlag {
  language: string;
  countryCode: string;
  countryName: string;
}