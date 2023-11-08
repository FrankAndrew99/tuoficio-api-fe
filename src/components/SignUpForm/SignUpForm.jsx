import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

export const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dni, setDNI] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            birthdate: birthdate,
            phoneNumber: phoneNumber,
            dni: dni,
        };
        console.log(userData)
        try {
            console.log(userData)
            const response = await fetch('http://localhost:3000/add-client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),

            });
            const body = JSON.stringify(userData)
            console.log(body)
            if (response.status === 201) {
                setIsRegistered(true);
            } else {
                console.log("Error al registrar el usuario");
            }
        } catch (error) {
            // Manejar errores aquí
        }
    };

    return (
        <div className='container1 box'>
            {isRegistered ? (
                <Link to="/App" />
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Registrarse</h2>
                    <div>
                        <label htmlFor="firstName">Nombre</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Apellido</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="birthdate">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            id="birthdate"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Número de Teléfono</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="dni">DNI</label>
                        <input
                            type="text"
                            id="dni"
                            value={dni}
                            onChange={(e) => setDNI(e.target.value)}
                        />
                    </div>
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
                    <Link to="/login"><button type="submit">Volver</button></Link>
                </form>
            )}
        </div>
    );
};
