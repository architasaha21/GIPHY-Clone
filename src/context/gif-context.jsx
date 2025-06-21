import { createContext } from "react"
import { GiphyFetch } from "@giphy/js-fetch-api"
/*eslint-disable react/prop-types*/

const GifContext = createContext()

const GifProvider = ({ children }) => {

  const [gifs,setGifs] = useState([])
  const [favorites, setFavorites] = useState([])
  const [filter, setFilter] = useState("gifs")
  
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)

    return <GifContext.Provider value={{gf, gifs, setGifs, filter, setFilter, favorites}}>{children}</GifContext.Provider>
}
export const GifState = () => {
  return useContext(GifContext)
}
export default GifProvider