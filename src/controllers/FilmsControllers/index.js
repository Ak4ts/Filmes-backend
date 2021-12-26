const Films = require("../../models/Films");

module.exports = {
  async getFilms(request, response) {
    const films = await Films.find();
    if (films) return response.status(200).json({ films });
    return response.status(404).json({ error: "Cannot find any moovie" });
  },
  async postFilms(request, response){
    const { filmName, date } = request.body
    const film = new Films({
      filmName, date
    })
    try{
      await film.save();
      return response.status(201).json({ message: "Film added to the database!" });
    } catch(error){
      return response.status(400).json({ error });
    }
  }
};
