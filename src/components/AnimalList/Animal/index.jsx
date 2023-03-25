import React from 'react';
import './style.css';

const Animal = ( {dataAnimal, fce} ) => {
   const {id, nazev, nazevLatinsky, foto} = dataAnimal;
    return (
        <div onClick={() => fce(id)} className="animal">
            <div className="animal__image">
                <img src={foto} alt={nazev} />
            </div>
            <div className="animal__desc">
                <div className="animal__name">{nazev}</div>
                <div className="animal__latin">{nazevLatinsky}</div>
            </div>
		</div>
    )
}

export default Animal;