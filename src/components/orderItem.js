import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OrderItem = (props) => {
  const {item} = props;
  const navigation = useNavigation();
  const call = (phone) => Linking.openURL(`tel:${phone}`);
  return (
    <TouchableOpacity 
      onPress={()=> navigation.navigate('Detail')}
      style={styles.orderItem}
    >
      <View
        style={[
          styles.orderItemTop,
          {backgroundColor: item.type !== 'cancle' ? '#fff' : '#F9F2F5'},
        ]}>
        <View
          style={[
            styles.orderStateIcon,
            {backgroundColor: item.type === 'cancle' ? '#d22828' : '#292929'},
          ]}>
          <Text style={styles.orderStateIconText}>{item.orderState}</Text>
        </View>
        <Text style={styles.orderDateText}>{item.orderDate}</Text>
      </View>
      <View style={styles.orderItemCont}>
        <View style={styles.orderItemContLeft}>
          <View
            style={
              [
                styles.pickupBox,
                {borderColor: item.type === 'am' ? '#008BE8' : '#FF4600'},
              ] /* 오후 #FF4600 */
            }>
            <Text style={styles.pickupWeekText}>{item.pickupWeek}</Text>
            <Text
              style={[
                styles.pickupTimeText,
                {color: item.type === 'am' ? '#008BE8' : '#FF4600'},
              ]}>
              {item.pickupTime}
            </Text>
          </View>
          <Text
            style={[
              styles.pickupDateText,
              {color: item.type === 'am' ? '#008BE8' : '#FF4600'},
            ]}>
            {item.pickupDate}
          </Text>
        </View>
        <View style={styles.orderItemContRight}>
          <View style={styles.userNamePhone}>
            <Text style={styles.userNameText}>{item.userName}</Text>
            <TouchableOpacity
              onPress={
                () => {
                  call('01083102486');
                } /* 전화걸기 */
              }
              style={styles.userPhone}>
              <Icon name="call" style={styles.userPhoneIcon} />
              <Text style={styles.userPhoneText}>{item.userPhone}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userAddress}>
            <Icon name="md-location-sharp" style={styles.userAddressIcon} />
            <View style={styles.userAddressTexts}>
              <TouchableOpacity>
                <Text style={styles.userAddressText}>
                  {item.userAddressFirst}
                </Text>
              </TouchableOpacity>
              <Text style={styles.userAddressText}>{item.userAddressLast}</Text>
            </View>
          </View>
          <View style={styles.userGate}>
            <Icon name="lock-open" style={styles.userGateIcon} />
            <Text style={styles.userGateText}>{item.userGate}</Text>
          </View>
        </View>
      </View>
      <View style={styles.orderItemBottom}>
        <Icon name="ios-chatbox-outline" style={styles.userRequestIcon}></Icon>
        <Text style={styles.userRequestText}>{item.userRequestText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  orderItemTop: {
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 36,
    backgroundColor: '#fff',
  },
  orderStateIcon: {
    height: 20,
    backgroundColor: '#292929',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  orderStateIconText: {
    color: '#fff',
    fontSize: 10,
  },
  orderDateText: {
    color: '#888',
    fontSize: 12,
  },
  orderItemCont: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
  },
  orderItemContRight: {
    flex: 1,
    marginLeft: 20,
  },
  pickupBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  pickupWeekText: {
    fontSize: 10,
  },
  pickupDateText: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  userNamePhone: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userNameText: {
    fontSize: 14,
  },
  userPhone: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPhoneIcon: {
    fontSize: 12,
    marginRight: 5,
    color: '#08B882',
  },
  userPhoneText: {
    color: '#08B882',
  },

  userAddress: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  userAddressIcon: {
    fontSize: 15,
  },
  userAddressTexts: {
    flexDirection:'row',
    flexWrap:'wrap',
    flex: 1,
    marginLeft: 10,
  },
  userAddressText: {
    fontSize: 12,
    lineHeight: 16,
    marginRight:5,
  },
  userGate: {
    flexDirection: 'row',
  },
  userGateIcon: {
    fontSize: 15,
    color: '#DF0E68',
  },
  userGateText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 16,
    color: '#DF0E68',
  },

  orderItemBottom: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },

  userRequestIcon: {
    fontSize: 15,
  },
  userRequestText: {
    flex: 1,
    fontSize: 12,
    marginLeft: 10,
    lineHeight: 17,
    color: '#888',
  },
});
