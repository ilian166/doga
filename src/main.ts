import type { Weather } from './asd'
import './style.css'
const apiUrl = 'https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json'

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherData: Weather[] = Object.values(data)
    console.log('Lekért adatok:', weatherData)
  })
  .catch(error => {
    console.error('Hiba történt az adatok lekérése során:', error)
  })

  getElementById('day').textContent = Date.now().toString()