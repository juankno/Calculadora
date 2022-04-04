import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import Boton from '../components/Boton';
import styles from '../theme/appTheme';

enum Operadores {
    dividir, multiplicar, sumar, restar,
}

const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('100');
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

    return (
        <View style={styles.container}>

            {(numeroAnterior !== '0') && (
                <Text style={styles.resultadoCorto}>{numeroAnterior}</Text>
            )}

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}</Text>

            <View style={styles.fila}>
                <Boton texto="C" color="9B9B9B" accion={limpiar} />
                <Boton texto="+/-" color="9B9B9B" accion={cambiarSignos} />
                <Boton texto="del" color="9B9B9B" accion={botonEliminar} />
                <Boton texto="/" color="FF9427" accion={botonDividir} />
            </View>

            <View style={styles.fila}>
                <Boton texto="7" accion={armarNumero} />
                <Boton texto="8" accion={armarNumero} />
                <Boton texto="9" accion={armarNumero} />
                <Boton texto="X" color="FF9427" accion={botonMultiplicar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="4" accion={armarNumero} />
                <Boton texto="5" accion={armarNumero} />
                <Boton texto="6" accion={armarNumero} />
                <Boton texto="-" color="FF9427" accion={botonRestar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="1" accion={armarNumero} />
                <Boton texto="2" accion={armarNumero} />
                <Boton texto="3" accion={armarNumero} />
                <Boton texto="+" color="FF9427" accion={botonSumar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="0" accion={armarNumero} ancho />
                <Boton texto="." accion={armarNumero} />
                <Boton texto="=" color="FF9427" accion={calcular} />
            </View>

        </View>
    );
};



export default CalculadoraScreen;
