# Admin Dashboard Setup Guide

This admin dashboard provides a complete CRUD interface for managing blog posts in your startup website.

## Features

- **Blog Management**: Create, read, update, and delete blog posts
- **Admin Dashboard**: Clean, modern interface following your site's design
- **Database Integration**: PostgreSQL database with Prisma ORM
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Matches your existing theme system

## Setup Instructions

### 1. Database Configuration

The application is configured to use PostgreSQL. You need to set up a PostgreSQL database and update the connection string.

#### Option A: Local PostgreSQL
1. Install PostgreSQL locally
2. Create a database: `CREATE DATABASE startup_blog;`
3. Update `.env` file with your credentials:
   ```
   DATABASE_URL="postgresql://your_username:your_password@localhost:5432/startup_blog?schema=public"
   ```

#### Option B: Supabase (Recommended for Development)
1. Sign up at [Supabase](https://supabase.com)
2. Create a new project and database
3. Get the connection string from Settings > Database
4. Update `.env` file with the Supabase connection string

#### Option C: Render PostgreSQL
1. Sign up at [Render](https://render.com)
2. Create a PostgreSQL instance
3. Update `.env` file with the provided connection string

### 2. Database Migration

After setting up your database, run the migration:

```bash
npx prisma migrate dev --name init
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Start the Development Server

```bash
npm run dev
```

## Admin Dashboard Access

1. Start your development server
2. Navigate to `http://localhost:3000/admin`
3. Use the navigation menu to access blog management

## API Endpoints

The following API endpoints are available:

- `GET /api/blog` - Get all blogs
- `POST /api/blog` - Create new blog
- `GET /api/blog/:id` - Get single blog
- `PUT /api/blog/:id` - Update blog
- `DELETE /api/blog/:id` - Delete blog

## File Structure

```
src/
├── app/
│   ├── admin/                    # Admin dashboard pages
│   │   ├── page.tsx             # Admin dashboard home
│   │   └── blogs/               # Blog management
│   │       ├── page.tsx         # Blog list
│   │       ├── create/          # Create blog form
│   │       │   └── page.tsx
│   │       └── edit/[id]/       # Edit blog form
│   │           └── page.tsx
│   └── api/
│       └── blog/                # API routes
│           ├── route.ts         # CRUD operations
│           └── [id]/
│               └── route.ts     # Single blog operations
├── lib/
│   └── prisma.ts               # Prisma client setup
└── components/
    └── Header/
        └── menuData.tsx        # Navigation menu (includes Admin link)
```

## Database Schema

The `Blog` model includes the following fields:

- `id` - Auto-incrementing primary key
- `title` - Blog title
- `content` - Full blog content
- `excerpt` - Short description (optional)
- `image` - Blog image URL (optional)
- `authorName` - Author's name
- `authorImage` - Author's image URL (optional)
- `authorRole` - Author's role (optional)
- `tags` - Comma-separated tags (optional)
- `publishDate` - Publication date
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## Usage

1. **Create Blog**: Navigate to Admin > Blog Management > Create New Blog
2. **Edit Blog**: Click "Edit" on any blog in the list
3. **Delete Blog**: Click "Delete" to remove a blog (with confirmation)
4. **View Blogs**: The main blog page automatically fetches from the database

## Styling

The admin dashboard follows your existing design system:
- Uses the same color scheme and typography
- Supports dark/light theme switching
- Responsive grid layout
- Consistent button and form styling

## Troubleshooting

### Database Connection Issues
- Verify your PostgreSQL connection string in `.env`
- Ensure your database server is running
- Check firewall settings if using remote database

### Prisma Issues
- Run `npx prisma generate` after any schema changes
- Check `prisma/schema.prisma` for syntax errors
- Verify migration files in `prisma/migrations/`

### Development Server Issues
- Clear Next.js cache: `rm -rf .next`
- Restart the development server
- Check console for error messages

## Security Notes

- The current implementation has basic authentication
- Consider adding proper authentication middleware for production
- Validate and sanitize all user inputs
- Use environment variables for sensitive configuration

## Future Enhancements

- Rich text editor for blog content
- Image upload functionality
- Blog categories and tags management
- User management system
- Analytics dashboard
- SEO optimization tools