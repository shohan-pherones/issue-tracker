# Issue Tracker Web Application

Welcome to the README for the Issue Tracker, a web application for managing issues and tasks efficiently. This application is built using modern web development technologies and tools to provide a seamless experience for tracking, managing, and collaborating on issues.

## Tools and Technologies

The Issue Tracker is built using the following technologies and tools:

- **React Hook Form**: A library for handling form input and validation.
- **Prisma**: An ORM for working with databases, in this case, PostgreSQL.
- **Radix UI**: A collection of UI primitives for building robust user interfaces.
- **Sentry**: A powerful error tracking and monitoring tool.
- **React Query**: A data-fetching library to handle complex data requirements.
- **Axios**: A promise-based HTTP client for making network requests.
- **Next.js**: A popular React framework for server-side rendering (SSR).
- **NextAuth.js**: An authentication library for Next.js applications.
- **React**: A JavaScript library for building user interfaces.
- **Recharts**: A charting library for creating data visualizations.
- **Zod**: A runtime type checking library for TypeScript.
- **TypeScript**: A statically-typed superset of JavaScript.
- **PostgreSQL**: A powerful, open-source relational database system.

## Features

The Issue Tracker offers the following key features:

- **Add Issue**: Create and submit new issues.
- **Edit Issue**: Modify existing issue details.
- **Delete Issue**: Remove issues that are no longer relevant.
- **Update Status of Issue**: Change the status of an issue (OPEN, IN_PROGRESS, CLOSED).
- **Assign Issue to Users**: Assign issues to specific users for accountability.
- **Server-Side Rendering (SSR)**: Improved performance and SEO.
- **Pagination**: Easily navigate through a large number of issues.
- **React Caching**: Efficiently manage data and reduce network requests.
- **Filtering**: Filter issues based on various criteria.
- **Sorting**: Sort issues by different attributes.
- **Markdown Editor for Issue**: Add formatted descriptions using Markdown.

## Models

The application uses the following Prisma models to represent data in the database:

| Model               | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `Issue`             | Represents an issue with title, description, and status. |
| `Account`           | Represents user accounts for authentication.             |
| `Session`           | Represents user sessions for authentication.             |
| `User`              | Represents application users.                            |
| `VerificationToken` | Represents verification tokens.                          |

The `Issue` model has an associated enum type `Status` with values `OPEN`, `IN_PROGRESS`, and `CLOSED`.

## Environment Variables

To run the Issue Tracker application, you will need to set the following environment variables:

- `POSTGRES_PRISMA_URL`: The URL to connect to the PostgreSQL database using Prisma.
- `POSTGRES_URL_NON_POOLING`: An alternative PostgreSQL URL for non-pooling.
- `NEXTAUTH_URL`: The URL of your Next.js application for authentication.
- `NEXTAUTH_SECRET`: A secret key for NextAuth.js.
- `GOOGLE_CLIENT_ID`: Your Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret.

## Conclusion

The Issue Tracker is a versatile web application built with modern tools and technologies to streamline issue management and collaboration. It offers a robust set of features, efficient data handling, and a user-friendly interface. Get started by setting up the environment variables and exploring the power of issue tracking with this application.
