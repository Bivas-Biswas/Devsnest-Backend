const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("postgres", "postgres", "2020", {
    host: "localhost",
    dialect: "postgres"
})

sequelize.sync();

(async () => {
    try{
        await sequelize.authenticate()
        console.log("Connectin established with DB successfully")
    }catch (e) {
        console.log("Unable to connect to the database", e)
    }
})();

module.exports = sequelize