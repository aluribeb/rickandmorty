import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard/LocationCard'
import ResidentCard from './components/ResidentCard/ResidentCard'
import './assets/cruz.png'

function App() {

  const locationId = getRandomNumber(126)
  const [input, setInput] = useState()
  const url = `https://rickandmortyapi.com/api/location/${input || locationId}`
  const [location, getLocation, hasError] = useFetch(url)


  useEffect(() => {
    getLocation()

  }, [input])

  const inputLocation = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    setInput(inputLocation.current.value)
  }

  console.log(location)
  return (
    <div className='App__container'>
      <header className='App__header'>
      <img className='App__header__img' src='src/assets/header.jpg'/>
      <h1 className='App__header__title'>Rick & Morty</h1>
      </header>
      <form className='App__input__btn'onSubmit={handleSubmit}>
        <input className='input' ref={inputLocation} type='text' />
        <button className='App__btn'>Search</button>
      </form>
      {
        hasError
          ? <h2 className='hasError__h2'> <span className='hasError__x'> X </span>  Oops! Looks like you tried to do something besides typing a number from 1 to 126 😕 Please, try again.  </h2>
          :
          <>
            <LocationCard
              className='LocationCard__visuals'
              location={location}
            />
            <div className='resident__container'>
              {
                location?.residents.map(url => (
                  <ResidentCard
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
      }

    </div>
  )
}

export default App
