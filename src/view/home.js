import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, FlatList, StatusBar} from 'react-native';
import OrderItem from '../components/orderItem.js';
import OrderState from '../components/orderState.js';
import ListHeader from '../components/listHeader.js';
import ListEmpty from '../components/listEmpty.js';

export default class Home extends React.Component{
  render(){
    const Data = [
      {
        type:'am',
        orderState:'주문확인',
        orderDate:'2021.01.26 12:34',
        pickupWeek:'월요일',
        pickupTime:'오전',
        pickupDate:'21.01.26',
        userName:'박수민',
        userAddressFirst:'부산시 북구 구남언덕로 15',
        userAddressLast:'3층',
        userPhone:'010-8525-4561',
        userGate:'#0101 눌러주세요',
        userRequestText:'빠른세탁 부탁드려용'
      },
      {
        type:'pm',
        orderState:'주문확인',
        orderDate:'2021.01.25 11:20',
        pickupWeek:'월요일',
        pickupTime:'오후',
        pikupDate:'21.01.26',
        userName:'차경진',
        userAddressFirst:'부산시 강서구 미음산단5로41번길 71 부산글로벌테크비즈센터 ',
        userAddressLast:'310호 페이오티',
        userPhone:'010-8525-4561',
        userGate:'#0101 눌러주세요',
        userRequestText:'빠른세탁 부탁드려용'
      },
      {
        type:'pm',
        orderState:'수거대기',
        orderDate:'2021.01.25 11:20',
        pickupWeek:'월요일',
        pickupTime:'오후',
        pikupDate:'21.01.26',
        userName:'차경진',
        userAddressFirst:'부산시 강서구 미음산단5로41번길 71 부산글로벌테크비즈센터 ',
        userAddressLast:'310호 페이오티',
        userPhone:'010-8525-4561',
        userGate:'#0101 눌러주세요',
        userRequestText:'빠른세탁 부탁드려용'
      },
      {
        type:'cancle',
        orderState:'주문취소',
        orderDate:'2021.01.25 11:20',
        pickupWeek:'월요일',
        pickupTime:'오후',
        pikupDate:'21.01.26',
        userName:'차경진',
        userAddressFirst:'부산광역시 금정구 부산대학로 63번길 2',
        userAddressLast:'과학기술연구동 201호',
        userPhone:'010-8525-4561',
        userGate:'#0101 눌러주세요',
        userRequestText:'빠른세탁 부탁드려용'
      },
    ]

    return(
    
      <FlatList
        data={Data}
        contentContainerStyle={{}}
        ListHeaderComponent={({state}) => {
          return(
            <View style={{backgroundColor:'#fff'}}>
              <StatusBar backgroundColor="#000"></StatusBar>
              <OrderState state={state}/>
              <ListHeader />
            </View>
          )
        }}
        stickyHeaderIndices={[0]}
        ListHeaderComponentStyle={{marginBottom:10,}}
        ListEmptyComponent={()=>{
          return(
            <ListEmpty />
          )
        }}
        renderItem={({ item }) =>{
          return(
            <OrderItem item={item}/>
          )
        }}
        keyExtractor={item => item.orderDate}
      />
 
    )
  }
}

const styles = StyleSheet.create({

})