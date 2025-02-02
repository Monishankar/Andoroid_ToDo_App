import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import FlatCard from './components/FlatCard';

function App() {
  return (
    <SafeAreaView >
      <ScrollView>
        <FlatCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
