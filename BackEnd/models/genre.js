const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    genre:{
        type:String,
        required:true
    }
});

const Genre = mongoose.model('Genre',genreSchema);

function validateGenre(genre){
    const schema = {
        genre: Joi.string().required()
    };

    return Joi.validate(genre,schema);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;