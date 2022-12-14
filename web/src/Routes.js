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

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={LandingPage} name="landing" />
      <Set wrap={ViewsLayout}>
        <Route path="/home" page={homePage} name="home" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Tasks" titleTo="tasks" buttonLabel="New Task" buttonTo="newTask">
        <Route path="/tasks/{id:Int}/edit" page={TaskEditTaskPage} name="editTask" />
=     </Set>
      <Set wrap={ScaffoldLayout} title="Statuses" titleTo="statuses" buttonLabel="New Status" buttonTo="newStatus">
        <Route path="/statuses/new" page={StatusNewStatusPage} name="newStatus" />
        <Route path="/statuses" page={StatusStatusesPage} name="statuses" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

/*

*/
