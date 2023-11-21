import { TMeaning, TWord } from "../types/types";

export const transform = (data: any): TWord => {
    // observable for piping data?
    let meaningsList: TMeaning[] = [];
    const rawMeanings = data.meanings;
    rawMeanings.forEach((rawMeaning: any) => {
        const definition: string = rawMeaning?.definitions[0].definition;
        const syns = rawMeaning.synonyms.length > 3 ? rawMeaning.synonyms.slice(0, 3) : rawMeaning.synonyms;
        const meaning: TMeaning = {
            partOfSpeech: rawMeaning.partOfSpeech,
            definition: definition,
            synonyms: syns
        }
        meaningsList.push(meaning);
    })
    return {
        word: data.word,
        phonetic: data.phonetic,
        meanings: meaningsList
    }
}