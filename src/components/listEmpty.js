import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const ListEmpty = () => {
  return(
    <View style={styles.listEmpty}>
      <Icon name="document-text-outline" style={styles.listEmptyIcon}/>
      <Text style={styles.listEmptyText}>등록된 데이터가 없습니다</Text>
    </View>
  )
}

export default ListEmpty

const styles = StyleSheet.create({
  listEmpty:{
    paddingVertical:20,
    justifyContent:'center',
    alignItems:'center'
  },
  listEmptyIcon:{
    fontSize:40,
    color:'#aaa'
  },
  listEmptyText:{
    fontSize:14,
    marginTop:10,
    color:'#888'
  },
})