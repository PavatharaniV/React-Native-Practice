import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending</Text>
      <View style={[styles.cards,styles.cardsElevated]}>
        <Image 
        source={{
           uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMeJSlc9YuEyoSO_nWVNyjGWef-eMzd6gEQ&usqp=CAU'
        }}
        style={styles.imageStyle}
        />
        <View style={styles.cardBody}>
        <View >
           <Text style={styles.Cardtitle} > Bird</Text>
      </View>
      <View style={styles.CardDesc}>
           <Text> Hello there !!!!!</Text>
      </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal:10
  },
  cardBody:{
    padding:10,
    flex: 1,
    flexGrow:1 
  },
  cardsElevated:{
    backgroundColor:'#FFFFFF',
    elevation: 2,
    shadowOffset:{
      width:1,
      height:1
    }
  },

  cards:{
    width: 350,
    height: 360,
    borderRadius:17,
    marginVertical:12,
    marginHorizontal: 24
  },
  imageStyle:{
    height:180,
    borderRadius:6,

  },

  Cardtitle:{
    fontSize:17,
    fontWeight:'bold',
    color:'#000000',
    marginBottom: 4
  },

  CardDesc:{
    flexShrink:1
  }
})