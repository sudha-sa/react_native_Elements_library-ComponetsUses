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
    SocialIcon,
    SocialIconProps,
    SpeedDial,
    Tab,
    TabView,
    Text,
    Tile,
    Tooltip,
    CheckBox,
} from '@rneui/themed';
import Colors from './Colors';

type RatingsComponentProps = {};
type BottomSheetComponentProps = {};
type TilesComponentProps = {};

const BadgedIcon = withBadge(15)(Icon);

const Ratings = () => {
    const ratingCompleted = (rating: number) => {
        console.log('Rating is: ' + rating);
    };

    const ratingProps = {};

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
            }}>
            <AirbnbRating />
            <AirbnbRating isDisabled={true} />
            <AirbnbRating
                count={11}
                reviews={[
                    'Terrible',
                    'Bad',
                    'Meh',
                    'OK',
                    'Good',
                    'Hmm...',
                    'Very Good',
                    'Wow',
                    'Amazing',
                    'Unbelievable',
                    'Jesus',
                ]}
                defaultRating={11}
                size={20}
            />
        </View>
    );
};

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


const Component_SecondPage: React.FC = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [isVisible, setIsVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [openTooltip, setOpenTooltip] = useState(false);
    const [index, setIndex] = useState(0);
    const [selectedIndexCheck, setSelectedIndexCheck] = React.useState(0);
    const [checked, setState] = React.useState(true);
    const toggleCheckbox = () => setState(!checked);
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
            <SafeAreaView style={{ ...backgroundStyle, flex: 1 }}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={backgroundStyle}>



                       <View
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Ratings />

                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 5,
                            }}>
                            <Avatar
                                size={40}
                                rounded
                                source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
                            />
                            <Avatar
                                size={40}
                                rounded
                                source={{ uri: 'https://randomuser.me/api/portraits/men/35.jpg' }}
                            />
                            <Avatar
                                size={64}
                                rounded
                                icon={{
                                    name: 'extension',
                                    type: 'material',
                                    color: '#cdde20',
                                }}
                                containerStyle={{
                                    borderColor: 'grey',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                }}
                            />
                            <Text style={styles.subHeader}>Badged Avatars</Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginBottom: 40,
                                }}>
                                <Avatar
                                    size={64}
                                    rounded
                                    icon={{ name: 'adb', type: 'material' }}
                                    containerStyle={{ backgroundColor: 'orange' }}>
                                    <Avatar.Accessory size={24} />
                                </Avatar>
                                <Avatar
                                    size={64}
                                    rounded
                                    source={{
                                        uri: 'https://randomuser.me/api/portraits/women/57.jpg',
                                    }}
                                    containerStyle={{ backgroundColor: 'grey' }}>
                                    <Avatar.Accessory size={23} />
                                </Avatar>
                            </View>
                        </View>

                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 5,
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginTop: 20,
                                    marginBottom: 40,
                                }}>
                                <Badge value="3" status="success" />
                                <Badge value="99+" status="error" />
                                <Badge value="500" status="primary" />
                                <Badge value="10" status="warning" />
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}>
                                <Badge status="success" />
                                <Badge status="error" />
                                <Badge status="primary" />
                                <Badge status="warning" />
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginBottom: 20,
                                }}>
                                <Text style={{ color: '#397af8', paddingVertical: 10 }}>
                                    Success
                                </Text>
                                <Text style={{ color: '#397af8', paddingVertical: 10 }}>
                                    Error
                                </Text>
                                <Text style={{ color: '#397af8', paddingVertical: 10 }}>
                                    Primary
                                </Text>
                                <Text style={{ color: '#397af8', paddingVertical: 10 }}>
                                    Warning
                                </Text>
                            </View>
                            <View>
                                <Avatar
                                    rounded
                                    source={{
                                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                                    }}
                                    size="medium"
                                />
                                <Badge
                                    status="success"
                                    containerStyle={{ position: 'absolute', top: 5, left: 40 }}
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Button
                                title="Open Bottom Sheet"
                                onPress={() => setIsVisible(true)}
                                buttonStyle={{ margin: 10 }}
                            />
                            <BottomSheet modalProps={{}} isVisible={isVisible}>
                                {list.map((l, i) => (
                                    <ListItem
                                        key={i}
                                        containerStyle={l.containerStyle}
                                        onPress={l.onPress}>
                                        <ListItem.Content>
                                            <ListItem.Title style={l.titleStyle}>
                                                {l.title}
                                            </ListItem.Title>
                                        </ListItem.Content>
                                    </ListItem>
                                ))}
                            </BottomSheet>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                gap: 5,
                            }}
                            spacing={4}>
                            <Button>Primary</Button>
                            <Button color="secondary">Secondary</Button>
                            <Button color="warning">Warning</Button>
                            <Button color="error">Error</Button>
                        </View>

                        <Button
                            ViewComponent={LinearGradient} // Don't forget this!
                            linearGradientProps={{
                                colors: ['#FF9800', '#F44336'],
                                start: { x: 0, y: 0.5 },
                                end: { x: 1, y: 0.5 },
                            }}>
                            Linear Gradient
                        </Button>

                        <ButtonGroup
                            buttonStyle={{ padding: 10 }}
                            selectedButtonStyle={{ backgroundColor: '#e2e2e2' }}
                            buttons={[
                                <Icon name="format-align-left" />,
                                <Icon name="format-align-center" />,
                                <Icon name="format-align-right" />,
                            ]}
                            selectedIndex={selectedIndex}
                            onPress={setSelectedIndex}
                        />

                        <Card>
                            <Card.Title>HELLO WORLD</Card.Title>
                            <Card.Divider />
                            <Card.Image
                                style={{ padding: 0 }}
                                source={{
                                    uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                                }}
                            />
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component
                                structure than actual design.
                            </Text>
                            <Button
                                icon={
                                    <Icon
                                        name="code"
                                        color="#ffffff"
                                        iconStyle={{ marginRight: 10 }}
                                    />
                                }
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="VIEW NOW"
                            />
                        </Card>

                        <Tile
                            imageSrc={{
                                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                            }}
                            icon={{
                                name: 'heart',
                                type: 'font-awesome',
                                size: 60,
                                color: 'red',
                            }}
                            featured
                            activeOpacity={0.8}
                            onPress={() => {
                                'Tile pressed';
                            }}
                            width={310}
                        />

                        <Tile
                            imageSrc={{
                                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                            }}
                            icon={{
                                name: 'heart',
                                type: 'font-awesome',
                                size: 60,
                                color: 'red',
                            }}
                            featured
                            activeOpacity={0.8}
                            onPress={() => {
                                'Tile pressed';
                            }}
                            width={310}
                        />

                        <Tooltip
                            visible={openTooltip}
                            onOpen={() => setOpenTooltip(true)}
                            onClose={() => setOpenTooltip(false)}
                            popover={<Text style={{ color: '#fff' }}>Tooltip text</Text>}>
                            <Text>Click me</Text>
                        </Tooltip>

                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <CheckBox checked title="Label" />
                            <CheckBox checked disabled title="Label" />
                        </View>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <CheckBox
                                checked={selectedIndexCheck === 0}
                                onPress={() => setSelectedIndexCheck(0)}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                            />
                            <CheckBox
                                checked={selectedIndexCheck === 1}
                                onPress={() => setSelectedIndexCheck(1)}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                            />
                        </View>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <CheckBox
                                checked={checked}
                                checkedIcon="heart"
                                uncheckedIcon="heart-o"
                                checkedColor="red"
                                onPress={toggleCheckbox}
                            />
                            <CheckBox
                                checked={checked}
                                checkedIcon="bookmark"
                                uncheckedIcon="bookmark-o"
                                checkedColor="heart"
                                onPress={toggleCheckbox}
                            />
                        </View>




                    </View>

                    </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
  )
}

export default Component_SecondPage

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
})