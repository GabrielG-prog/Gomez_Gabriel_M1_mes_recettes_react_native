import React, {
  useEffect
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  getList
} from '../redux/actions';
import {
  StyleSheet,
  Platform,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

const ListItem = ({
  navigation
}) => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.list)
  const {
    lists
  } = list
  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  const FlatListItemSeparator = () => {
    return ( 
      <View style = {{ height: .5, width: "100%", backgroundColor: "#000"}} />
    );
  }

  const idItem = (id) => {
    navigation.navigate("ItemPage", {
      id
    });
  }

  return (
    <View style={styles.MainContainer}>
      <FlatList 
        data={ lists }     
        ItemSeparatorComponent = {FlatListItemSeparator}
        renderItem={({item}) =>  
        <TouchableOpacity  onPress={() => idItem(item.id)} style={{flex:1, flexDirection: 'row'}}>
          <Image source = {{ uri: item.image }} style={styles.imageView} />           
          <Text style={styles.textView} >{item.title}</Text>
        </TouchableOpacity>        
        }
        keyExtractor={(item, index) => index.toString()}
                
      />
    </View>
  )

}
export default ListItem

const styles = StyleSheet.create({
  MainContainer: {

    justifyContent: 'center',
    flex: 1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,

  },

  imageView: {

    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7

  },

  textView: {

    width: '50%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#000'

  }
});