import React, { Component, PropTypes } from 'react';
import {ListView, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
	
var REQUEST_URL = 'https://api.beeline.sg/routes/search_by_region?regionId=24&areaName=North-east%20Region';

//export default will allow other components to import
export default class MyScene extends Component {
 constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
 
 }

  componentDidMount() {
    //   var jsonURL = REQUEST_URL;
    //   this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(jsonURL)
    //   });
    this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
        .then((response)=> response.json())
        .then((responseData)=> {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData),
                isLoading: false
            });
        })
        .done();
    }


    render() {
        if (this.state.isLoading) {
            return this.renderLoadingView();
        }
        return (
            <ListView>
                style={styles.listView}
                dataSource = {this.state.dataSource}
                renderRow = {(rowData)=>
                <Text>Name: {rowData.name}</Text>}
                {/*<Text>Schedule: {rowData.schedule}</Text>}
                <Text>Features: {rowData.features}</Text>}
                <Text>Label: {rowData.label}</Text>}*/}
            
            </ListView>
        );
    }

    renderLoadingView() {
        return (
            <View style= {styles.loading}>
                <Text> Loading books... </Text>
            </View>
        );
    }


}
  /*render() {
    return (
        <View style={{flex: 1, paddingTop: 22}}>
        <TouchableHighlight onPress={this.props.onForward}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
          <Text>Current Person: {rowData}</Text>}
        
          
        />

        </TouchableHighlight>
      </View>
        )

        {/*<View>
        <Text>Current Scene: {this.props.title}</Text>

        {/*it will call onForward function in index.js
        {/*<TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      {/*</View>
    
  }
}*/



var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
   },
   listView: {
       backgroundColor: '#F5FCFF'
   },
   loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }
});