import { StyleSheet,StatusBar,  Text, View } from 'react-native';
import InShortTabs from './components/InShortTabs';
import Context from './API/Context';
import React, {useContext} from 'react';
import { NewsContext } from './API/Context';

function App() {
  const {darkTheme, setDarkTheme} = useContext(NewsContext)
  return (
  <View style={{...styles.container, backgroundColor: darkTheme? "#282C35" : "white"}}>
      <InShortTabs/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default () =>{
  return(
    <Context>
      <App/>
    </Context>
  )
  
}