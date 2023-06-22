import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useContext} from 'react'
import { categories, sources } from '../API/newsApi'
import { NewsContext } from '../API/Context'

const DiscoverScreen = () => {
    const {setCategory} = useContext(NewsContext)
    const {setSource, darkTheme} = useContext(NewsContext)

  return (
    <View style={styles.discoverContainer}>
      {/* Search */}
      {/* categories */}
      <Text
        style={{...styles.subTitle, color: darkTheme? "lightgrey" : "black"}}>Categories
      </Text>
      <View>
        <FlatList
            data = {categories}
            horizontal
            renderItem={({item, index}) => (
                <TouchableOpacity style={styles.categoriesStyle} onPress={() => setCategory(item.name)}>
                    <Image source={{uri: item.pic}} style={styles.categoryImage}></Image>
                    <Text style={{...styles.name, color: darkTheme? "lightgrey" : "black"}}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
      </View>

      {/* Sources */}
        <Text style={{...styles.subTitle, color: darkTheme? "lightgrey" : "black"}}>Sources</Text>
        <View style={styles.sources}>
            {
                sources.map((source) =>(
                    <TouchableOpacity
                        onPress={() => setSource(source.id)}
                        key={source.id}
                        style={styles.sourceContainer}>
                        <Image source={{uri: source.pic}} style={styles.sourceImage}>

                        </Image>
                    </TouchableOpacity>
                ))
            }
        </View>
      
    </View>
  )
}

const styles= StyleSheet.create({
    
    discoverContainer:{
        margin: 15,
    },
    subTitle:{
        fontWeight: "bold",
        fontSize: 17,
        alignSelf: "flex-start",
        marginHorizontal: 8,
        marginVertical: 10,
        paddingBottom: 5,
        borderBottomColor: "#07bff7",
        borderBottomWidth: 5,
        borderRadius: 5,
    },
    categoriesStyle:{
        margin: 15,
    },
    categoryImage:{
        width: 70,
        height: 70,
        alignSelf: "center",
        resizeMode: "contain",
    },
    name:{
        fontSize: 15,
        textTransform: "capitalize",
        alignSelf: "center",
    }, 
    sources:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 10,
    },
    sourceContainer:{
        width: "40%",
        height: 150,
        borderRadius: 10,
        margin: 15,

    },
    sourceImage:{
        height: "100%",
        borderRadius: 10,
        resizeMode: "cover",
    }
})

export default DiscoverScreen