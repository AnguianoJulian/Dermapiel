import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        users: JSON.parse(localStorage.getItem('users')) || [],
        currentUser: JSON.parse(localStorage.getItem('currentUser')) || null
    }),

    actions: {
        register(userData) {
            const exists = this.users.find(user => user.email === userData.email);
            if (exists) throw new Error("El correo ya está registrado.");

            this.users.push(userData);
            localStorage.setItem('users', JSON.stringify(this.users));
        },

        login(email, password) {
            const user = this.users.find(user => user.email === email && user.password === password);
            if (!user) throw new Error("Credenciales incorrectas.");

            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
        },

        logout() {
            this.currentUser = null;
            localStorage.removeItem('currentUser');
        }
    }
});
