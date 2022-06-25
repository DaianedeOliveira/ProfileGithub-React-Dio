import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native';



const colorGithub = '#272b33';
const colorFontGithub = '#C9D1D9';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/99364026?v=4';

const urltoMyGithub = "https://github.com/DaianedeOliveira";



const App = () => {
  const handlePressgoToGithub = async () => {
    console.log('Verificando link');

    const res = await Linking.canOpenURL(urltoMyGithub)
    ;
    if(res) {
      
    console.log('Link aprovado');
    
    console.log('Abrindo link...');
      await Linking.openURL(urltoMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}> 

<StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
    
    <View>
      <Image 
      accesibilityLabel="Daiane com fundo azul e branco"
      style={style.avatar} source={{uri: imageProfileGithub}}/>

<Text accesibilityLabel="Nome Daiane" style={[style.defaultText, style.name]}> Daiane</Text>
<Text  accesibilityLabel="Nome DaianedeOliveira"style={[style.defaultText, style.nickname]}> DaianedeOliveira</Text>
<Text style={[style.defaultText, style.description]}> 📚 Technology student</Text>

<Pressable onPress={(handlePressgoToGithub)}>


<View style={style.button}>
  <Text style={[style.defaultText, style.textButton]}> Open in Github </Text>

</View>

    </Pressable>
    </View> 
    </SafeAreaView>

  );

};
export default App;

const style = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: colorGithub,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',

  },

  content: {
    alignItems: 'center',
    padding: 20,
  },

avatar:{
  height: 200,
  width: 200,
  borderRadius: 100,
  borderColor: 'white',
  borderWidth: 2,
},
defaultText: {
color: colorFontGithub,

},
name: {
  marginTop: 20,
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',

},
nickname: {
  fontSize: 18,
  color: colorFontGithub,
},

decription: {
fontSize: 14,
fontWeight: 'bold',
},

button: {
  backgroundColor:  colorFontGithub ,
  borderRadius: 15,
  padding: 20,
  margin: 15,
},

textButton: {
  fontWeight: 'bold',
  fontSize: 12,
  color: 'black',
}

});


