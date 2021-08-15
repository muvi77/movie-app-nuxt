const express = require('express')
const axios = require('axios')

const { OMDB_API_KEY } = process.env
const app = express()

app.use(express.json())

// 접근 주소 : 주소/.netlify/functions/movie
// 접근 주소 : 주소/api/movie/  
app.post('/', async (req, res) => {

  const payload = req.body
  console.log("/// payload /// " + payload)


  const { title, type, year, page, id } = payload

  const url = id
  ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
  : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  try {

    const { data } =  await axios.get(url)
    if(data.Error) {
      // return {
      //   statusCode: 400, 
      //   body: data.Error
      // }

      res.status(400).json(data.Error)
    }

    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(data)
    // }

    res.status(200).json(data)
    
  } catch(error) {
    // return {
    //   statusCode: error.response.status,
    //   body: Error.message
    // }

    res.status(error.response.status).json(error.message)
  }

})

module.exports = app