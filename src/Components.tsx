// App.tsx

import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
    Platform,
} from 'react-native';
import {
    AirbnbRating,
    Avatar,
    Badge,
    withBadge,
    Icon,
    BottomSheet,
    Button,
    ListItem,
    ButtonGroup,
    Card,
    Divider,
    SocialIcon,
    SocialIconProps,
    SpeedDial,
    Tab,
    FAB,
    TabView,
    Text,
    Tile,
    Tooltip,
    CheckBox,
    Chip,
    PricingCard,
    Overlay
} from '@rneui/themed';
import Colors from './Colors';



type SectionProps = PropsWithChildren<{
    title: string;
}>;

const Section: React.FC<SectionProps> = ({ children, title }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.secondary : Colors.primary,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.accent : Colors.text,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

type IconData = {
    type: SocialMediaType;
    iconType: string;
};

const dataList: Partial<IconData>[] = [
    {
        type: 'facebook',
    },
    {
        type: 'twitter',
    },
    {
        type: 'google-plus-official',
    },
    {
        type: 'google',
    },
    {
        type: 'pinterest',
    },
    {
        type: 'linkedin',
    },
    {
        type: 'youtube',
    },
    {
        type: 'vimeo',
    },
    {
        type: 'tumblr',
    },
    {
        type: 'instagram',
    },
    {
        type: 'quora',
    },
    {
        type: 'flickr',
    },
    {
        type: 'foursquare',
    },
    {
        type: 'wordpress',
    },
    {
        type: 'stumbleupon',
    },
    {
        type: 'github',
    },
    {
        type: 'github-alt',
    },
    {
        type: 'twitch',
    },
    {
        type: 'medium',
    },
    {
        type: 'soundcloud',
    },
    {
        type: 'stack-overflow',
    },
    {
        type: 'gitlab',
    },
    {
        type: 'angellist',
    },
    {
        type: 'codepen',
    },
    {
        type: 'weibo',
    },
    {
        type: 'vk',
    },
    {
        type: 'facebook-messenger',
        iconType: 'material-community',
    },
    {
        type: 'whatsapp',
    },
];

type SocialIconsComponentProps = {};
type ChipsComponentProps = {};
type DividerViewTypes = {};
type PricingCardComponentProps = {};


const Components: React.FC = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [isVisible, setIsVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [openTooltip, setOpenTooltip] = useState(false);
    const [index, setIndex] = useState(0);
    const [selectedIndexCheck, setSelectedIndexCheck] = React.useState(0);
    const [checked, setState] = useState(true);
    const toggleCheckbox = () => setState(!checked);
    const [visible, setVisible] = useState(false);
    const [visibleFab, setVisibleFab] = useState(true);

    const toggleOverlay = () => {
        setVisible(!visible);
      };

    const socialProps = {};

    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.primary : Colors.background,
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ ...backgroundStyle, flex: 1, }}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={backgroundStyle}>



                    <Tab
                        value={index}
                        onChange={e => setIndex(e)}
                        indicatorStyle={{
                            backgroundColor: 'white',
                            height: 3,
                        }}
                        variant="primary">
                        <Tab.Item
                            title="Recent"
                            titleStyle={{ fontSize: 12 }}
                            icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                        />
                        <Tab.Item
                            title="favorite"
                            titleStyle={{ fontSize: 12 }}
                            icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                        />
                        <Tab.Item
                            title="cart"
                            titleStyle={{ fontSize: 12 }}
                            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
                        />
                    </Tab>
                    <Button
                        onPress={() => navigation.navigate('Component_SecondPage')}
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                            colors: ['#FF9800', '#F44336'],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}>
                        Go to Component_SecondPage
                    </Button>

                    <TabView
                        value={index}
                        onChange={setIndex}
                        animationType="spring"
                        style={{}}>
                        <TabView.Item
                            style={{
                                backgroundColor: 'red',
                                width: '100%',
                                height: 200,
                            }}>
                        </TabView.Item>
                        <TabView.Item
                            style={{
                                backgroundColor: 'blue',
                                width: '100%',
                                height: 200,
                            }}>
                        </TabView.Item>
                        <TabView.Item
                            style={{
                                backgroundColor: 'green',
                                width: '100%',
                                height: 200,
                            }}>
                        </TabView.Item>
                    </TabView>



                    <View>
                        {dataList &&
                            dataList.length > 0 &&
                            dataList
                                .reduce((resultArray, item, index) => {
                                    const chunkIndex = Math.floor(index / 3);
                                    if (!resultArray[chunkIndex]) {
                                        resultArray[chunkIndex] = [];
                                    }
                                    resultArray[chunkIndex].push(item);
                                    return resultArray;
                                }, [])
                                .map((chunk: Partial<IconData>[], chunkIndex: React.Key) => (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-around',
                                            marginTop: 10,
                                            backgroundColor: '#4c4c4c',
                                        }}
                                        key={chunkIndex}>
                                        {chunk.map((l: Partial<IconData>, i: React.Key) => (
                                            <SocialIcon
                                                type={l.type}
                                                iconType={l.iconType ? l.iconType : 'font-awesome'}
                                                key={`${chunkIndex}-${i}`}
                                            />
                                        ))}
                                    </View>
                                ))}
                    </View>



                    <View>
                        <FAB
                            visible={visibleFab}
                            title="Navigate"
                            upperCase
                            icon={{ name: 'place', color: 'white' }}
                        />

                        <Divider />

                        <Button
                            title="Open Overlay"
                            onPress={toggleOverlay}
                            buttonStyle={styles.button}
                        />
                        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                            <Text style={styles.textPrimary}>Hello!</Text>
                            <Text style={styles.textSecondary}>
                                Welcome to React Native Elements
                            </Text>
                            <Button
                                icon={
                                    <Icon
                                        name="wrench"
                                        type="font-awesome"
                                        color="white"
                                        size={25}
                                        iconStyle={{ marginRight: 10 }}
                                    />
                                }
                                title="Start Building"
                                onPress={toggleOverlay}
                            />
                        </Overlay>
                        <Divider />
                        <Divider width={5} color={Colors.primary} />

                        <Chip
                            title="Outlined Chip"
                            type="outline"
                            containerStyle={{ marginVertical: 15 }}
                        />
                        <Chip
                            title="Outlined & Disabled"
                            type="outline"
                            disabled
                            containerStyle={{ marginVertical: 15 }}
                        />
                        <Chip
                            title="Left Icon Chip"
                            icon={{
                                name: 'bluetooth',
                                type: 'font-awesome',
                                size: 20,
                                color: 'white',
                            }}
                            containerStyle={{ marginVertical: 15 }}
                        />
                        <Chip
                            title="Right Icon Chip"
                            icon={{
                                name: 'close',
                                type: 'font-awesome',
                                size: 20,
                                color: 'white',
                            }}
                            onPress={() => console.log('Icon chip was pressed!')}
                            type="outline"
                            iconRight
                            containerStyle={{ marginVertical: 15 }}
                        />

                        <PricingCard
                            color={Colors.accent}
                            title="Starter"
                            price="$19"
                            info={['10 Users', 'Basic Support', 'All Core Features']}
                            button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
                        />
                    </View>

                    <SpeedDial
                        isOpen={open}
                        icon={{ name: 'edit', color: '#fff' }}
                        openIcon={{ name: 'close', color: '#fff' }}
                        onOpen={() => setOpen(!open)}
                        onClose={() => setOpen(!open)}>
                        <SpeedDial.Action
                            icon={{ name: 'add', color: '#fff' }}
                            title="Add"
                            onPress={() => console.log('Add Something')}
                        />
                        <SpeedDial.Action
                            icon={{ name: 'delete', color: '#fff' }}
                            title="Delete"
                            onPress={() => console.log('Delete Something')}
                        />
                    </SpeedDial>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default Components;

const styles = StyleSheet.create({
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
    highlight: {
        fontWeight: '700',
        color: Colors.text,
    },
    container: {
        flex: 1,
    },
    headingContainer: {
        paddingTop: 50,
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : '',
        color: '#27ae60',
    },
    subtitleText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : '',
        color: '#34495e',
    },
    viewContainer: {
        flex: 1,
    },
    rating: {
        paddingVertical: 10,
    },
    subHeader: {
        backgroundColor: '#2089dc',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 5,
        marginBottom: 10,
    },
});
