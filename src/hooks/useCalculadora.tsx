import { useState, useRef } from 'react';


enum Operadores {
    dividir, multiplicar, sumar, restar,
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    };

    const armarNumero = (numeroTexto: string) => {

        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') { return; }

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                // evaluar si es difente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

                // Evitar  000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);

            } else {
                setNumero(numero + numeroTexto);
            }

        } else {

            setNumero(numero + numeroTexto);
        }

    };

    const cambiarSignos = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    };

    const botonEliminar = () => {
        const nuevoNumero = numero.substring(0, numero.length - 1);

        if (!nuevoNumero) {
            setNumero('0');
        } else if (nuevoNumero === '.') {
            setNumero('0');
        } else if (nuevoNumero === '-') {
            setNumero('0');
        } else if (nuevoNumero === '+') {
            setNumero('0');
        }
        else {
            setNumero(nuevoNumero);
        }

    };

    const mostrarNumeroAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    };

    const botonDividir = () => {
        mostrarNumeroAnterior();
        ultimaOperacion.current = Operadores.dividir;
    };

    const botonMultiplicar = () => {
        mostrarNumeroAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    };

    const botonRestar = () => {
        mostrarNumeroAnterior();
        ultimaOperacion.current = Operadores.restar;
    };

    const botonSumar = () => {
        mostrarNumeroAnterior();
        ultimaOperacion.current = Operadores.sumar;
    };

    const calcular = () => {
        const numero1 = Number(numero);
        const numero2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${numero1 + numero2}`);
                break;
            case Operadores.restar:
                setNumero(`${numero2 - numero1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${numero1 * numero2}`);
                break;
            case Operadores.dividir:
                setNumero(`${numero2 / numero1}`);
                break;
        }

        setNumeroAnterior('0');
    };

    return {
        numeroAnterior,
        numero,
        limpiar,
        cambiarSignos,
        botonEliminar,
        botonDividir,
        armarNumero,
        botonMultiplicar,
        botonRestar,
        botonSumar,
        calcular,
    };
};

