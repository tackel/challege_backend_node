const Models = require("../models");

const Personajes = Models.Personaje;

const getAllPersonajes = async (req, res, next) => {
  try {
    const result = await Personajes.findAll({
      attributes: ["image", "name"],
    });
    if (result.length === 0) {
      return res.status(404).json({ message: "No se encontraron personajes" });
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getPersonajesAll = async (rec, res, next) => {
  try {
    const result = await Personajes.findAll();
    if (result.length === 0) {
      return res.status(404).json({ message: "No se encontraron personajes" });
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getPersonaje = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Personajes.findOne({ where: { id: id } });
    if (result === null) {
      return res.status(404).json({ message: "No hay personaje con este id" });
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createPersonaje = async (req, res, next) => {
  try {
    const personaje = {
      image: req.body.image,
      name: req.body.name,
      ege: req.body.ege,
      weight: req.body.weight,
      history: req.body.history,
      associated_movie: req.body.associated_movie,
    };
    const createdPers = await Personajes.create(personaje);
    res.status(201).json(createdPers);
  } catch {
    res.status(404).json({ msg: "Error al cargar datos" });
  }
};

const deletePersonaje = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Personajes.destroy({ where: { id: id } });
    res.status(201).json({ msg: "id " + id + " Eliminado" });
  } catch {
    res.status(404).json({ msg: "Id no encontrado" });
  }
};

const updatePersonaje = async (req, res, next) => {
  try {
    const { id } = req.params;
    const personaje = req.body;
    const result = await Personajes.update(personaje, { where: { id: id } });
    if (result[0] === 0)
      return res.status(400).json({
        msg: "id no encontrado",
      });
    res.status(200).json({ msg: "acualizado el id " + id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPersonajes,
  getPersonajesAll,
  getPersonaje,
  createPersonaje,
  deletePersonaje,
  updatePersonaje,
};
