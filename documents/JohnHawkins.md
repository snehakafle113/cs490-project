My job currently is as a member of UI for Team Steve in addition to being the Project Manager

10/24: created this file and submitted a pull request to add it to main 
    https://github.com/snehakafle113/cs490-project/pull/2

10/25: began discussing the general design for the app with the UI team and began assigning jobs for Sprint 1

10/26: Joined Trello

10/30: Assigned jobs on Trello and began to work on the week and day views for CalendarView
    https://github.com/snehakafle113/cs490-project/pull/21/commits/27bac7bb485624747ef48dd84e909e47b3447e27

11/1 - 11/7: began planning for Sprint 2 goals, and began reading up on redwood cell and the goggle api

11/8: changed the path for week and day views in addition to creating the initial version of the homePage
    
11/9: created the initial folder structure for the pages and added the storybook for homepage

11/15: updated yarn.lock and package.json files to add new dependencies. Submitted PR for work from 11/8 - 11/15
    https://github.com/snehakafle113/cs490-project/pull/21
    https://github.com/snehakafle113/cs490-project/pull/22

11/16: initially started working on the banner. also added subfolders to /pages
    https://github.com/snehakafle113/cs490-project/pull/23

11/20: added the logo to the banner with Tim
    https://github.com/snehakafle113/cs490-project/pull/28/commits/11103fced59de806f3015be4d27b4234e4b196fc

11/21: started looking into the use of FullCalendar as a way to create a calendar for calendarView without needing build all elements from scratch

11/22: talked with UI team to make sure that everyone was properly reassigned jobs due to FullCalendar not need 3 people to work on it

11/27: worked locally on the FullCalendar implementation

11/29: committed the rewrite of week view to git and fixed issues with the file

11/30: added custom button as a place holder for date picker and renamed files to more accurately show what they contained. fixed issue with the imports for the calendar view storybook. submitted PR 
    https://github.com/snehakafle113/cs490-project/pull/27

12/1 -12/5: worked on getting the date picker to work with FullCalendar

12/6: rewrote the homePage to use chakra components rather than stylized components. finished the date picker for the calendar view. mounted calendarView on the homePage tab so it would render. submitted PR
    https://github.com/snehakafle113/cs490-project/pull/32

12/7: met with groups to make sure progress is being made on outstanding components

12/8: hard coded events to make sure that calendar was properly reading them in (due to this branch not planning on being merged this link may not still work)
    https://github.com/snehakafle113/cs490-project/commit/e12cd7675911a502649831845c87cbaea911b97d

12/11: continued to work on trying to get the google calendar events to populate the calendar (due to this branch not planning on being merged this link may not still work)
    https://github.com/snehakafle113/cs490-project/commit/28b8f19c8e9ba312fad442fdfa0ae16614773d95

12/12: created a new branch. rewrote calendarView as CalendarViewCell so that the query would properly return the events. edited the homePage to reflect this. updated mock data and test so that both the test and the storybook properly run. generated tests for homePage to make sure it renders properly. also fixed typo in Banner component. after updating this file will submit this as PR 40 (put the link as it should hopefully be)
    https://github.com/snehakafle113/cs490-project/pull/40
