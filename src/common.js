import { Alert, Platform } from 'react-native'

const server = 'http://192.168.100.4:5000' 

function showError(mensagem) {
        Alert.alert(mensagem)
}

function showSuccess(mensagem) {
    Alert.alert(mensagem)
}

export { server, showError, showSuccess }