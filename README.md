# Selenium WebDriver Automation Project

Automated UI testing scripts built using Selenium WebDriver, JavaScript, and Chai Assertion Library.
This repository contains multiple test scripts demonstrating browser automation, navigation, search functionality, and assertion handling on:

👉 https://demo.evershop.io

## 🌐 Live Tested On

Google Chrome (Latest)

ChromeDriver

Node.js 

## 📂 Project Structure
.
├── test.js

├── chai.js

├── liabrary.js   (search automation script)

├── package.json

└── README.md

## 🚀 Features

✔ Automated browser interactions

✔ Search product functionality

✔ Page title validation

✔ Hover interactions using Selenium Actions API

✔ Assertions with Chai

✔ Error handling and test reporting

✔ Clean and reusable code

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```
git clone <repo-url>

cd <project-folder>
```
### 2️⃣ Install Dependencies
npm install selenium-webdriver chai

### 3️⃣ Run Any Test Script
node test.js

node chai.js

node liabrary.js

## 🧪 Test Script Details
### 🔹 test.js – Navigation & Hover Action Script

What it does:

Opens homepage

Hovers on Shop menu

Clicks Men category

Demonstrates Selenium Actions API

📌 Useful for learning mouse hover and menu navigation.

### 🔹 chai.js – Assertion-Based Navigation Test

What it does:

Opens homepage

Validates page title using Chai

Navigates to Men using hover

📌 Showcases use of expect().to.eql() for verification.

### 🔹 liabrary.js – Product Search Automation

What it does:

Searches for "Nike air"

Fetches product results

Compares each product with expected:
"Nike air presto by you"

Throws exception if expected product not found

📌 Useful for search testing, result validation, and assertions.

## 🛠 Technologies Used

Node.js: Script execution

Selenium-WebDriver:	Browser automation

ChromeDriver:	Control Google Chrome

Chai:	Assertion library

JavaScript:	Main programming language



