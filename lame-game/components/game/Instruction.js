import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors";
function Instruction ({children, style}) {
    return (
        <Text style = {[styles.instructionStyle, style]}>{children}</Text>
    )
}

export default Instruction;

const styles = StyleSheet.create({
  instructionStyle: {
    fontFamily : 'open-sans-regular',
    color: Colors.accent500,
    fontSize: 25,
  },
});

