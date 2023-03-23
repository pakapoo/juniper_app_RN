import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import { SearchBar } from '@rneui/base';
import Style from '../style/Style';

const rawData = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => {
  const styles = Style();
  return (
  <View style={styles.searchItem}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>)
};

const Search = () => {
    const styles = Style()
    const isDarkMode = useColorScheme() === 'dark';
    
    const [Data, setData] = useState(rawData);
    const [search, setSearch] = useState("");

    const searchFilterFunction = (text: string) => {
      const filterData = rawData.filter(element => {
        return element.title.substring(0, text.length).toLowerCase() === text;
      });
      setData(filterData);
      setSearch(text);
    };
  
    return (
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={styles.backgroundStyle.backgroundColor}
        />
        <SearchBar        
          placeholder="Find your music sheet"        
          lightTheme        
          round
          onChangeText={text => searchFilterFunction(text)}
          value = {search}
          autoCorrect={false}             
        />
          <FlatList
            data={Data}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
      </SafeAreaView>
      
    );
  }

  export default Search;