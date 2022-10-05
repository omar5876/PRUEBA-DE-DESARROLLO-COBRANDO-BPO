
# Empleado Microservicio

Al clonar el proyecto, hay que ejecutar el comando  
`npm install`

El comando para iniciar el proyecto es:

`npm run dev`

## Variables de entorno

Hay que crear un archivo .env y crear las siguiente variables

`DATABASE_URL`

Aqui ira la url de la base de datos en la que toca poner nuestros datos como el usuario y la contraseña, ademas de el nombre de la base de datos que vamos a usar, tiene esta estructura:
"postgresql://usuario:contraseña@localhost:5432/nombre de la base de datos"


`PORT`

Aqui va el puerto que en este caso es 1234


## Documentacion
El microservicio consta de 4 endpoinds que son GET, POST, DELETE y UPDATE





- GET   /empleado/:codigo
En este endpoind se le pasa el codigo como parametro, por ejemplo /empleado/3
### Respuesta


    {    
    "codigo": 1,
    "nif": "Dfv",
    "nombre": "Omar",
    "apellido1": "ramirez",
    "apellido2": rodriguez,
    "codigo_departamento": 1
    }


- POST /empleado
En este endpoind debemos pasar la informacion por body, los campos nif, nombre y apellido1 son campos requerido
### info por body
    {    
    "nif": "Dfv",
    "nombre": "Omar",
    "apellido1": "ramirez",
    }

### Respuesta
la respuesta sera el empleado que fue creado

    {    
    "codigo": 1,
    "nif": "Dfv",
    "nombre": "Omar",
    "apellido1": "ramirez",
    "apellido2": rodriguez,
    "codigo_departamento": 1
    }

- PUT /empleado/:codigo
En este endpoind se le pasara el codigo como parametro, y lo campos que se van a actualizar se pasaran por body
por ejemplo /empleado/1, y por body queremos actualizar el nir y el nombre

    {    
    "nif": "14",
    "nombre": "Andres",
    }

### Respuesta
la respuesta sera el empleado con la informacion actualizada

    {    
    "codigo": 1,
    "nif": "14",
    "nombre": "Andres",
    "apellido1": "ramirez",
    "apellido2": rodriguez,
    "codigo_departamento": 1
    }

- DELETE /empleado/:codigo
En este endpoint se pasa como parametro el codigo para poderlo eliminar, por ejemplo /empleado/1

### Respuesta
la respuesta sera la informacion con el empleado eliminado

    {
    message: "empleado has been deleted"
    empleado:{    
    "codigo": 1,
    "nif": "14",
    "nombre": "Andres",
    "apellido1": "ramirez",
    "apellido2": rodriguez,
    "codigo_departamento": 1
    }
    }
