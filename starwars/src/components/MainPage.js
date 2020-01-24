import React from 'react';
import CharCard from '../components/CharCard';


function MainPage(props) {
    return (
        <div className="container">
            {props.data.map((e, i) => {
                return <CharCard key={i} character={e} />
            })}
        </div>
    );
}

export default MainPage;