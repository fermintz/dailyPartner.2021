import React from 'react';
import {View, Text, SectionList, StyleSheet, Switch} from 'react-native';

export default class Options extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isAvtive: false
    }
  }

  render(){
    const Data = [
      {
        title:'시스템',
        data:[
          {
            name:'카카오톡 알림',
            subText:'카카오톡 알림을 유무를 설정합니다'
          },
          {
            name:'카카오톡 알림',
            subText:'카카오톡 알림을 유무를 설정합니다'
          }
          
        ],
      },
      {
        title:'테스트',
        data:[
          {
            name:'카카오톡 알림',
            subText:'카카오톡 알림을 유무를 설정합니다'
          },
          {
            name:'카카오톡 알림',
            subText:'카카오톡 알림을 유무를 설정합니다'
          }
          
        ],
      }
    ]

    

    const OptionItem = props =>{
      const {item,index} = props
      const lastItemFind = () => {
        Data.map((item)=>{
          return item.data.length
        })
      }
      console.log(lastItemFind)
      return(
        <View style={[styles.optionItem, item.length === index ? 'LastOption' : '']}>
          <View style={styles.optionItemTitle}>
            <Text style={styles.optionItemText}>{item.name}</Text>
            <Text style={styles.optionItemSubText}>{item.subText}</Text>
          </View>
          <Switch
            trackColor={{ false: "#aaa", true: "#01a1dd" }}
            thumbColor={this.state.isActive ? "#fff" : "#fff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={()=>this.setState({isActive:!this.state.isActive})}
            value={this.state.isActive}
          /> 
        </View>
      )
    }

    return(
      <SectionList
        sections={Data}
        contentContainerStyle={styles.sectionList}
        renderItem={({item,index})=>(
          <OptionItem item={item} index={index} />  
        )}
        renderSectionHeader={({ section })=> (
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>{section.title}</Text>
          </View>
        )}
        keyExtractor={({index})=> index}
        separator
        SectionSeparatorComponent={()=> <View style={{marginVertical:10,}}/>}
      >
      </SectionList>
    )
  }
}

const styles = StyleSheet.create({
  sectionList:{
    padding:15,
  },
  sectionTitleText:{
    fontSize:16
  },
  optionItem:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:10,
    paddingHorizontal:15,
    height:70,
    marginBottom:10,
  },
  optionItemTitle:{
    flex:1,
  },
  optionItemText:{
  },
  optionItemSubText:{
    fontSize:12,
    color:'#888',
    marginTop:5,
  },
  LastOption:{
    marginBottom:30,
  }
  
})