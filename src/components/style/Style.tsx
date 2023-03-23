import {
    StyleSheet,
    useColorScheme,
  } from 'react-native';
import {
Colors,
} from 'react-native/Libraries/NewAppScreen';

const styles = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const template = StyleSheet.create({
        searchItem: {
            backgroundColor:  isDarkMode ? Colors.darker : Colors.lighter,
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        },
        sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        },
        sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        },
    });

    return template;
}

  export default styles;