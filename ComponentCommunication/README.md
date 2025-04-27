# Users List demo for Component Communication with Subject

This Angular application demonstrates how to display and manage a list of users using Angular Material components, such as tables with sorting, pagination, and dynamic updates when adding new users.

## Features

- **User List**: Users are fetched from a dummy API and displayed in a table.
- **Sorting**: Users can be sorted based on columns (name, age, address).
- **Pagination**: Users are displayed in paginated form for better performance with large datasets.
- **Add User**: New users can be added to the list dynamically.

## Prerequisites

- **Node.js** (version 14 or above)
- **Angular CLI**

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   cd <project-folder>
   npm install
   ```

### Running the Project

1. Start the Angular development server:
   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`.

## Project Structure

- **src/app/model/add-user/add-user.component.ts**: This component handles the functionality for adding a new user to the system. It provides a form where users can input details such as name, age, and address, and submit the information to be added to the user list.
- **src/app/models/User.ts**: Defines the `User` model.
- **src/app/services/user.service.ts**: Contains the logic for fetching and adding users, using a `Subject` to emit changes.
- **src/app/components/users-list/users-list.component.ts**: Displays the list of users with Angular Material's table, sorting, and pagination.

## Built With

- **Angular**: Frontend framework for building the application.
- **Angular Material**: UI components like table, sort, and paginator.
- **RxJS**: For managing asynchronous data streams.

