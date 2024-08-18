# Next.js E-commerce Project

## Overview

This project is a modern e-commerce application built with Next.js, showcasing a range of features and best practices in web development. It demonstrates proficiency in full-stack development, state management, and database integration.

## Key Features

- **Product Listing**: Display products in a responsive grid layout.
- **Shopping Cart**: Add/remove items, adjust quantities, with real-time updates.
- **Persistent Cart**: Cart data is stored in the Local storage.
- **Server Actions**: Utilize Next.js server actions for efficient data fetching and mutations.
- **Database Integration**: PostgreSQL with Prisma ORM for robust data management.
- **State Management**: Zustand for client-side state management.
- **Responsive Design**: Mobile-friendly UI using Tailwind CSS and Shadcn UI.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL
- **ORM**: Prisma
- **State Management**: Zustand
- **Styling**: Tailwind CSS

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/Deepansh05dk/ecommerce-assignment.git
   ```

2. Install dependencies:

   ```
   cd your-repo-name
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL="your_postgresql_connection_string"
   ```

4. Set up the database:

   ```
   npx prisma migrate dev
   ```

5. Run the development server:

   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app`: Next.js app router pages and layouts
- `/components`: Reusable React components
- `/lib`: Utility functions and shared logic
- `/prisma`: Prisma schema and migrations
- `/public`: Static assets
- `/hooks`: Zustand store configurations in form of hooks

## Key Implementations

### Cart Management

- **Users**: Cart data is stored in local storage for a seamless experience.

### Database Schema

Utilizes Prisma ORM with the following main models:

- User
- Product
- Cart
- CartItem

### Server Actions

Leverages Next.js server actions for efficient server-side operations, including:

- Fetching product data
- Managing cart operations (add, remove, update quantities)

## Future Enhancements

- Implement checkout process
- Add user authentication and store cart on database(better approach)
- Add product categories and search functionality
- Introduce user reviews and ratings
- Develop an admin panel for product management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
