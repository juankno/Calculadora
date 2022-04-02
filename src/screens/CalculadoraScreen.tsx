import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Boton from '../components/Boton';
import styles from '../theme/appTheme';

const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('100');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0');
    };

    const armarNumero = (numeroTexto: string) => {
        setNumero(numero + numeroTexto);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.resultadoCorto}>{numeroAnterior}</Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}</Text>

            <View style={styles.fila}>
                <Boton texto="C" color="9B9B9B" accion={limpiar} />
                <Boton texto="+/-" color="9B9B9B" accion={limpiar} />
                <Boton texto="del" color="9B9B9B" accion={limpiar} />
                <Boton texto="/" color="FF9427" accion={limpiar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="7" accion={armarNumero} />
                <Boton texto="8" accion={armarNumero} />
                <Boton texto="9" accion={armarNumero} />
                <Boton texto="X" color="FF9427" accion={limpiar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="4" accion={armarNumero} />
                <Boton texto="5" accion={armarNumero} />
                <Boton texto="6" accion={armarNumero} />
                <Boton texto="-" color="FF9427" accion={limpiar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="1" accion={armarNumero} />
                <Boton texto="2" accion={armarNumero} />
                <Boton texto="3" accion={armarNumero} />
                <Boton texto="+" color="FF9427" accion={limpiar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="0" accion={armarNumero} ancho />
                <Boton texto="." accion={armarNumero} />
                <Boton texto="=" color="FF9427" accion={limpiar} />
            </View>

        </View>
    );
};



export default CalculadoraScreen;
