// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import ViewsLayout from 'src/layouts/ViewsLayout'
import homePage from 'src/pages/HomePage/homePage'

import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'
import SignupPage from './pages/Registration/SignupPage'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage'
import LoginPage from './pages/Sign-in/LoginPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ViewsLayout}>
        <Route path="/" page={homePage} name="home" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Tasks" titleTo="tasks" buttonLabel="New Task" buttonTo="newTask">
        <Route path="/tasks/new" page={TaskNewTaskPage} name="newTask" />
        <Route path="/tasks/{id:Int}/edit" page={TaskEditTaskPage} name="editTask" />
        <Route path="/tasks/{id:Int}" page={TaskTaskPage} name="task" />
        <Route path="/tasks" page={TaskTasksPage} name="tasks" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Statuses" titleTo="statuses" buttonLabel="New Status" buttonTo="newStatus">
        <Route path="/statuses/new" page={StatusNewStatusPage} name="newStatus" />
        <Route path="/statuses/{id:Int}/edit" page={StatusEditStatusPage} name="editStatus" />
        <Route path="/statuses/{id:Int}" page={StatusStatusPage} name="status" />
        <Route path="/statuses" page={StatusStatusesPage} name="statuses" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

/*

*/
