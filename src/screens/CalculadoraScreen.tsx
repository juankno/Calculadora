import React from 'react';
import { View, Text } from 'react-native';
import Boton from '../components/Boton';
import styles from '../theme/appTheme';

const CalculadoraScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.resultadoCorto}>1,500.00</Text>
            <Text style={styles.resultado}>1,500.00</Text>

            <View style={styles.fila}>
                <Boton texto="C" color="9B9B9B" />
                <Boton texto="+/-" color="9B9B9B" />
                <Boton texto="del" color="9B9B9B" />
                <Boton texto="/" color="FF9427" />
            </View>

        </View>
    );
};



export default CalculadoraScreen;
