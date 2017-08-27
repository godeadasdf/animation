import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import * as Anim from './Anim';

export default class ListItem extends Component {

    state = {
        isVisible: false,
    }

    /*
        componentDidMount() {
            console.log(this.props.animType)
            const {item: {id}, interval,animType} = this.props;
            setTimeout(() => {
                Anim.itemAnim(this.state.fadeAnim)(animType)(interval);
            }, id * interval);
        }

        componentWillReceiveProps(){
            console.log(this.props.animType + 'componentWillReceiveProps')
            const {item: {id}, interval,animType} = this.props;
            setTimeout(() => {
                Anim.itemAnim(this.state.fadeAnim)(animType)(interval);
            }, id * interval);
        }

    */
    generateInterpolate = () => {
        if (this.props.animType === Anim.TYPE_ANIM_IN) {
            return {inputRange: [0, 1], outputRange: [40, 10]}
        }
        else {
            return {inputRange: [0, 1], outputRange: [10, 40]}
        }
    }

    animationShowTime = () => {
        const {item: {id, totalLength}, interval, animType} = this.props;
        if (animType === Anim.TYPE_ANIM_IN)
            return id * interval;
        else
            return (totalLength - id) * interval;
    }

    render() {
        const {interval, animType, animValue} = this.props;
        console.log(animValue);
        setTimeout(() => {
            Anim.itemAnim(animValue)(animType)(interval);
        }, this.animationShowTime());
        const {name} = this.props.item;
        console.log(this.props.animType)
        return (
            <View style={styles.container}>
                <Animated.Text style={{
                    ...styles.text, transform: [
                        {
                            translateY: animValue.interpolate(this.generateInterpolate())
                        }
                    ]
                }}>{name}</Animated.Text>
            </View>
        )
    };

}


const styles = {
    container: {
        margin: 10,
        flexDirection: 'column',
        backgroundColor: 'green',
        height: 40
    },
    text: {
        textAlign: 'center'
    }

}