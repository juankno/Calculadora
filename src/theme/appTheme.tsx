import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },

    fondo: {
        flex: 1,
        backgroundColor: 'black',
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

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

});


export default styles;
