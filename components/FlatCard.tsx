import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function FlatCard() {
  const [text, setText] = useState(''); // To store the input text
  const [items, setItems] = useState<string[]>([]); // Specify that items is an array of strings

  const handleAddItem = () => {
    if (text.trim()) {
      setItems([...items, text]); // Add the new text to the items list
      setText(''); // Clear the TextInput after adding the item
    }
  };
  useEffect(() => {
    // Clear the items when the component is mounted (e.g., when app is refreshed)
    setItems([]);
  }, []);
  const handleDeleteItem = (index: number) => {
    const updatedItems = items.filter((_, itemIndex) => itemIndex !== index); // Remove item at the specific index
    setItems(updatedItems); // Update the state with the new items list
  };

  return (
    <View style={styles.bodyView}>
      <Text style={styles.headerLiner}>To Do</Text>
      <TouchableOpacity onPress={handleAddItem}>
        <Text style={styles.plusText}>Add+</Text>
      </TouchableOpacity>  
      <TextInput
        style={styles.textInput}
        placeholder="Enter text here"
        value={text}
        onChangeText={setText}
      />      
          
      {/* <View style={styles.itemList}>
        {items.map((item, index) => (
          <Text key={index} style={styles.itemText}>{item}</Text>
        ))}
      </View> */}
      <ScrollView style={styles.itemList}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            
            {/* Delete Button/Icon */}
            <TouchableOpacity onPress={() => handleDeleteItem(index)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>🗑️</Text> {/* Delete icon, you can replace this with an actual icon if preferred */}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: 'black',
    borderWidth: 2,
    borderColor: 'grey',
    borderBottomWidth: 1,
    marginRight: 10, // Space between TextInput and Text
    padding: 5,
    width: 200,
    flex: 1, // Makes the TextInput take up the available space
    height: 40, // Defines the height for the TextInput
  },
  bodyView: {
    margin: 10,
    flexDirection: 'column', // Arrange elements vertically
    alignItems: 'flex-start', // Align items to the left
    width: '100%', // Ensure full width for the container
    
  },
  plusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green', // Style for the '+' text
    marginTop: 10, // Add space above the '+' sign
    width:50,
  },
  headerLiner: {
    fontSize: 24, // Bigger font for the header
    fontWeight: 'bold',
    marginBottom: 10, // Add some spacing below the header
    color: 'blue', // Optional color for the header
  },
  itemList: {
    marginTop: 20, // Add space above the list
    width: '100%', // Ensure the list takes full width
  },
  itemContainer: {
    flexDirection: 'row', // Arrange item and delete button in a row
    justifyContent: 'space-between', // Space between text and delete button
    alignItems: 'center', // Vertically align them
    paddingVertical: 10,
    width: 300
  },
  itemText: {
    fontSize: 18,
    color: 'black',
    flex: 1, // Ensure the item text takes available space
  },
  deleteButton: {
    padding: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  deleteText: {
    fontSize: 18,
    color: 'red', // Style for the delete icon/text
  },

});
