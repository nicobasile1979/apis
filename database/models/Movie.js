module.exports = function(sequelize, dataTypes) {
    let alias = "Movie";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED
        },
        release_date: {
            type: dataTypes.DATE
            
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
       
    }
    let config = {
        tableName: "movies",
        timestamps: true,
        underscored: true
    }
    
    let Movie = sequelize.define(alias, cols, config);

    

    return Movie;
}