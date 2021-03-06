import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserHomeScreen from './src/screens/UserHomeScreen';
import ServeceProviderHome from './src/screens/ServeceProviderHome';

// import Sort from './src/Haya/components/Sort'
// import Haya from "./src/Haya/HayaApp"
import SignupScreen from './src/Deyaa/components/SignupScreen'
import LoginScreen from './src/Deyaa/components/LoginScreen'
import SigninServiceProviderScreen from './src/Deyaa/components/LoginServiceProvider'
import SignupServiceProviderScreen from './src/Deyaa/components/SignupServiceProvider'
import WellcomePage from './src/Haya/components/Wellcome'
// import Posts from './src/Moath/components/Posts'
import Dashboard from './src/Haya/components/DashBoard'
// import NewPost from './src/Emad/components/NewPost'
// import NewPost from './src/Emad/components/NewPost'
// import SortItems from './src/Haya/components/SortItems'
import HomeScreen from './src/screens/HomeScreen'
import AbouttUs from './src/screens/AboutUsScreen'
import ContactUs from './src/screens/ContactUsScreen'

const navigator = createStackNavigator(
  {
    UserHomeScreen: UserHomeScreen,
    ServeceProviderHome: ServeceProviderHome,
    SignupScreen: SignupScreen,
    LoginScreen: LoginScreen,
    SigninServiceProviderScreen,
    SignupServiceProviderScreen,
    WellcomePage: WellcomePage,
    // Posts,
    Dashboard,
    // NewPost,
    HomeScreen,
    ContactUs,
    AbouttUs
  },
  {
    initialRouteName: 'WellcomePage',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
