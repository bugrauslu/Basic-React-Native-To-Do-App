import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import ItemList from './src/ItemList';

export default class element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: []
    };
  }


  handleSave = () => {
    const { text , data } = this.state;
    data.push({text});
    this.setState({data ,text:""})
    console.log(data)
  }

  render() {
          const {text , data} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 25, color: "#472D2D",fontWeight:"bold", textAlign: "center" }}>To-Do Application</Text>
          <View style={{ backgroundColor: '#F5EFE6', padding: 10, flexDirection: "row" , borderRadius:14}}>
            <TextInput onChangeText={(input)=> this.setState({ text:input })} style={styles.input}></TextInput>
            <TouchableOpacity style={{ width: "30%", marginLeft: 5, backgroundColor: "#7895B2", alignItems: "center", justifyContent: "center"  ,borderRadius:25}} onPress={this.handleSave}>
              <Text style={{ fontWeight:"bold", fontSize:17, color: "#472D2D" }}>ADD</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View>
          {data.map((item)=>{
            return <ItemList text={item.text}/>
          })}
        </View>


      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5EFE6',
    flex: 1,
  },
  title: {
    backgroundColor: "#7895B2",
    padding: 10,
  },
  input: {
    padding: 10,
    backgroundColor: '#AEBDCA',
    width: '70%',
    borderRadius:25
  }
})
