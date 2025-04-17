import Colors from "../../constants/colors"
import { View, StyleSheet } from "react-native"

export default function Card ({children}) {
    return(
        <View style = {styles.inputContainer} >{children}</View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop : 36,
    backgroundColor: Colors.primary800,
    elevation: 4, // shadow effect for android
    shadowColor: "black", // shadow effect for IOS
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
})

