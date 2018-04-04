import React from 'react';
import {Input, Button, Item, Icon, Content} from 'native-base';
import {View, Text, StatusBar, Platform, TouchableOpacity} from 'react-native';
import {DangerZone} from 'expo';

const {Lottie} = DangerZone;

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.animation.play();
    }

    render() {
        let scale = Platform.OS==='ios' ? 0.75 : 3;
        return (
            <Content style={{backgroundColor:'#44F',flex:1}} >
                <View style={{backgroundColor:'#44F',  flex:1, alignItems: 'center', justifyContent:'center'}} >
                    <StatusBar hidden />
                    <View style={{flex:1}} >
                        <Lottie
                            ref={animation => {
                            this.animation = animation;
                            }}
                            style={{height: 250, width: 250, transform:[{scale}]  }}
                            source={require('../assets/animation/soda_loader.json')}
                        />
                        <Text style={{fontFamily:'Nunito-ExtraBold', color:'white', fontSize:28}} >Fluffy Lamp Register</Text>
                    </View>
                    <View style={{flex:1, marginTop: 10}} >
                        <View  style={{flex:1, width:'80%'}}>
                            <Item rounded style={{width: '100%', backgroundColor:'white'}}>
                                <Icon active name='person' style={{color:"#CCC", marginLeft: 15}} />
                                <Input placeholder='email address' placeholderTextColor="#CCC"  style={{color:'#BBB'}} />
                            </Item>

                            <Item rounded style={{width: '100%', backgroundColor:'white', marginTop:15}}>
                                <Icon active name='lock' style={{color:"#CCC", marginLeft: 15}} />
                                <Input secureTextEntry placeholder='password' placeholderTextColor="#CCC"  style={{color:'#AAA'}} />
                            </Item>

                            <Item rounded style={{width: '100%', backgroundColor:'white', marginTop:15}}>
                                <Icon active name='lock' style={{color:"#CCC", marginLeft: 15}} />
                                <Input secureTextEntry placeholder='confirm password' placeholderTextColor="#CCC"  style={{color:'#AAA'}} />
                            </Item>
                            <View style={{width: '100%', marginTop:10, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Icon name="ios-radio-button-on" style={{color:'#FFF'}} />
                                    <Text style={{fontFamily:'Nunito-SemiBold', color:'white', fontSize:16}}>  User</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Icon name="ios-radio-button-off" style={{color:'#FFF'}} />
                                    <Text style={{fontFamily:'Nunito-SemiBold', color:'white', fontSize:16}}>  Store</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:5}} >
                                <View style={{flex:1, alignItems:'flex-end'}} >
                                    <Text style={{fontFamily:'Nunito-Regular', color:'white', fontSize:14}} >Already a user ? </Text>
                                </View>
                                <View style={{flex:1}}>
                                    <Button transparent onPress={()=>{this.props.navigation.navigate('Login');}} >
                                        <Text style={{
                                            textDecorationStyle:'solid',
                                            textDecorationColor:'white',
                                            textDecorationLine:'underline',
                                            color:'white'
                                            }}
                                        >Login Here</Text>
                                    </Button>
                                </View>
                                
                                </View>
                            <Button rounded style={{alignSelf:'center', backgroundColor:'white', marginTop: 15}}
                                onPress={()=>{this.props.navigation.navigate('RetailerHome')}}
                            >
                                <Text style={{ paddingLeft: 30, fontFamily:'Nunito-Regular', color:'#AAA', fontSize:18}} >Register</Text>
                                <Icon name='ios-arrow-forward-outline' style={{color:'#CCC', paddingRight:10}} />
                            </Button>
                        </View>
                    </View>
                </View>
            </Content>
        );
    }
}

export default RegisterScreen;