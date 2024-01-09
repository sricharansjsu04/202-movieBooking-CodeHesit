# New Project Start

# MovieTheater Application - SMC Movies

## TEAM NAME - Team10

| TEAM                     | SJSU ID   |
| ------------------------ | --------- |
| Sri Charan Reddy Mallu   | 017419779 |
| Siva Swaroop Vardhineedi | 016835312 |
| Mahek Virani             | 017446936 |

## Team Members and Contribution gist:

| TEAM                  | Contribution                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Siva Swaroop Vardhineedi | Scrum Master, Front end and Backend API implementation - Designed and configured MongoDB models, cinemaController logic, worked on cinema route module,worked on Admin Route for client logic, Designed and worked on Home, Register, Purchase front-end client webpages, developed Navbar, TheatreListByMovie, CinemaLists, DateSelector React Components, loadbalancer                                                                           
|Sri Charan Reddy Mallu | Front end and Backend API implementation - authController & theaterController logic, worked on auth route & theater module, Developed Auth Context, Designed and worked on Tickets, Analytics, Login front-end client webpages, developed MovieLists, NowShowing, ShowtimeDetails, Showtimes React Components, AWS deployment and Autoscaling in EC2 instanceseveloped SelectedMovie, Seat configurations, ScheduleTable, Loading React Components |
| Mahek Virani          | Front end and Backend API implementation - movieController logic, worked on movie route module, Developed Location Context, Designed and worked on Movie, Showtime, Cinema front-end client webpages, developed Theater, TheaterListsByCinema, UpcomingMovies React Components ,Configured showtime component for admin users, worked on showtime route module, Designed and worked on User front-end client webpages,Black box Testing            |

## Tech stack

REACTJS, TAILWIND CSS, VITE, NODEJS, EXPRESSJS, PostgreSQL

## Design Choices:

### Why PostgreSQL in a database?

- PostgreSQL supports complex data types and allows for efficient storage and querying of this varied data.
- PostgreSQL is known for its high reliability and data integrity features, which are crucial for your system as it involves financial transactions
- Since APIs require input and output in JSON format, PostgreSQL's robust support for JSON data types is beneficial
- PostgreSQL provides robust mechanisms for error handling and input validation

### Why PERN Stack - Performance and User Interface Rendering

- React JS stands out for its ability to abstract the user interface (UI) layer effectively. As a library, React offers flexibility in constructing applications and organizing code, resulting in enhanced UI rendering and performance when compared to Angular
- Cost Efficiency
  PERN stack applications can be designed to scale horizontally using cloud services like AWS, Azure, or Google Cloud. You can scale your infrastructure as needed to handle increased traffic without significant upfront investments..
- Open Source and Cost-Free
  All components of the PERN stack are open source, meaning there are no licensing fees associated with their usage.

## XP Core Values Maintained by Team

- **Communication** <br> Our team ensured clear and effective communication by defining the project requirements and objectives explicitly. We've established the need for APIs with JSON input and output, error handling, and validation, which promoted a shared understanding of expectations. Regular collaboration among team members was essential to meet the project's goals.

- **Feedback** <br> Through a consistent exchange of feedback, we gained valuable insights, adapted to evolving circumstances, and prevented the recurrence of mistakes, ultimately improving our productivity. Throughout the development journey, we initiated pull requests and deposited our modifications in a separate branch. These adjustments were only integrated into the main branch after securing approval from a fellow team member.

- **Simplicity** <br> Simplicity was a key focus in our approach. We emphasized the adoption of straightforward and efficient solutions. Our code was architected with modularity and reusability in mind, guaranteeing that it remains accessible and adaptable for any future team members. We took care to minimize any code inconsistencies, and we incorporated meaningful comments to enhance code comprehension.

## Architecture Diagram

![Architecture.jpeg](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/images/Architecture.jpeg)

## Deployment Diagram

![Deployment.jpeg](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/images/Deployment.jpeg)

## UML Diagram

![UML.jpeg](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/images/UML.jpeg)

## Component Diagram

![Component.jpeg](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/images/Component.jpeg)

# Feature Set

### For all users:

View Home/Landing page showing information about the Theaters, locations, current movie schedules, and upcoming movies,
View membership option - Regular and Premium
View Registration/Signup page - viewable by all users
Book tickets for a movie
Each booking will include an online service fee ($1.50 per ticket)

### For Enrolled and logged in Members:

View members page - showing movie tickets purchased, rewards points accumulated
Regular membership is free
Premium membership is for an annual fee of 15 dollars
View list of Movies watched in the past 30 days
Book multiple seats (upto 8) for a movie show - using rewards points or payment method (pre-selected) - seats selected by the user
Cancel previous tickets before showtime and request refund
Accumulate rewards points (all members) 1 point per dollar
Premium members get online service fee waived for any booking

### Theater employees :

Add/update/remove movies/showtimes/theater assignment in the schedule
Configure seating capacity for each theater in a multiplex
View analytics dashboard showing Theater occupancy for the last 30/60/90 days
Summarized by location
Summarized by movies
Configure discount prices for shows before 6pm and for Tuesday shows

## UI Wireframes

![HomePage.png](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/Wireframes/HomePage.png)
![AdminPage.png](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/Wireframes/AdminPage.png)
![Login.png](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/Wireframes/Login.png)
![Registration.png](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/Wireframes/Registration.png)
![MovieList.png](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/Wireframes/MovieList.png)
![SeatSelection.png](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/Wireframes/SeatSelection.png)
![PremiumPayment.png](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/Wireframes/PremiumPayment.png)
![MovieBookingPayment.png](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/Wireframes/MovieBookingPayment.png)
![TicketBooked.png](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/Wireframes/TicketBooked.png)

## Sprint BurnDown Chart

[SprintTaskSheetandburndown_CodeHeist.xlsx](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/SprintScrumUpdates/SprintTaskSheetandburndown_CodeHeist.xlsx)

## Daily Scrum Sheet

[Sprint Task Sheet and burndown strawhats.xlsx](https://github.com/gopinathsjsu/team-project-codeheist/blob/main/SprintScrumUpdates/SprintTaskSheetandburndown_CodeHeist.xlsx)

## Steps to run the application

1. git clone [repo](https://github.com/gopinathsjsu/.git)
2. Install dependencies for both frontend and backend npm install `npm install`
3. Create .env file at /server :

```
PORT=8080
DATABASE=<your Postgre connection string URI>
JWT_SECRET=<any random JWT secret>
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
```

4. Run backend - `npm run dev`
   Run frontend - `npm run start`
