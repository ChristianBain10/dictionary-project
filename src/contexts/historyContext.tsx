import { createContext, useState } from "react";
import { TWord } from "../types/types"

export type WordContextProps = {
    wordCollection: TWord[];
    addWord: (word: TWord) => void;
    clearHistory: () => void;
}

export const WordContext = createContext<WordContextProps>({
    wordCollection: [],
    addWord: () => {},
    clearHistory: () => {}
})

type WordProviderProps = {
    children: any;
}

export const WordProvider = ({ children }: WordProviderProps ) => {

    const [wordCollection, setWordCollection] = useState<TWord[]>([]);

    const addWord = (word: TWord) => {
        setWordCollection([...wordCollection, word]);
    }

    const clearHistory = () => {
        setWordCollection([]);
    }

    return (
        <WordContext.Provider value={{ wordCollection, addWord, clearHistory }} >
            {children}
        </WordContext.Provider>
    )
}