import React, { useEffect, useState } from 'react'
import Recipes from './components/Recipes'
import "./App.css"


const App = () => {

  const APP_ID = "e9608c68"
  
  const API_KEY = "0e979af04124ba996ad3ed69811fa813"
  

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
     getRecipes()
  },[query])

  const getRecipes = async () => {
    const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)

    const data = await responce.json()

    setRecipes(data.hits);
    console.log(data.hits)
  }
  
  const updateSearch = e => {
    setSearch(e.target.value)

  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search);
    setSearch('')
  }
 

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form' >
        <input onChange={updateSearch} className='search-bar' value={search} type='text'/>
        <button 
         className='search-button'
         type='submit'> Search
           </button>
      </form>
      {recipes.map((recipe,index) => (
        <Recipes
        key = {index} 
        title={recipe.recipe.label}
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
  )
}

export default App


