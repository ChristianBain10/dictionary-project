import { useState } from "react"
import { useHistory } from "../../contexts/historyContext";
import './Display1.css';
import { TWord } from "../../types/types";

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
                // TODO add a transform method to abstract the data from the request
                let word: TWord = {
                    word: result.word,
                    phonetic: result.phonetic,
                    definition: result.meanings[0].definitions[0].definition
                };
                setResults(word);
                addWord(word);
            })
            .catch(err => console.error(err))

        console.log('finished request');
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
                <>
                    <div>
                        {results.word}
                    </div>
                    <div>
                        {results.phonetic}
                    </div>
                    <div>
                        {results.definition}
                    </div>
                </>
            }
        </article>
    )
}