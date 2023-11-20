import { useHistory } from "../../contexts/historyContext"

export const SearchHistory = () => {

    const { wordCollection } = useHistory();

    return (
        <article>
            <h1>Search History</h1>
            {wordCollection.map((word) => {
                return <div key={word.word}>{word.word}</div>
            })}
        </article>
    )
}