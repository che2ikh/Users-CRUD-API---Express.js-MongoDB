const mongoose = require('mongoose'); 

const dotenv = require('dotenv'); 

dotenv.config(); 

const connectDB = async () => { 
    
try { 

await mongoose.connect(process.env.MONGODB_URI); 
console.log('Connexion à MongoDB réussie'); 

} catch (error) { 

console.error('Échec de la connexion à MongoDB', error);         
} 
}; 


module.exports = connectDB; 