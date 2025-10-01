## POSTGRES SETUP 

1. pull the docker image postgres
```bash
 docker pull postgres
```

2. run the image by giving env variables
```bash
 docker run --name postgres-db -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres
```

3. now execute cmnd 
```bash
docker exec -it postgres-db psql -U  postgres
```

4. Create dB in PGAdmin  

5. Connect to our application and add in config file 

``` bash 
import pkg from "pg" ;

const { Pool } = pkg;

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.on('connect', () => {
    console.log('Postgres connected')
})
export default db

```

