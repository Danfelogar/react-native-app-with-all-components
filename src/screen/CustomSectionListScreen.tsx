import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk", "Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk","Antman", "Thor", "Spiderman","Hulk",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];

export const CustomSectionListScreen = () => {
    return(
        <View style={{ ...styles.gobalMargin, flex: 1 }}>
            <SectionList
                sections={ casas }
                keyExtractor={ ( item, idx ) => item + idx }
                ListHeaderComponent={ () => <HeaderTitle title='Custom SectionList' /> }
                ListFooterComponent={ () => (
                    <View style={{ marginBottom: 70 }}>
                        <HeaderTitle title={'Total de casas: ' + casas.length } />
                    </View>
                ) }

                renderItem={ ({ item }) => <Text>{ item }</Text> }
                stickySectionHeadersEnabled

                renderSectionHeader={ ({ section }) => (
                    <View style={{ backgroundColor:'white' }}>
                        <HeaderTitle title={ section.casa } />
                    </View>
                )}
                renderSectionFooter={ ({ section }) => (
                    <HeaderTitle title={'Total: ' + section.data.length } />
                ) }

                SectionSeparatorComponent={() => <ItemSeparator />}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={ false }
            />
        </View>
    )
};
