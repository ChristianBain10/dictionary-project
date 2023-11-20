import { useState } from "react"
import { useHistory } from "../../contexts/historyContext";
import './Display1.css';
import { TMeaning, TWord } from "../../types/types";
import { ResultCard1 } from "./resultCard1/ResultCard1";

const DICTIONARY_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const Display1 = () => {

    const [searchWord, setSearchWord] = useState<string>('');
    const [results, setResults] = useState<any>();

    const { addWord } = useHistory();

    const handleSearch = () => {
        // TODO abstract into a service
        // promise version here - async await in display 2...
        const requestUrl = DICTIONARY_URL.concat(searchWord);
        fetch(requestUrl)
            .then(res => res.json())
            .then(res => {
                const result = res[0];
                const word = transform(result);
                setResults(word);
                addWord(word);
            })
            .catch(err => console.error(err))
    }

    const transform = (data: any): TWord => {
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

    return (
        <article className='search-container'>
            <h1 className="search-title">Display 1</h1>
            <form className='search-form' action="">
                <label id="search-label">
                    <input className='search-input'type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
                </label>
            </form>
            <button id='submit-search-btn' onClick={() => handleSearch()}>Search</button>
            {results &&
                <div className="results-section">
                    <div>
                        <h3 style={{ fontSize: '22pt' }}>{results.word}</h3>
                    </div>
                    <div>
                        {results.phonetic}
                    </div>
                    {results.meanings.map((meaning: TMeaning) => {
                        return(
                            <ResultCard1 key={meaning.partOfSpeech} meaning={meaning} />
                        )
                    })}
                </div>
            }
        </article>
    )
}