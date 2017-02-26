import React, {Component} from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Navigator} from 'react-native';
//import Tabs from 'react-native-tabs';
import Button from './components/button';
import MyScene from './MyScene';
import ListViewBasics from './ListViewBasics';

export default class SAPmaProject extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         page: 'first'
    //     };
    // }
    

    render() {
        return(

        <Navigator
        initialRoute={{ title: 'My Initial Scene' }} //set the intial route view
        renderScene={(route, navigator) => <MyScene title={route.title} navigator={navigator}/>}
         //on subsequent render, it will call my scene title.
         /*<MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }*/
      />
     );
     
   }
}
        //const { page } = this.state;
        //var self = this;
        // const tabbarStyles = [styles.tabbar];
        // if (Platform.OS === 'android') tabbarStyles.push(styles.androidTabbar);

        // return (
        //     <MyScene/>
            /*<View style = {styles.container}>
                <Text> CodeSharing App</Text>
                <Text>{this.state.page}</Text>
                <Button text = "Click Me!" />

                
                
                <Tabs 
                    selected = {this.state.page}
                    style = {styles.tabbarStyles}
                    selectedStyle = {{color: 'red'}}
                    onSelect = { el=>this.setState({page:el.props.name})}>
                    <Text name="first">First</Text>
                    <Text name="second">Second</Text>
                    <Text name="third">Third</Text>
                </Tabs>    
                
            </View>*/
//         );
//     }
// }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        tabbar: {
            backgroundColor: 'white',
            height: 64,
            borderTopColor: 'red',
            borderTopWidth: 2
        },

        androidTabbar: {
            top: 0,
            borderBottomColor: 'red',
            borderBottomWidth: 2,
            borderTopColor: 0
        }
    });

AppRegistry.registerComponent('SAPmaProject', () => SAPmaProject);
