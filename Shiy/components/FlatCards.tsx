import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style = {[styles.card,styles.cardOne]}>
          <Text>
            Hello
          </Text>
        </View>
        <View style = {[styles.card,styles.cardTwo]}>
          <Text>
            Hiii
          </Text>
        </View>
        <View style = {[styles.card,styles.cardThree]}>
          <Text>
            Hello
          </Text>
        </View>
        <View style = {[styles.card,styles.cardOne]}>
          <Text>
            Hello
          </Text>
        </View>
        <View style = {[styles.card,styles.cardOne]}>
          <Text>
            Hello
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal:10
    },
  
    container:{
      flex:1,
      flexDirection:'row',
      padding:30
    },
  
    card: {
        width:100,
        height:100,
        borderRadius: 20,
        margin: 8,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
  
    cardOne:{
        backgroundColor:'#EF5354'
    },

    cardTwo:{
      backgroundColor:'#50DBB4'
  },

  cardThree:{
    backgroundColor:'#5DA3FA'
},

    carddata:{
        margin: 20
    }
  
  })