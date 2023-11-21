import { useEffect, useState } from "react"
import { useHistory } from "../../contexts/historyContext";
import './Display1.css';
import { TMeaning } from "../../types/types";
import { ResultCard1 } from "./resultCard1/ResultCard1";
import { transform } from "../../utils/utils";
import { useLocation } from "react-router-dom";

const DICTIONARY_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const Display1 = () => {

    const location = useLocation();
    let passedWord: string = '';
    if (!!location.state) {
        passedWord = location.state.passedWord;
    }

    const [searchWord, setSearchWord] = useState<string>(passedWord);
    const [results, setResults] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);

    const { addWord } = useHistory();

    useEffect(() => {
        if (!!passedWord) {
            handleSearch();
        }
    }, [])

    const handleSearch = () => {
        // TODO abstract into a service
        // promise version here - async await in display 2...
        setIsLoading(true);
        const requestUrl = DICTIONARY_URL.concat(searchWord);
        fetch(requestUrl)
            .then(res => res.json())
            .then(res => {
                const result = res[0];
                const word = transform(result);
                setResults(word);
                addWord(word);
            })
            .catch(err => console.error(err));
        setIsLoading(false);
        setSearchWord('');
    };

    return (
        <article className='search-container'>
            <h1 className="search-title">Dictionary Search</h1>
            <form className='search-form' action="">
                <label id="search-label">
                    <input
                        className='search-input'
                        type="text"
                        value={searchWord}
                        onChange={(e) => setSearchWord(e.target.value)}
                    />
                </label>
            </form>
            <button id='submit-search-btn' onClick={() => handleSearch()}>Search</button>
            {isLoading ?
                <h3>Loading...</h3>
                :
                <>
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
                </>
            }
        </article>
    )
}