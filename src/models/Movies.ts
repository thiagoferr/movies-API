
import { Sequelize, DataType, DataTypes } from "sequelize";
import { db }  from "../database"

const Movies = db.define('movie',{
    movie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    budget: {
        type: DataTypes.INTEGER,
    },
    homepage: {
        type: DataTypes.STRING,
    },
    overview: {
        type: DataTypes.STRING,
    },
    popularity: {
        type: DataTypes.DECIMAL,
    },
    release_date: {
        type: DataTypes.DATE,
    },
    revenue: {
        type: DataTypes.INTEGER,
    },
    runtime: {
        type: DataTypes.INTEGER,
    },
    movie_status: {
        type: DataTypes.STRING,
    }, 
    tagline: {
        type: DataTypes.STRING,
    },
    vote_average: {
        type: DataTypes.DECIMAL,
    },
    vote_count: {
        type: DataTypes.INTEGER,
    },
},

    {
        tableName: "movie",
        timestamps: false,
    }
);

    export { Movies };

