import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts =[{
        imag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRk64qVUz9HVkjdhgF85CEu49kia3WEvk0A&usqp=CAU',
        name:'Shiyam ',
        mobile:'9090356466'
    },
    {
        imag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRk64qVUz9HVkjdhgF85CEu49kia3WEvk0A&usqp=CAU',
        name:'Pava',
        mobile:'9095016653'
    }
]

  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({name,mobile,imag})=>(
            <View key={name} style={styles.userCard}>
                <Image 
                  source={{
                    uri:imag
                  }}
                  style={styles.userIm}
                />

                <Text style={styles.name}>{name}</Text>
                <Text style={styles.mobile}>{mobile}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{

    },
    container:{

    },
    userCard:{

    },
    userIm:{

    },

    name:{

    },

    mobile:{

    }

})