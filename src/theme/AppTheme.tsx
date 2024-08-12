import { StatusBar, StyleSheet } from "react-native";

export const styles=StyleSheet.create({

    title:{
        fontSize:30,
        color:"white",
        textAlign:"center",
        paddingTop:20
        
        
    },

    contentbody:{
        paddingVertical:20,
        paddingHorizontal:45,
        backgroundColor:"rgb(22, 39, 184)",
        borderTopRightRadius:25,
        borderTopLeftRadius:25
    },
    text:{
        color:"white",
        fontSize:30,
        textAlign:"center"
    },
    input:{
        backgroundColor:"rgb(  249, 156, 156  )",
        borderColor:"blue",
        borderRadius:15,
        paddingVertical:10,
        paddingHorizontal:10,
        marginTop:15
    },
    button:{
        paddingVertical:10,
        backgroundColor:"white",
        borderRadius:10,
        height:40,
        alignItems:"center",
        marginTop:25,
        marginLeft:100,
        width:100
    },

    iconVisibility:{
        position:"absolute",
        right:20,
        zIndex:1,
        marginTop:20
    },

    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title1: {
          
          fontSize: 32,}
})