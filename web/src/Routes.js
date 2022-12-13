// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import { useNavigate } from 'react-router-dom'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import ViewsLayout from 'src/layouts/ViewsLayout'
import homePage from 'src/pages/HomePage/homePage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ViewsLayout}>
        <Route path="/" page={homePage} name="home" />
        <Route path="/profile" page={ProfilePage} name="profile" />
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
