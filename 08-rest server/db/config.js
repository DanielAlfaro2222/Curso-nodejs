const mongoose = require('mongoose');

async function connectionDataBase() {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Base de datos conectada');
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    connectionDataBase,
}