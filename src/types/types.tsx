export type TMeaning = {
    partOfSpeech: string;
    definitions: string[];
    synonyms: string[];
    antonyms: string[];
}

export type TWord = {
    word: string;
    phonetic: string;
    // changes for temp search functionality
    meanings?: TMeaning[];
    definition?: string;
}