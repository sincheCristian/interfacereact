import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/composantes";
const SymptomStyle = StyleSheet.create({
    item:{
        marginRight: 15,
        flexDirection : 'row',
        backgroundColor: 'white',
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        alignItems:'center',
        borderRadius: 5,
    },
    itemImg:{
        width: 30, height:30, marginRight:5
    }
    
});

export default SymptomStyle;
