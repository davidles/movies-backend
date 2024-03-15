
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param { import('sequelize/types').DataTypes } dataTypes 
 */

module.exports = (sequelize, dataTypes) =>{
    const alias = 'Movie';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: dataTypes.STRING,
            allowNull: false
        },

        rating: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        awards: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        release_date: {
            type: dataTypes.DATE
        },

        length: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        created_at:{
            type: dataTypes.DATE

        },

        updated_at:{
            type: dataTypes.DATE

        }
    }

    const config = {
        timestamps: false,
        tablename: 'movies'
    }

    const Movie = sequelize.define(alias, cols,  config);

    return Movie;
}