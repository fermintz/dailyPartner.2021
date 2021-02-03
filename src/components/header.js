import React,{useRef} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Animated} from 'react-native';
import {useNavigation, DrawerActions,} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


const Header = () => {
  const navigation = useNavigation();
  const setSearch = useRef(new Animated.Value(-50)).current

  const slideIn = ()=>{
    Animated.timing(setSearch,{
      toValue:0,
      duration:200,
      useNativeDriver: false
    }).start()
  }

  const slideOut = ()=>{
    Animated.timing(setSearch,{
      toValue:-50,
      duration:200,
      useNativeDriver: false
    }).start()
  }
  
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={slideIn}
          style={styles.left}>
          <Icon name="search" color="#fff" size={20}></Icon>
        </TouchableOpacity>
        
        <View style={styles.logo}>
          <TouchableOpacity style={styles.logoAction}
            onPress={()=> navigation.navigate('Home')}
          >
            <Text style={styles.logoText}>데일리파트너</Text>
        </TouchableOpacity>
        </View>
      
        <TouchableOpacity
          onPress={() => {navigation.dispatch(DrawerActions.openDrawer())}}
          style={styles.right}
        >
          <Icon name="menu" color="#fff" size={20}></Icon>
        </TouchableOpacity>

        <Animated.View style={[styles.searchBar, {top:setSearch}]}>
          <TextInput placeholderTextColor="#888" placeholder="전화번호 끝 4자리를 입력해주세요" style={styles.searchTextInput}/>
          <TouchableOpacity
            onPress={()=>{navigation.navigate('Search')}}
            style={styles.searchBtn}
          >
            <Icon name="search" color="#292929" size={20}></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchCloseBtn}
            onPress={slideOut}
          >
            <Icon name="close" color="#fff" size={20}></Icon>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  )
}

export default Header;

const styles = StyleSheet.create({
  header:{
    height:50,
    flexDirection:'row',
    alignItems:'center',
    
    backgroundColor:'#008BE8'
  },
  logo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logoText:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold'
  },
  left:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar:{
    position:'absolute',
    flexDirection:'row',
    left:0,
    width:'100%',
    height:50,
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderColor:'#008BE8',
  },
  searchTextInput:{
    flex:1,
    color:'#292929',
    paddingHorizontal:15,
  },
  searchBtn:{
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  searchCloseBtn:{
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#008BE8'
  },
})