import React from 'react';
import { View, Text } from 'react-native';
import Boton from '../components/Boton';
import styles from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {

    const { numeroAnterior,
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
    } = useCalculadora();


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

