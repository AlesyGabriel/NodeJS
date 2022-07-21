module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "root",
    database: process.env.NODE_ENV === "test" ? "syscondom_test" : "syscondom",
    logging: false,
    define: {
        timestamp: true,
        underscored: true
    }
}