export enum WordType {
  Adjective = "adjective",
  Noun = "noun",
  Verb = "verb",
}

export interface WordsByType {
  [WordType.Adjective]: string[];
  [WordType.Noun]: string[];
  [WordType.Verb]: string[];
}

interface GenerateOptions {
  sentenceCount?: number;
  wordCount?: number;
  structureTemplate?: string[];
  delimiter?: string;
  capitalizeFirst?: boolean;
  endSymbol?: string | null;
  includeNumber?: boolean;
  includeSymbol?: boolean;
}

const loadWordBank = async (): Promise<WordsByType> => {
  const response = await fetch("/frankensteinWordBank.json");
  const data = await response.json();
  return data as WordsByType;
};

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/~`";
  return symbols.charAt(getRandomInt(0, symbols.length - 1));
};

export const generateSentences = async (
  options: GenerateOptions
): Promise<string[]> => {
  const {
    sentenceCount = 5,
    wordCount = 3,
    structureTemplate = ["<adjective>", "<verb>", "<noun>"],
    delimiter = "",
    capitalizeFirst = false,
    includeNumber = false,
    includeSymbol = false,
  } = options;
  const wordsByType = await loadWordBank();

  const selectedTypes = structureTemplate.flatMap((type) => {
    switch (type) {
      case "<adjective>":
        return wordsByType.adjective;
      case "<noun>":
        return wordsByType.noun;
      case "<verb>":
        return wordsByType.verb;
      default:
        return [];
    }
  });

  const sentences: string[] = [];
  for (let j = 0; j < sentenceCount; j++) {
    const selectedWords: string[] = [];
    for (let i = 0; i < wordCount; i++) {
      let word: string;
      do {
        word = selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
      } while (!/^[a-z]+$/.test(word));
      selectedWords.push(word);
    }

    let sentence = selectedWords.join(delimiter);
    sentence = sentence.toLowerCase();
    if (capitalizeFirst) {
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }

    if (includeNumber) {
      const randomNumber = getRandomInt(0, 9999);
      sentence += ` ${randomNumber}`;
    }

    if (includeSymbol) {
      const randomSymbol = getRandomSymbol();
      sentence += ` ${randomSymbol}`;
    }

    sentences.push(sentence);
  }

  return sentences;
};
