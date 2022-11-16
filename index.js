const app=require('./app');
const {PORT}=process.env;

app.listen(PORT,() => {
    console.log(`server starte on port ${PORT}`);
})

