import React, { Component } from 'react';


class ListGroup extends Component {
    render() { 
        const {genres,selectedGenre,onGenreSelect} = this.props;
        return (
            <ul className="list-group">
                {genres.map(genre =>{
                   return <li 
                    style={{cursor:'pointer'}}
                    key={genre[this.props.valueProperty]}
                    className={genre === selectedGenre?"list-group-item list-group-item-action active":"list-group-item list-group-item-action"}
                    onClick={()=> onGenreSelect(genre)}>
                        {genre[this.props.textProperty]}
                    </li>
                })}
            </ul>
        );
    }
}
ListGroup.defaultProps={
    textProperty:"genre",
    valueProperty:"_id"
};
 
export default ListGroup;