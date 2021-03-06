import React, { Component } from 'react';
import {ListView, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import ShuttleBusInfo from './ShuttleBusInfo';
	
var SAMPLE_DATA = [{
    "name":"Seletar Aerospace Park to Yio Chu Kang", "label":"L07 (PM)","schedule":"PM, Mon to Fri except P.H."
}]

var REQUEST_URL = 'https://api.beeline.sg/routes/search_by_region?regionId=24&areaName=North-east%20Region';

//export default will allow other components to import
export default class MyScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //create object to assign to data source
            dataSource: new ListView.DataSource({ 
                rowHasChanged: (r1, r2) => r1 !== r2
            }) 
        };
    }
    // call component when it is loaded onto UI View and set datasource property
    componentDidMount() {
        this.fetchData();
        // var buses = SAMPLE_DATA;
        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(buses)
        // });
    }


   fetchData() {
        fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData)=> {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData),
                isLoading: false
            });
        })
        .done();
    }


    render() {
        // if(this.state.isLoading){
        //     return this.renderLoadingView();
        // }
        return (
            //create listview
           
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderBus.bind(this)}
                style = {styles.listView}
            />
        );
    }

    /*renderLoadingView() {
        return (
            <View style = {styles.loading}>
                <Text> Loading buses... </Text>
            </View>
        );
    }*/

    renderBus(bus) {
        return(
            //wrapper to respond listview to touch
             <TouchableHighlight onPress={() => this.showBusDetail(bus)}  underlayColor='#dddddd'>
                <View>
                    <View style= {styles.container}>
                        <View style = {styles.rightContainer}>
                            <Text style= {styles.title}>{bus.name}</Text>
                            <Text style= {styles.author}>{bus.label}</Text>
                            <Text style = {styles.author}>{bus.schedule}</Text>
                        </View>
                    </View>
                <View style = {styles.separator}/>
            </View>
            </TouchableHighlight>
        );
    }

    showBusDetail(bus) {
        this.props.navigator.push({
            id: showBus,
            title: bus.name,
            component: ShuttleBusInfo,
            passProps: {bus}            
        });
    }

}


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