import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const Loader = () => {
    const rotate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                rotate, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [])
    const spin = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const size = 125;
    const strokeWidth = 12;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <View style={ styles.container }>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} >
                    <Defs>
                        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <Stop offset="0%" stopColor="#4061AC" stopOpacity="1" />
                            <Stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                        </LinearGradient>
                    </Defs>
                    <AnimatedCircle
            stroke="url(#grad)"
            fill="none"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={`${circumference}`}
            strokeDashoffset={circumference * 0.25}
          />
                </Svg>
            </Animated.View>
        </View>
    )
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:40
  },
});

export default Loader