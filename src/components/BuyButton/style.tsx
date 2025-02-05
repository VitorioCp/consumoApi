import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#01a6b3",
        padding:10,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 8,
    },
    button:{
        flexDirection: "row", 
    },
    icon:{
        marginRight:10,
    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
        fontStyle: "italic",
    }
})