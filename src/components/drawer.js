import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const DrawerCustom = props => {
  const navigation = props.navigation

  return(
    <ScrollView 
      {...props} 
      style={{padding:0,margin:0}}
      contentContainerStyle={{padding:0,margin:0}}
    >
      <View style={styles.header}>
        <View style={styles.left}>
          <Text style={styles.logo}>데일리세탁 파트너</Text>
          <Text style={styles.userName}>박수민</Text>
        </View>
        <TouchableOpacity style={styles.logout}>
          <Icon name="log-out-outline" style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.drawerItems}>
        <TouchableOpacity style={styles.drawerItem} onPress={()=>navigation.navigate('Home')}>
          <Icon name="home-outline" style={styles.drawerItemIcon} />
          <Text style={styles.drawerItemText}>홈으로</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={()=>navigation.navigate('Options')}>
          <Icon name="settings-outline" style={styles.drawerItemIcon}/>
          <Text style={styles.drawerItemText}>설정</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  )
}

export default DrawerCustom 

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    backgroundColor:'#292929',
    minHeight:90,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
  },
  left:{
    flex:1,
  },
  logo:{
    color:'#888'
  },
  logout:{width:40, height:40, justifyContent:'center',alignItems:'center',borderRadius:25,backgroundColor:'#000'},
  logoutIcon:{
    fontSize:18,
    color:'#fff'
  },

  userName:{
    color:'#fff',
    fontSize:18,
    marginTop:3,
  },

  drawerItems:{
    paddingVertical:10,
    paddingHorizontal:15,
  },
  drawerItem:{
    flexDirection:'row',
    alignItems:'center',
    height:50,
  },
  drawerItemIcon:{
    fontSize:20,
    marginRight:15,
    color:'#aaa'
  },
  drawerItemText:{

  }
  
})