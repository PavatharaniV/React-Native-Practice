import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headding}>ActionCard</Text>
      <View style={[styles.card,styles.elevation]}>
        <View style={styles.body}>
          <Text style={styles.head}>
            Helloo theree!!!!!!!!!!!!!!!!!!!!!!
          </Text>
        </View>
        <Image 
          source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRk64qVUz9HVkjdhgF85CEu49kia3WEvk0A&usqp=CAU'
          }}
          style={styles.cardImage}
        />
        <View style={styles.ContainerBody}>
          <Text numberOfLines={3}>
          Duck is the common name for numerous species of waterfowl in the family Anatidae. Ducks are generally smaller and shorter-necked than swans and geese, which are members of the same family. Divided among several subfamilies, they are a form taxon; they do not represent a monophyletic group (the group of all descendants of a single common ancestral species), since swans and geese are not considered ducks. 
          Ducks are mostly aquatic birds, and may be found in both fresh water and sea water.
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={()=>{openWebsite('https://en.wikipedia.org/wiki/Duck')}}>
            <Text style={styles.follow}>
              Read more..
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{openWebsite('https://en.wikipedia.org/wiki/Duck')}}>
            <Text style={styles.follow}>
              Follow
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headding:{
        fontWeight:'bold',
        
    },

    card:{
      width:380,
      height:470,
      marginHorizontal:6,
      marginVertical:4,
      borderRadius:16,
      backgroundColor:'#EF5354',

    },

    elevation:{
        elevation:4,
        shadowOffset:{
          width:1,
          height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.5
    },

    body:{

    },
    head:{

    },
    cardImage:{
      height:300
    },

    ContainerBody:{

    },
    footer:{

      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      

    },
    follow:{
      fontSize:16,
      color:'#000000',
      backgroundColor:'#FFFFFF',
      paddingHorizontal:20,
      paddingVertical:6
    }
})