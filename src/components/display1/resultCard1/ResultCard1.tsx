import { TMeaning } from "../../../types/types";
import './ResultCard.css';

export type ResultCardProps = {
    meaning: TMeaning;
}

export const ResultCard1 = ({ meaning }: ResultCardProps) => {

    return (
        <section className="meaning-container">
            <div className="top-bar">
                <span className='pos-text'>{meaning.partOfSpeech}</span>
            </div>
            <div className="meaning-body">
                <div className='definition-container'>
                    {meaning.definition}
                </div>
                {meaning.synonyms.length > 0 && 
                    <div className='syn-container'>
                            <h3>Synonyms</h3>
                            {meaning.synonyms.map((syn) => {
                                return (
                                    <div key={syn}>- {syn}</div>
                                    )
                                })}
                    </div>
                }
            </div>
        </section>
    )

}