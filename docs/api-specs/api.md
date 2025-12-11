# API Specifications

## Base URL

- Development: `http://localhost:4000`
- Production: `https://api.shyara.co.in`

## Authentication

Currently, the API does not require authentication. Future versions may include API key authentication.

## Endpoints

### Health Check

**GET** `/health`

Check API health status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 12345.67
}
```

---

### Contact Form Submission

**POST** `/api/contact`

Submit a contact form.

**Rate Limit:** 5 requests per hour per IP

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "message": "Hello, I'm interested in your services."
}
```

**Validation:**
- `name`: Required, 2-100 characters
- `email`: Required, valid email format
- `phone`: Optional, string
- `message`: Required, 10-1000 characters

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "clx1234567890",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 1234567890",
    "message": "Hello, I'm interested in your services.",
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "message": "Contact form submitted successfully"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Validation error",
  "message": "name: Name must be at least 2 characters, email: Invalid email address"
}
```

---

### Analytics Tracking

**POST** `/api/analytics/track`

Track page views and user interactions.

**Request Body:**
```json
{
  "page": "/about",
  "device": "desktop",
  "metadata": {
    "referrer": "https://google.com",
    "userAgent": "Mozilla/5.0..."
  }
}
```

**Validation:**
- `page`: Required, string (page path)
- `device`: Optional, string
- `metadata`: Optional, object

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "clx1234567890",
    "page": "/about",
    "device": "desktop",
    "timestamp": "2024-01-01T00:00:00.000Z",
    "metadata": {
      "referrer": "https://google.com",
      "userAgent": "Mozilla/5.0..."
    }
  }
}
```

---

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": "Error message",
  "message": "Additional details (optional)"
}
```

**Status Codes:**
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error

---

## Rate Limiting

- **Global:** 100 requests per 15 minutes per IP
- **Contact Form:** 5 requests per hour per IP

Rate limit headers are included in responses:
- `X-RateLimit-Limit`: Maximum requests allowed
- `X-RateLimit-Remaining`: Remaining requests
- `X-RateLimit-Reset`: Time when limit resets

