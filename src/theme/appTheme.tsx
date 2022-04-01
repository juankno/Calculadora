import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },

    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },

    resultadoCorto: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 30,
        textAlign: 'right',
    },

    boton:{
        height: 80,
        width: 80,
        backgroundColor: '#333333',
        borderRadius: 100,
        justifyContent: 'center',
    },

    textoBoton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },

});


export default styles;
