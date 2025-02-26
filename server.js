const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;
const USERS_FILE = 'users.json';

app.use(express.json());  // Permite procesar cuerpos de solicitud en formato JSON
app.use(cors());  // Habilita CORS para que tu servidor pueda ser accesible desde el frontend

// Cargar usuarios desde JSON
const loadUsers = () => {
    if (!fs.existsSync(USERS_FILE)) return [];
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
};

// Guardar usuarios en JSON
const saveUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Ruta para registrar usuarios
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    console.log("Datos recibidos:", req.body);  // Verifica los datos que se reciben

    const users = loadUsers();

    // Verificar si el usuario ya existe por el correo electrónico
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Si no existe, agregar el nuevo usuario
    users.push({ name, email, password });
    saveUsers(users);
    res.json({ message: 'Usuario registrado con éxito' });
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const users = loadUsers();

    // Buscar el usuario que coincida con el correo y la contraseña
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    res.json({ message: 'Inicio de sesión exitoso', user });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
