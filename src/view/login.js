import React,{useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {BaseButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  
  const [idActive, setIdActive] = useState(false)
  const [passActive, setPassActive] = useState(false)
  const navigation = useNavigation()

  return(
    <View style={styles.login}>
      <Image source={require('../assets/img/logo.png')} style={{resizeMode:'contain',height:60,}} />
      <View style={styles.inputForm}>
        <TextInput placeholder="아이디" style={[styles.input, idActive ? styles.inputActive : '']} onFocus={()=>setIdActive(true)} onBlur={()=>setIdActive(false)}/>
        <TextInput placeholder="비밀번호" style={[styles.input, passActive ? styles.inputActive : '']} secureTextEntry={true}  onFocus={()=>setPassActive(true)} onBlur={()=>setPassActive(false)}/>
        <BaseButton style={styles.loginBtn} onPress={()=>{navigation.navigate('Home')}}>
          <Text style={styles.loginBtnText}>로그인</Text>
        </BaseButton>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputForm: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 40,
  },
  input: {
    height: 50,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    borderRadius:5,
  },
  inputActive: {
    borderWidth: 1,
    borderColor: '#01a1dd',
    backgroundColor: '#fff',
  },
  loginBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01a1dd',
    borderRadius:5,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});