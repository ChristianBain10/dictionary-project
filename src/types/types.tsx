export type TMeaning = {
    partOfSpeech: string;
    definitions: string[];
    synonyms: string[];
    antonyms: string[];
}

export type TWord = {
    word: string;
    phonetic: string;
    meanings: TMeaning[];
}