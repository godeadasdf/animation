/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    View,
    Button,
    Animated
} from 'react-native';
import ListItem from './ListItem';
import store from './store';

import {TYPE_ANIM_IN, TYPE_ANIM_OUT} from './Anim';

export default class animation extends Component {

    state = {data: [], animType: 1,showlist:true}


    constructor(props) {
        super(props);

        //this.pushData([{name: 'kang', key: 'kang'}, {name: 'yan', key: 'yan'}]);
    }


    /*    pushData(dataSource) {
            let times = 0;
            setInterval(() => {
                if (times < dataSource.length) {
                    console.log(this.state.data);
                    this.setState(({data}) => {
                        data = data.push(dataSource[times]);
                        return {data: data};
                    });
                    times++;
                }
                clearInterval();
            }, 1000);
        }*/

    renderList() {
        const data = [
            {name: 'kang', key: 'kang'},
            {name: 'yan', key: 'yan'},
            {name: 'yan2', key: 'yan2'},
            {name: 'yan3', key: 'yan3'}
        ];
        for (let i = 0; i < data.length; i++) {
            data[i] = {...data[i], id: (data.length - i), totalLength: data.length};
        }
        return (
            <FlatList
                style={{flex:1}}
                data={data}
                renderItem={({item}) => (
                    <ListItem animValue={new Animated.Value(0)}
                              animType={this.state.animType} interval={100} item={item}/>)}/>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderList()}
               {/* //设定button不可点击状态*/}
                <Button
                    style={{justifySelf: 'bottom'}}
                    title='click'
                    onPress={() => {
                        this.setState((prev) => ({animType: prev.animType === TYPE_ANIM_IN ? TYPE_ANIM_OUT : TYPE_ANIM_IN}))
                    }}/>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('animation', () => animation);
