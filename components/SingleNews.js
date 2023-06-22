import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React, {useContext} from 'react';
import { NewsContext } from '../API/Context';

const SingleNews = ({item, index}) => {

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const {setSource, darkTheme} = useContext(NewsContext)

  return (
    <View style= {{width: windowWidth, height: windowHeight}}>
        <Image
            source={{uri: item.urlToImage}} 
            style={styles.newsImage} >
        </Image>
        <Text 
            style={{...styles.newstitle, color: darkTheme? "lightgrey" : "black"}}>{item.title}
        </Text>
        <Text
            style={{...styles.newsDescription, color: darkTheme? "white" : "grey"}}>{item.description}
        </Text>
        <View style={styles.btnContainer}>
        <TouchableOpacity 
            onPress={() => Linking.openURL(item.url)}
            style={styles.readMoreBtn}>
            <Text
                style={styles.readMoreText}>Read More
            </Text>
        </TouchableOpacity>
        </View>
       
    </View>
  )
}

const styles= StyleSheet.create({
    // container:{
    //     width: windowWidth,
    //     height: windowHeight,
    // },
    newsImage:{
        width: "95%", 
        height:"45%", 
        alignSelf: 'center',
    },
    newstitle:{
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    newsDescription:{
        fontSize: 15,
        padding: 10,
    },
    btnContainer:{
        flex: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    readMoreBtn:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#07bff7",
    },
    readMoreText:{
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
    }
})

export default SingleNews