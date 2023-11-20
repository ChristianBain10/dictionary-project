export type TMeaning = {
    partOfSpeech: string;
    definition: string;
    synonyms: string[];
}

export type TWord = {
    word: string;
    phonetic: string;
    // changes for temp search functionality
    meanings: TMeaning[];
}