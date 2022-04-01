import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
}

const Boton = ({ texto, color = '2D2D2D', ancho = false }: Props) => {
    return (

        <TouchableOpacity>
            <View style={{
                ...styles.boton,
                backgroundColor: `#${color}`,
                width: (ancho) ? 180 : 80,
            }}>
                <Text style={{
                    ...styles.textoBoton,
                    color: (color === '9B9B9B') ? 'black' : 'white',
                }}>{texto}</Text>

            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 100,
    },

    textoBoton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '400',
    },
});

export default Boton;
