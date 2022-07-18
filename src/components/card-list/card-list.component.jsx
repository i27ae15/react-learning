import { Component } from "react";

// components

import Card from "../card/card.component.jsx";

// css
import './card-list.styles.css'


class CardList extends Component {
    
    render() {

        const {monsters, filterBy} = this.props;

        let filteredMonstesrs =  monsters.filter(el => el.name.toLowerCase().includes(filterBy.toLowerCase()))
        
        return <div className="card-list">

            {
                filteredMonstesrs.map((m) => {
                
                const {name, id, email} = m;

                return (
                    
                    < Card name={name} id={id} email={email}/>
                
                );
            
            
            })
            }

        </div>;
    }

}


export default CardList;