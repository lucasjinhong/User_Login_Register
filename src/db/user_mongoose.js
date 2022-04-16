const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/User_Login_Register', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((error) => {
    console.log('something wrong', error);
})