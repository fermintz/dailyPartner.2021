import React,{useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const stateData = [
  {
    stateName: '주문확인',
    orderNum: 10,
  },
  {
    stateName: '수거대기',
    orderNum: 3,
  },
  {
    stateName: '검수대기',
    orderNum: 2,
  },
  {
    stateName: '세탁완료',
    orderNum: 0,
  },
  {
    stateName: '결제대기',
    orderNum: 0,
  },
  {
    stateName: '배송대기',
    orderNum: 4,
  },
];

function StateItem(props) {
  const {item, index, isActive, onSelect} = props;
  

  return (
    <TouchableHighlight 
      onPress={() => onSelect(index)} 
      underlayColor={'#e2e2e2'}
      style={[styles.stateItem, isActive ? styles.activeStateItem : '']}
    >
      <View style={[styles.stateItemInner, index === 5 ? styles.lastChild : '']}>
        <Text style={styles.stateItemText}>{item.stateName}</Text>
        <Text style={[styles.stateItemNum, {color:!item.orderNum ? '#aaa' : '#DF0E68'}]}>{item.orderNum}</Text>
      </View>
    </TouchableHighlight>
  
  );
}

const OrderState = (props) => {
  const [selectItem, setSelectItem] = useState('')

  return (
    <View style={styles.orderState}>
      <View style={styles.top}>
        <TouchableHighlight
          onPress={()=> setSelectItem('')}
          underlayColor={'#fff'}
          style={styles.total}
        > 
          <View style={styles.totalInner}>
            <View style={styles.totalLabel}>
              <Icon name="ios-reader-outline" style={styles.totalIcon} />
              <Text style={styles.totalText}>전체주문</Text>
            </View>
            <Text style={styles.totalNum}>24</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={()=> setSelectItem('')}
          underlayColor={'#000'}
          style={styles.today}
        >
          <View style={styles.todayInner}>
            <Text style={styles.todayText}>취소</Text>
            <Text style={styles.todayNum}>5</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.bottom}>
        {stateData.map((item, index) => (
          <StateItem key={index} item={item} index={index} isActive={selectItem === index} onSelect={setSelectItem}/>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  orderState: {

    backgroundColor:'#fff',
    marginBottom:10,
  },
  top: {
    flexDirection: 'row',
    width:'100%',
    backgroundColor:'#000'
  },
  total:{
    flex:4,
    flexShrink:1,
  },
  totalInner:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#292929',
    height:40,
    paddingHorizontal:10,
  },
  totalLabel:{
    flexDirection:'row',
    alignItems:'center'
  },
  totalIcon:{
    color:'#fff',
    fontSize:16,
  },
  totalText:{
    color:'#fff',
    fontSize:12,
    marginLeft:5
  },
  totalNum:{
    color:'#109FFF',
    fontSize:16,
    fontWeight:'bold',
  },

  today:{
    flex:2,
    flexShrink:1,
  },
  todayInner:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:40,
    paddingHorizontal:10,
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'#e2e2e2',
  },
  todayText:{
    fontSize:12,
    color:'#292929'
  },
  todayNum:{
    fontSize:16,
    fontWeight:'bold',
    color:'#DF0E68'
  },

  bottom: {
    flexDirection: 'row',
  },

  stateItem: {
    flex:1, 
    borderBottomWidth:1,
    borderColor:'#d2d2d2',
    backgroundColor:'#f2f2f2'   
  },
  stateItemInner:{
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderColor:'#e2e2e2',
  },
  lastChild:{
    borderRightWidth:0,
  },
  stateItemText:{
    fontSize:10,
    textAlign:'center'
  },
  stateItemNum:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center'
  },
  activeStateItem:{
    backgroundColor:'#fff',
    borderBottomWidth:0
  },
});

export default OrderState;
