import React from 'react';
import { View, Text } from 'react-native';
import styles from '../theme/appTheme';

const CalculadoraScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.resultadoCorto}>1,500.00</Text>
            <Text style={styles.resultado}>1,500.00</Text>

            <View>
                {/* Boton */}
                <View style={styles.boton}>
                    <Text style={styles.textoBoton}>1</Text>
                </View>
            </View>
        </View>
    );
};



export default CalculadoraScreen;
