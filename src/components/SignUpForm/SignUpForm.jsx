import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        const userData = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch('/http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            });
    
            if (response.status === 201) {
                setIsRegistered(true);
            } else {
                console.log("Eror al registrar el usuario")
            }
        } catch (error) {
            //
        }
        };
  
    return (
        <div>
            {isRegistered ? (
            <Link to="/App" />
        ) : (
            <form onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <div>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button type="submit">Registrarse</button>
            <Link to="/" ><button type="submit">Volver</button></Link>
            </form>
        )}
        </div>
    );
}