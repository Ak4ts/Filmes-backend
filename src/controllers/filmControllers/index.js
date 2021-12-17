const Films = require("../../models/Films");

module.exports = {
  async getFilms(request, response) {
    const films = await Films.find();
    if (films) return response.status(200).json({ films });
    return response.status(404).json({ error: "Cannot find perguntas" });
  },
  async register(request, response){
    const { filmName, date, alreadySeen, groupID } = request.body
    const film = new Films
  }
};
