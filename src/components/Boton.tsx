import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    texto: string;
    color?: string;
}

const Boton = ({ texto, color = '#2D2D2D' }: Props) => {
    return (
        <View style={{
            ...styles.boton,
            backgroundColor: `#${color}`,
        }}>
            <Text style={styles.textoBoton}>{texto}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },

    textoBoton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Boton;
