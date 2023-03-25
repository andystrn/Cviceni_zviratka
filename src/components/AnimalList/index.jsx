import React from 'react';
import './style.css';
import Animal from './Animal';

const AnimalList = ( {animal, onAnimal} ) => {
    return (
        <div className="animal-list">
            {animal.map((an) => <Animal 
             key={an.id} 
             dataAnimal={an}
             fce={onAnimal}/>
            )}
        </div>
    )
}

export default AnimalList;