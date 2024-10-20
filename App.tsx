import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  // Assuming you don't need notifications for now, we are keeping notifee-related code commented out.
  // useEffect(() => {
  //   async function requestPermission() {
  //     await notifee.requestPermission();
  //   }
  //   requestPermission();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#4caf50', // Set a color for your header
          },
          headerTintColor: '#fff', // Set color for title and icons
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{title: 'Register'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="AdminHome"
          component={AdminHome}
          options={{title: 'Admin Home'}}
        />
        <Stack.Screen
          name="TeacherHome"
          component={TeacherHome}
          options={{title: 'Teacher Home'}}
        />
        <Stack.Screen
          name="StudentHome"
          component={StudentHome}
          options={{title: 'Student Home'}}
        />
        <Stack.Screen
          name="ParentHome"
          component={ParentHome}
          options={{title: 'Parent Home'}}
        />
        <Stack.Screen
          name="StudentList"
          component={StudentList}
          options={{title: 'Student List'}}
        />
        <Stack.Screen
          name="TeacherList"
          component={TeacherList}
          options={{title: 'Teacher List'}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{title: 'Notifications'}}
        />
        <Stack.Screen
          name="Reports"
          component={Reports}
          options={{title: 'Reports'}}
        />
        <Stack.Screen
          name="StudentManagement"
          component={StudentManagementScreen}
          options={{title: 'Student Management'}}
        />
        <Stack.Screen
          name="EnrollStudent"
          component={EnrollStudent}
          options={{title: 'Enroll Student'}}
        />
        <Stack.Screen
          name="Attendance"
          component={Attendance}
          options={{title: 'Attendance'}}
        />
        <Stack.Screen
          name="Grades"
          component={Grades}
          options={{title: 'Grades'}}
        />
        <Stack.Screen
          name="Assignments"
          component={Assignments}
          options={{title: 'Assignments'}}
        />
        <Stack.Screen
          name="TeacherManagement"
          component={TeacherManagementScreen}
          options={{title: 'Teacher Management'}}
        />
        <Stack.Screen
          name="ManageSchedule"
          component={ManageSchedule}
          options={{title: 'Manage Schedule'}}
        />
        <Stack.Screen
          name="ManageClasses"
          component={ManageClasses}
          options={{title: 'Manage Classes'}}
        />
        <Stack.Screen
          name="TeacherAttendance"
          component={TeacherAttendance}
          options={{title: 'Teacher Attendance'}}
        />
        <Stack.Screen
          name="ParentPortal"
          component={ParentPortalScreen}
          options={{title: 'Parent Portal'}}
        />
        <Stack.Screen
          name="StudentInfo"
          component={StudentInfo}
          options={{title: 'Student Info'}}
        />
        <Stack.Screen
          name="ParentGrades"
          component={ParentGrades}
          options={{title: 'Parent Grades'}}
        />
        <Stack.Screen
          name="Communicate"
          component={Communicate}
          options={{title: 'Communicate'}}
        />
        <Stack.Screen
          name="TimetableManagement"
          component={TimetableManagementScreen}
          options={{title: 'Timetable Management'}}
        />
        <Stack.Screen
          name="ViewTimetable"
          component={ViewTimetable}
          options={{title: 'View Timetable'}}
        />
        <Stack.Screen
          name="ManageTimetable"
          component={ManageTimetable}
          options={{title: 'Manage Timetable'}}
        />
        <Stack.Screen
          name="NotificationsManagement"
          component={NotificationsManagementScreen}
          options={{title: 'Notifications Management'}}
        />
        <Stack.Screen
          name="ViewNotifications"
          component={ViewNotifications}
          options={{title: 'View Notifications'}}
        />
        <Stack.Screen
          name="AddNotification"
          component={AddNotification}
          options={{title: 'Add Notification'}}
        />
        <Stack.Screen
          name="Communication"
          component={CommunicationScreen}
          options={{title: 'Communication'}}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{title: 'Chat'}}
        />
        <Stack.Screen
          name="ReportsManagement"
          component={ReportsManagementScreen}
          options={{title: 'Reports Management'}}
        />
        <Stack.Screen
          name="ProgressReports"
          component={ProgressReports}
          options={{title: 'Progress Reports'}}
        />
        <Stack.Screen
          name="AttendanceReports"
          component={AttendanceReports}
          options={{title: 'Attendance Reports'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
