import React from "react";
import './composition.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Composition(props) {

    const deleteComposition = () => {
        props.removeImg(props.id)
        
    }

    return (
        <div className="item" style = {props.style}>
            <img className="item-img" src = {props.src}/>
            <button className="delete-img" onClick = {() => deleteComposition()}>
                <i className="bi bi-x-square"></i>
            </button>
        </div>
    )
}