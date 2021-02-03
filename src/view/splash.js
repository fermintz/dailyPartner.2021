import React,{useEffect} from 'react';
import {View, Text, StyleSheet,Animated, Easing, Image, ActivityIndicator, StatusBar,} from 'react-native';
import {useNavigation,} from '@react-navigation/native';

const Splash = () => {
  const circleScale = new Animated.Value(0)
  const opacityIn = new Animated.Value(0)
  const opacityOut = new Animated.Value(1)
  const textOpacityIn = new Animated.Value(0)
  const textSlideUp = new Animated.Value(0)

  const navigation = useNavigation()

  useEffect(()=>{
    Animated.timing(circleScale,{
      toValue:20,
      delay:500,
      duration:500,
      useNativeDriver: false,
    }).start()

    Animated.timing(opacityOut,{
      toValue:0,
      delay:400,
      duration:1000,
      useNativeDriver: false,
    }).start()

    Animated.timing(opacityIn,{
      toValue:1,
      delay:900,
      duration:1000,
      useNativeDriver: false,
    }).start()

    Animated.timing(textOpacityIn,{
      toValue:1,
      delay:900,
      duration:1000,
      useNativeDriver: false,
    }).start()

    Animated.timing(textSlideUp,{
      toValue:30,
      delay:900,
      duration:1000,
      useNativeDriver: false,
    }).start()
  });

  setTimeout(() => {
    navigation.navigate('Login')
  }, 3000);
  
  return(
    <View style={styles.splash}>
      <StatusBar backgroundColor="#01a1dd"></StatusBar>
      <View style={styles.splashVisual}>
        <Animated.View style={[styles.logo,{opacity:opacityOut}]}> 
          <Animated.Image source={require('../assets/img/logo.png')} style={{resizeMode:'contain',height:60,}} />
        </Animated.View>
        <Animated.View style={[styles.logo,{opacity:opacityIn}]}> 
          <Animated.Image source={require('../assets/img/logo_w.png')} style={{resizeMode:'contain',height:60,}} />
        </Animated.View>
        <Animated.View style={[styles.circleBox,{transform:[{scale:circleScale}],opactiy:opacityIn }]} />
      </View>
      <View style={styles.lodingTextWrap}>
        <Animated.View style={styles.lodingText,{bottom:textSlideUp,zIndex:3,color:'#fff',opacity:textOpacityIn,flexDirection:'row'}}>
          <ActivityIndicator size={20} color={'#fff'}/>
          <Text style={{color:'#fff',marginLeft:10}}>로딩중입니다</Text>
        </Animated.View>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  splash:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  splashVisual:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    position:'absolute',
    zIndex:3
  },
  lodingTextWrap:{
    height:100,
    justifyContent:'center',
    alignItems:'center'
  },  
  lodingText:{
    zIndex:4,
  },
  circleBox:{
    position:'absolute',
    width:50,
    height:50,
    backgroundColor:'#01a1dd',
    borderRadius:50,
  },
})