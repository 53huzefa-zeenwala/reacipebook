import React from 'react'

const Recipes = ({title , calories , image, ingredients}) => {
  return (
    <>
    <h1>{title}</h1>
    <ul>
        {ingredients.map((ingrediant , index) => (
            <li key={index * 100}>{ingrediant.text}</li>
            
        ))}
    </ul>
    <p>{calories}</p>
    <img src={image} />
    </>
  )
}

export default Recipes