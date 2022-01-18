import React from "react";
import './cardTable.styles.css'

export const CardTable = props => {

    return(
        <tr key={props.user.name}>
                    <td>{props.user.name}</td>
                    <td>{props.user.birth_year}</td>
                    <td>{props.user.height}</td>
                    <td>{props.user.mass}</td>
        </tr>
    );
}