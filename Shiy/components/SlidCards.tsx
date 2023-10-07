import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SlidCards() {
  return (
    <View>
      <Text style={styles.headingText}>SlidCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.Card,styles.elevated]}>
            <Text>
                Tap
            </Text>
        </View>

        <View style={[styles.Card,styles.elevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.Card,styles.elevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.Card,styles.elevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.Card,styles.elevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.Card,styles.elevated]}>
            <Text>
                Tap
            </Text>
        </View>
      </ScrollView>
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
        padding:8,
      },

      Card:{
        width:100,
        height:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5,
        margin:4
      },
    
      elevated:{ 
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#EF5354'

      }
})