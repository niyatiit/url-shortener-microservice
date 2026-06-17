# 🔗 URL Shortener Microservice

This is a **backend-only API project** built as part of the **freeCodeCamp Backend Development and APIs Certification**.

The project allows users to submit a URL and receive a shortened version. When the shortened URL is visited, the user is automatically redirected to the original URL.

---

## 🚀 Live Demo

Base URL:

https://url-shortener-microservice-dewr.onrender.com

---

## 🎯 Features

* Shorten long URLs
* Redirect users using short URLs
* Validate submitted URLs
* REST API built with Express.js
* Error handling for invalid URLs

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* JavaScript
* CORS
* Body Parser

---

## 📡 API Endpoints

### Home Route

GET

```text
/
```

Returns the project homepage.

---

### Create a Short URL

POST

```text
/api/shorturl
```

Request Body:

```text
url=https://www.freecodecamp.org
```

Response:

```json
{
  "original_url": "https://www.freecodecamp.org",
  "short_url": 1
}
```

---

### Access a Shortened URL

GET

```text
/api/shorturl/:short_url
```

Example:

```text
https://url-shortener-microservice-dewr.onrender.com/api/shorturl/1
```

This endpoint redirects the user to the original URL associated with the provided short URL.

---

### Invalid URL Response

```json
{
  "error": "invalid url"
}
```

---

## 📊 Example Workflow

### Step 1

Send a POST request:

```text
POST /api/shorturl
```

Body:

```text
url=https://www.freecodecamp.org
```

Response:

```json
{
  "original_url": "https://www.freecodecamp.org",
  "short_url": 1
}
```

### Step 2

Visit:

```text
https://url-shortener-microservice-dewr.onrender.com/api/shorturl/1
```

Result:

```text
Redirects to https://www.freecodecamp.org
```

---

## ▶️ How to Run Locally

Install dependencies:

```bash
npm install
```

Start server:

```bash
npm start
```

or

```bash
npm run dev
```

---

## 📚 What I Learned

* Building REST APIs with Express.js
* Handling GET and POST requests
* URL validation using Node.js
* Route parameters and redirection
* Working with middleware
* Deploying Node.js applications on Render

---

## 🏆 Certification Context

This project is part of the **freeCodeCamp Backend Development and APIs Certification**.

It is one of the required backend projects in the certification path.

---

## 👩‍💻 Author

**Niyati Patel**

Learning MERN Stack Development 🚀

---

## 📌 Status

✔ Project Completed
✔ Backend API Only
✔ Deployed on Render
✔ GitHub Ready
✔ freeCodeCamp Ready
