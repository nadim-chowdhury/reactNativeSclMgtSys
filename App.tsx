/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import notifee from '@notifee/react-native';
// import 'react-native-gesture-handler';

import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AdminHome from './screens/AdminHome';
import TeacherHome from './screens/TeacherHome';
import StudentHome from './screens/StudentHome';
import ParentHome from './screens/ParentHome';
import StudentList from './screens/StudentList';
import TeacherList from './screens/TeacherList';
import Notifications from './screens/Notifications';
import Reports from './screens/Reports';
import StudentManagementScreen from './screens/StudentManagementScreen';
import EnrollStudent from './screens/EnrollStudent';
import Attendance from './screens/Attendance';
import Grades from './screens/Grades';
import Assignments from './screens/Assignments';
import TeacherManagementScreen from './screens/TeacherManagementScreen';
import ManageSchedule from './screens/ManageSchedule';
import ManageClasses from './screens/ManageClasses';
import TeacherAttendance from './screens/TeacherAttendance';
import ParentPortalScreen from './screens/ParentPortalScreen';
import StudentInfo from './screens/StudentInfo';
import ParentGrades from './screens/ParentGrades';
import Communicate from './screens/Communicate';
import TimetableManagementScreen from './screens/TimetableManagementScreen';
import ViewTimetable from './screens/ViewTimetable';
import ManageTimetable from './screens/ManageTimetable';
import NotificationsManagementScreen from './screens/NotificationsManagementScreen';
import ViewNotifications from './screens/ViewNotifications';
import AddNotification from './screens/AddNotification';
import CommunicationScreen from './screens/CommunicationScreen';
import ChatScreen from './screens/ChatScreen';
import ReportsManagementScreen from './screens/ReportsManagementScreen';
import ProgressReports from './screens/ProgressReports';
import AttendanceReports from './screens/AttendanceReports';
import HomeScreen from './screens/Home';

const Stack = createStackNavigator();

// notifee.createChannel({
//   id: 'default',
//   name: 'Default Channel',
// });

function App(): React.JSX.Element {
  React.useEffect(() => {
    async function requestPermission() {
      // await notifee.requestPermission();
    }
    requestPermission();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="TeacherHome" component={TeacherHome} />
        <Stack.Screen name="StudentHome" component={StudentHome} />
        <Stack.Screen name="ParentHome" component={ParentHome} />
        <Stack.Screen name="StudentList" component={StudentList} />
        <Stack.Screen name="TeacherList" component={TeacherList} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen
          name="StudentManagement"
          component={StudentManagementScreen}
        />
        <Stack.Screen name="EnrollStudent" component={EnrollStudent} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="Grades" component={Grades} />
        <Stack.Screen name="Assignments" component={Assignments} />
        <Stack.Screen
          name="TeacherManagement"
          component={TeacherManagementScreen}
        />
        <Stack.Screen name="ManageSchedule" component={ManageSchedule} />
        <Stack.Screen name="ManageClasses" component={ManageClasses} />
        <Stack.Screen name="TeacherAttendance" component={TeacherAttendance} />

        <Stack.Screen name="ParentPortal" component={ParentPortalScreen} />
        <Stack.Screen name="StudentInfo" component={StudentInfo} />
        <Stack.Screen name="ParentGrades" component={ParentGrades} />
        <Stack.Screen name="Communicate" component={Communicate} />
        <Stack.Screen
          name="TimetableManagement"
          component={TimetableManagementScreen}
        />
        <Stack.Screen name="ViewTimetable" component={ViewTimetable} />
        <Stack.Screen name="ManageTimetable" component={ManageTimetable} />
        <Stack.Screen
          name="NotificationsManagement"
          component={NotificationsManagementScreen}
        />
        <Stack.Screen name="ViewNotifications" component={ViewNotifications} />
        <Stack.Screen name="AddNotification" component={AddNotification} />
        <Stack.Screen name="Communication" component={CommunicationScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen
          name="ReportsManagement"
          component={ReportsManagementScreen}
        />
        <Stack.Screen name="ProgressReports" component={ProgressReports} />
        <Stack.Screen name="AttendanceReports" component={AttendanceReports} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
