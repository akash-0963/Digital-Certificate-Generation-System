# Digital Certificate Generation System

A comprehensive platform for automating certificate generation and distribution. This system creates personalized certificates instantly from templates and recipient data, sends them via email, and includes payment integration for certificate services.

## Features

- **Certificate Template Management** - Create and manage certificate designs
- **Bulk Certificate Generation** - Generate multiple certificates from CSV data
- **QR Code Integration** - Embed QR codes for certificate verification
- **Email Distribution** - Automated email delivery with certificate attachments
- **Payment Integration** - Razorpay integration for certificate sales
- **Certificate Verification** - Verify certificates via unique QR codes
- **Digital Signatures** - Support for signature images on certificates
- **Responsive UI** - React-based frontend with Tailwind CSS

## Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **PDF Generation:** PDFKit
- **Email Service:** Nodemailer
- **Image Processing:** Sharp
- **Authentication:** JWT (JSON Web Tokens)
- **Payment Gateway:** Razorpay

### Frontend
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Routing:** React Router

## Project Structure

```
.
├── backend/          # Node.js Express server
│   ├── src/
│   │   ├── app.js           # Express app configuration
│   │   ├── middlewares/     # Auth and request middlewares
│   │   ├── routes/          # API endpoints
│   │   ├── models/          # MongoDB schemas
│   │   └── config/          # Configuration files
│   └── package.json
├── frontend/         # React Vite application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   └── services/        # API integration
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher, see `.nvmrc`)
- npm or yarn
- MongoDB instance
- Razorpay account (for payments)
- Email service credentials (SMTP)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Digital-Certificate-Generation-System
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

The application will be available at:
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:4000

## Environment Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/certificates

# Authentication
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRES_IN=7d

# Frontend URL (for QR codes and email links)
FRONTEND_URL=http://localhost:5173

# File Storage
FILE_STORAGE_PATH=uploads
BASE_URL=http://localhost:4000

# Email Configuration (SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret
RAZORPAY_WEBHOOK_SECRET=your-razorpay-webhook-secret
```

See `.env.example` for a template.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Certificates
- `GET /api/certificates` - List user certificates
- `POST /api/certificates/generate` - Generate single certificate
- `GET /api/certificates/:id` - Get certificate details
- `GET /api/certificates/:id/verify` - Verify certificate via QR code

### Bulk Operations
- `POST /api/bulk/upload` - Upload CSV for bulk generation
- `GET /api/bulk/status/:batchId` - Check bulk generation status

### Templates
- `GET /api/templates` - List templates
- `POST /api/templates` - Create new template
- `PUT /api/templates/:id` - Update template
- `DELETE /api/templates/:id` - Delete template

### Payments
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment

## Sample Data

A test file `test_bulk.csv` is included for testing bulk certificate generation.

## Development

### Running Development Servers

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

### Building for Production

**Backend:**
```bash
cd backend
# Ensure NODE_ENV=production in .env
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## File Structure

### Uploads Directory
```
uploads/
├── certificates/     # Generated PDF certificates
├── templates/        # Certificate template files
└── signatures/       # Signature images
```

## Common Issues

### MongoDB Connection Error
- Ensure MongoDB is running
- Verify `MONGO_URI` in `.env` is correct
- Check firewall/network settings

### Email Not Sending
- Verify SMTP credentials
- Check if "Less secure app access" is enabled (Gmail)
- Generate app-specific password if using 2FA

### QR Code Not Appearing
- Ensure `FRONTEND_URL` is correctly set in `.env`
- Verify the verification page is accessible at `FRONTEND_URL/verify/{certificateId}`

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For issues or questions, please create an issue in the repository.
