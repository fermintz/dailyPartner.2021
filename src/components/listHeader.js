import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TotalListMenu = ['전체','내일','26일(화)','27일(수)','28일(목)']
const AlignControl = ['주문순', '수거순']

function TotalListBtn(props){
  const {item, index, onSelect, isActive } = props;
  return(
    <TouchableOpacity
      onPress={() => onSelect(index)}
      style={[styles.totalListBtn, isActive ? styles.active : '']}
    >
      <Text style={[styles.totalListBtnText, isActive ? styles.activeText : '']}>{item}</Text>
    </TouchableOpacity>
  )
}

function AlignBtns(props){
  const {item, index, isActive, onAlignBtn} = props
  return(
    <TouchableOpacity style={styles.alignBtn} onPress={()=> onAlignBtn(index)}>
      <Text style={[styles.alignBtnText, isActive ? styles.onAlignBtnText : '']}>{item}</Text>
    </TouchableOpacity>
  )
}

function ListHeader(){
  const [selectIndex, setSelectIndex] = useState(0);
  const [alignBtn, setAlignBtn] = useState(0);

  return(
    <View style={styles.listHeader}>
      <View style={styles.top}>
        <Text style={styles.listTitle}>전체주문</Text>
        <View style={styles.alignBtns}>
          {AlignControl.map((item, index) => {
            <AlignBtns item={item} index={index} isActive={index === alignBtn} onAlignBtn={setAlignBtn}/>
          })}
        </View>
      </View>

      <ScrollView 
        horizontal={true} 
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        style={{backgroundColor:'#EBF2F6'}}
        contentContainerStyle={styles.bottom}
      >
        {TotalListMenu.map((item ,index) => (
          <TotalListBtn item={item} index={index} onSelect={setSelectIndex} isActive={index === selectIndex} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  listHeader:{
    backgroundColor:'#fff',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderBottomColor:'#d2d2d2',
  },
  top:{
    height:34,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  listTitle:{
    fontSize:15,
    fontWeight:'bold'
  },
  bottom:{
    padding:8,
    flexDirection:'row',
  },
  totalListBtn:{
    width:60,
    height:24,
    justifyContent:'center',
    borderRadius:14,
    backgroundColor:'#fff',
    marginRight:10,
    borderWidth:1,
    borderColor:'#d2d2d2',
  },
  totalListBtnText:{
    textAlign:'center',
    color:'#888',
    fontSize:11,
  },
  active:{
    borderColor:'#0007EE',
    borderWidth:2,
  },
  activeText:{
    color:'#0007EE'
  },
  alignBtns:{
    flexDirection:'row',
  },
  alignBtn:{
    marginLeft:15,
  },
  alignBtnText:{
    fontSize:12,
  },
  onAlignBtnText:{
    color:'#008BE8'
  },
})


export default ListHeader;