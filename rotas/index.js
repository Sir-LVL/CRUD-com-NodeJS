const rotaAtedimento = require("./atedimentorotas");
module.exports = (app) => {
    app.use(rotaAtedimento);

}