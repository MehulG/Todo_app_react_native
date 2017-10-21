import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Note from './Note';

export default class App extends React.Component {

  state = {
    noteArray: [{
      note:'hello babe',
      date:'lol'
    }],
    noteText: ''
  }

  render() {
    let notes = this.state.noteArray.map((val,key) => {
      return <Note key = {key} keyval = {key} val = {val} deleteMethod = { ()=> this.deleteNote(key)}/>
    });

    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      //   <Text>Shake your phone to open the developer.</Text>
      // </View>
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.headerText}>NOTER</Text>
        </View>

        <ScrollView style = {styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style = {styles.footer}>

          <TouchableOpacity onPress = {this.addNote.bind(this)} style = {styles.addButton}>
            <Text style = {styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style = {styles.textInput}
            onChangeText = {(noteText) => this.setState({noteText})} value = {this.state.noteText} placeholder = 'Add note'
            placeholderTextColor = '#def' underlineColorAndroid = 'transparent'></TextInput>
        </View>

      </View>
    );
  }



  addNote(){
    //alert(this.state.noteText);
    if (this.state.noteText) {
      var d = new Date();

      this.state.noteArray.push({
          'date': d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
          'note': this.state.noteText
      });
      this.setState({
        noteArray: this.state.noteArray
      });
      this.setState({
        noteText: ''
      })

    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({
      noteArray: this.state.noteArray
    });
  }


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth: 5,
    borderBottomColor: '#555'
  },
  headerText:{
    color: 'white',
    fontSize:18,
    padding: 26,
    paddingTop: 50
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 100
  },
  footer:{
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    left: 0
  },
  addButton:{
    backgroundColor: '#000',
    width: 90,
    height:90,
    borderRadius: 50,
    borderColor: '#222',
    alignItems: 'center',
    justifyContent:'center',
    elevation: 8,
    marginBottom: -30,
    zIndex: 10
  },
  addButtonText:{
    color: 'white',
    fontSize:20
  },
  textInput:{
    alignSelf:'stretch',
    color: 'white',
    padding:20,
    paddingTop:20,
    backgroundColor:'#222',
    borderTopWidth: 2,
    borderTopColor:'#444'
  }
});
