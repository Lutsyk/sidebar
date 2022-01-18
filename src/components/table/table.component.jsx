import React from "react";
import { CardTable } from "../cardTable/cardTable.component";
import './table.styles.css'


export const Table = ({ users, handleClick }) => {

    
    return(
            <table>
            <thead>
            <tr>
                <th className="arrowSection" onClick={handleClick} data-value='name'>Name  <span></span></th>
                <th className="arrowSection" onClick={handleClick} data-value='birth_year'>Birth Year  <span></span></th>
                <th className="arrowSection" onClick={handleClick} data-value='height'>Height  <span></span></th>
                <th className="arrowSection" onClick={handleClick} data-value='mass'>Mass  <span></span></th>
            </tr>
            </thead>
            <tbody>
                {
                users.map(user => (
                    <CardTable key={user.name} user={user}/>
                ))
                }
            </tbody>
        </table>
    );
}