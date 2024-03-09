import { Text,View,TextInput,StyleSheet } from "react-native"
import { GlobalStyles } from "../../inits/global"
const Input=({label,style,...config})=>{

    const isMultiline=!!(config?.multiline)
    return(
        <View style={[styles.container,style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={[styles.input,isMultiline?styles.inputMultiline:""]} {...config}/>
        </View>
    )
}
export default Input


const styles= StyleSheet.create({
    container:{
        marginHorizontal:4,
        marginVertical:8
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        padding:6,
        borderRadius:8,
        fontSize:18,
        color:GlobalStyles.colors.primary700
    },
    label:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:4
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    }
})