import { createContext, useContext, useState } from "react";
import { TWord } from "../types/types"

export type HistoryContextProps = {
    wordCollection: TWord[];
    addWord: (word: TWord) => void;
    clearHistory: () => void;
}

export const HistoryContext = createContext<HistoryContextProps>({
    wordCollection: [],
    addWord: () => {},
    clearHistory: () => {}
})

type HistoryProviderProps = {
    children: any;
}

export const HistoryProvider = ({ children }: HistoryProviderProps ) => {

    // TODO - add custom hook to save/check local storage
    const [wordCollection, setWordCollection] = useState<TWord[]>([]);

    const addWord = (word: TWord) => {
        let tempCollection = wordCollection.filter(item => item.word !== word.word);
        setWordCollection([...tempCollection, word]);
    }

    const clearHistory = () => {
        setWordCollection([]);
    }

    return (
        <HistoryContext.Provider value={{ wordCollection, addWord, clearHistory }} >
            {children}
        </HistoryContext.Provider>
    )
}

export const useHistory = () => useContext(HistoryContext)