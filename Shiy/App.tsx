import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import SlidCards from './components/SlidCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <SlidCards />
      <FancyCard />
      <ActionCard />
      <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}



export default App