import React from 'react';
import {Animated} from 'react-native';

export const TYPE_ANIM_IN = 1;
export const TYPE_ANIM_OUT = 2;

export const itemAnim = (attribute) => (type) => (duration) => {
    Animated.timing(
        attribute,
        {
            toValue: 1,
            duration: duration
        },
    ).start();
}