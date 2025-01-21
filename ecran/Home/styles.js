import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/composantes";

const dashBoardStyles = StyleSheet.create({
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        backgroundColor:'white',
    },
    userImg : {
        width:50,
        height: 50,
        borderRadius:50/2,
    },
    userName:{
        fontSize : 16,
    },

    // style de flatlist
    scrollableList :{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        
    },
    scrollableItem : {
        flexDirection:'column',
        paddingHorizontal: 15,
        paddingVertical:15,
        backgroundColor:'white',
        marginRight:15,
        elevation : 1,
        textAlign : 'center'
    },

    mainText : {
        fontWeight :'bold',
        fontSize:16,
    },
    subtext:{
        marginTop:3,
        fontSize: 12,
    }







});

export default dashBoardStyles;
