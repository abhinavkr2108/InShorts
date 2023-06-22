import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { MaterialCommunityIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { NewsContext } from '../API/Context';

const TopNavigation = ({index, setIndex}) => {
    const {fetchNews} = useContext(NewsContext)
    const {darkTheme, setDarkTheme} = useContext(NewsContext)
    return (
        <View style={{...styles.container, backgroundColor: darkTheme? "#282C35" : "white"}}>
              {
                index===0? (
                <TouchableOpacity style={styles.discoverLeft} onPress={() => setDarkTheme(!darkTheme)}>
                    <Text style={{...styles.text, color:"lightgrey"}}>
                        <MaterialCommunityIcons name="theme-light-dark" size={24} color="#07bff7"/>
                    </Text>
                </TouchableOpacity>
                ):(
                <TouchableOpacity 
                    style={styles.discoverLeft}
                    onPress={() => setIndex(index===0 ? 1 : 0)}
                >
                    <SimpleLineIcons name="arrow-left" size={15} color="#07bff7"/>
                    <Text style={{...styles.text, color: darkTheme? "lightgrey" : "black"}}>Discover</Text>
                </TouchableOpacity>
                )
              }
              <Text style={{...styles.center, color: darkTheme? "lightgrey" : "black"}}>
                {
                    index===0 ? "Discover" : "All News"
                }
              </Text>
              {
                index===1 ? (
                    <TouchableOpacity style={styles.right} onPress={() => fetchNews("general")}>
                        <Text style={styles.text}>
                            <AntDesign name="reload1" size={24}  color="#07bff7"></AntDesign>
                        </Text>
                    </TouchableOpacity>
                ):(
                    <TouchableOpacity style={styles.discoverLeft} onPress={() => setIndex(index===0 ? 1 : 0)}>
                        <Text style={{...styles.text, color: darkTheme? "lightgrey" : "black"}}>All News</Text>
                        <SimpleLineIcons name="arrow-right" size={15} color="#07bff7"/>
                    </TouchableOpacity>
                )
              }
        </View>
    )
}
        
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
    },
    discoverLeft:{
        flexDirection: "row",
        alignItems: "center",
        width: 80,
        justifyContent: "space-between",
    },
    text:{
        fontSize: 17,
    },
    center:{
        paddingBottom: 5,
        borderBottomColor: "#07bff7",
        borderBottomWidth: 5,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: "bold"
        
    },
    right:{
        width: 80,
        alignItems: "flex-end",
    }

});
export default TopNavigation