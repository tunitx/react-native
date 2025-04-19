import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
export default function RoundLog({ roundNumber, roundGuess }) {
    console.log(roundNumber)
  return (
    <View style={styles.roundLogContainer}>
      <Text style={styles.roundText}>#{roundNumber}</Text>
      <Text style={styles.roundText}>Opponent's Guess: {roundGuess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    roundLogContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : "100%",
        backgroundColor : Colors.accent500,
        borderRadius : 20,
        borderWidth : 1,
        borderColor : Colors.primary800,
        elevation : 5,
        padding : 12,
        marginVertical : 6,
        shadowColor : Colors.primary800,
        shadowOffset : {width : 1, height :4 },
        shadowRadius : 1,
        shadowOpacity : 0.75
    },
    roundText : {
        fontFamily : 'open-sans-regular',
        fontSize : 15,
        color : Colors.primary800
    }
})