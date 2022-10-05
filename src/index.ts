import dotenv from'dotenv';
import { app } from "./app";
import routes from "./routes"
dotenv.config();

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port" , process.env.PORT);
});