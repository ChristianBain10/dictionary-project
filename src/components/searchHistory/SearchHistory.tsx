import { Link } from "react-router-dom";
import { useHistory } from "../../contexts/historyContext";
import './SearchHistory.css';

export const SearchHistory = () => {

    const { wordCollection, clearHistory } = useHistory();

    return (
        <article className="history-container">
            <h1 className="history-title">Search History</h1>
            <div className="history-list">
                {wordCollection.map((word) => {
                    return (
                        <div key={word.word}>
                            <Link to={'/'} state={{ passedWord: word.word}}>{word.word}</Link>
                        </div>
                    )
                })}
            </div>
            <button className="clear-history-btn" onClick={() => clearHistory()}>Clear Search History</button>
        </article>
    )
}