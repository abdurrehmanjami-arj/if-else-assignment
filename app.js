// Question No 1:Ask the user for their age. If the age is 18 or more, show an alert: "You are an
// adult.", else show: "You are a minor."

// var age = parseInt(prompt("Enter You Age"));
// if (age >= 18) {
//   alert("You are an Adult");
// } else {
//   alert("You are a Minor");
// }

// Question No 2: Ask the user to enter a number. If it's positive, log: "Positive number"; else log:
// "Not positive".

// var number = parseInt(prompt("Enter a Number"));
// if (number >= 0) {
//   console.log("Positive Number");
// } else {
//   console.log("Not Positive");
// }

// Question No 3: Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd
// number".

// var number = parseInt(prompt("Enter a Number"));
// if (number % 2 === 0) {
//   alert("Even Number");
// } else {
//   alert("Odd Number");
// }

// Question No 4: Ask for a username. If the username is "admin", display "Welcome, admin!"; else
// display "Access denied."

// var username = prompt("Enter your Username").toLowerCase();
// if (username === "admin") {
//   console.log("Welcome, Admin");
// } else {
//   console.log("Access Denied");
// }

// Question No 5: Ask for two numbers. If they are equal, log "Both numbers are the same";
// otherwise, log "The numbers are different".

// var firstNumber = parseInt(prompt("Enter Your First Number"));
// var secondNumber = parseInt(prompt("Enter your Second Number"));
// if (firstNumber === secondNumber) {
//   console.log("Both Numbers are the Same");
// } else {
//   console.log("The Numbers are Different");
// }

// Question No 6: Ask the user to enter two numbers. Check which one is larger and alert: "First is
// larger" or "Second is larger".

// var firstNumber = parseInt(prompt("Enter your First Number"));
// var secondNumber = parseInt(prompt("Enter your Second Number"));
// if (firstNumber >= secondNumber) {
//   alert("First is Larger");
// } else {
//   alert("Second is lager");
// }

// Question No 7: Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within
// range".

// var number = parseInt(prompt("Enter your Number"));
// if (number > 100) {
//   alert("Too Big");
// } else {
//   alert("Within Range");
// }

// Question No 8: Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."

// var score = parseInt(prompt("Enter your Score"));
// if (score >= 50) {
//   console.log("You Passed!");
// } else {
//   console.log("You Failed");
// }

// Question No 9: Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's
// not hot."

// var temprature = parseInt(prompt("Enter Temprature"));
// if (temprature > 30) {
//   alert("It's Hot!");
// } else {
//   alert("It's not Hot");
// }

// Question No 10: Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".

// var number = parseInt(prompt("Enter a Number"));
// if (number === 0) {
//   alert("Zero");
// } else {
//   alert("Not Zero");
// }

//Question No 11: Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",
// else log "You are not a senior."

// var age = parseInt(prompt("Enter your Age"));
// if (age >= 60) {
//   console.log("You are a Senior Citizen");
// } else {
//   console.log("You are not a Senior");
// }

// Question No 12: Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert
// "You're not Alice!"

// var username = prompt("Enter your Name").toLowerCase();
// if (username === "alice") {
//     alert("Hi! Alice")
// } else {
//     alert("you are not Alice!")
// }

// Question No 13: Ask the user for a password. If it matches "12345", log "Correct password"; else
// log "Wrong password".

// var password = parseInt(prompt("Enter your Password"));
// if (password === 12345) {
//   console.log("Correct Passward");
// } else {
//   console.log("Wrong Password");
// }

// Question No 14: Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!";
// else alert "Good afternoon!"

// var currnetHour = parseInt(prompt("Enter your Current Hour. (0 - 23)"));
// if (currnetHour >= 0 && currnetHour < 12) {
//   alert("Good Morning");
// } else if (currnetHour > 23) {
//   alert("Your Enter Worng Hour");
// } else {
//   alert("Good Afternoon!");
// }

// Question No 15: Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log
// "Not divisible by 5".

// var number = parseInt(prompt("Enter a Number.."));
// if (number % 5 === 0) {
//   console.log("Divisible by 5");
// } else {
//   console.log("Not Divisible by 5");
// }

// Question No 16: Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"

// var userPlay = prompt("Want to Play a Game. (Yes/No)").toLowerCase();
// if (userPlay === "yes") {
//   alert("Let's Play");
// } else {
//   alert("Maybe Next Time");
// }

// Question No 17: Ask the user for a color. If the color is "blue", log "Cool choice!"; else log
// "Interesting color!"

// var color = prompt("Enter your Favirote Color.").toLowerCase();
// if (color === "blue") {
//   console.log("Cool Choice");
// } else {
//   console.log("Interesting Color!");
// }

// Question No 18: Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".

// var weekDay = prompt("Enter the Day").toLowerCase();
// if (weekDay === "sunday") {
//   alert("Weekend!");
// } else {
//   alert("Weekday");
// }

// Question No 19:Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";
// else alert "Sorry, out of stock."

// var fruit = prompt("Enter Fruit Name").toLowerCase();
// if (fruit === "banana" || fruit === "apple") {
//   alert("We have that!");
// } else {
//   alert("Sorry Our of Stock");
// }

// Question No 20: Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert
// "Waiting for input..."

// var palyGame = prompt("Start the Game, write 'Start'").toLowerCase();
// if (palyGame === "start") {
//   alert("Game Started!");
// } else {
//   alert("Waiting for Input....");
// }

// ----------------*****************----------------------*****************---------------------------

// Question No 1: Age-Based Grade Check
// Check a student's marks and display:
// ● "Distinction" if marks ≥ 80
// ● "Pass" if marks ≥ 50 and < 80
// ● "Fail" if marks < 50
// ● "Invalid Marks" if marks are not between 0 and 100

// var marks = parseInt(prompt("Enter Student Marks"));
// if (marks >= 80 && marks <= 100) {
//   console.log("Distinction");
// } else if (marks >= 50 && marks < 80) {
//   console.log("Pass");
// } else if (marks < 0 || marks > 100) {
//   console.log("Invalid Marks");
// } else {
//   console.log("Fail");
// }

// Question No 2. Discount Eligibility Based on Age and Membership
// Given a person's age and membership status, show:
// ● "Senior Premium Discount" if age ≥ 60 and is a premium member
// ● "Senior Discount" if age ≥ 60
// ● "Premium Discount" if a premium member
// ● "No Discount" otherwise

// var age = parseInt(prompt("Enter Your Age"));
// var membership = prompt("Membership Status. (Yes/No)").toLowerCase();
// if (age >= 60 && membership === "yes") {
//   console.log("Senior Premium Discount");
// } else if (age >= 60) {
//   console.log("Senior Discount");
// } else if (membership === "yes") {
//   console.log("Premium Discount");
// } else {
//   console.log("No Discount");
// }

// Question No 3. Login and Email Verification
// ● If user is logged in and email is verified → "Access granted"
// ● If user is logged in but not verified → "Please verify your email"
// ● If not logged in → "Please log in"

// var isLogin = true;
// var isEmailVerified = true;
// if (isLogin && isEmailVerified) {
//   console.log("Access Granted");
// } else if (isLogin && isEmailVerified === false) {
//   console.log("Please Verify your Email");
// } else {
//   console.log("Please Logged in");
// }

//! Question No 4. Contest Eligibility
// Check if a person is eligible to enter a contest:
// ● Must be between ages 18–35
// ● Must be from Pakistan or India
// ● Must not be banned
// Display appropriate messages for age, region, or ban issues.
//! Deepseek sa help li ha.
// var age = parseInt(prompt("Enter Citizen Age"));
// var region = prompt("Enter your Regionn Name").toLowerCase();
// var banStatus = prompt("is User in Ban or not, write (Yes/No).").toLowerCase();
// if (banStatus === "yes") {
//   console.log(`You are banned`);
// } else if (age < 18 || age > 35) {
//   console.log("Age must be between 18-35");
// } else if (region !== "pakistan" && region !== "india") {
//   console.log("Only available for Pakistan/India");
// } else {
//   console.log("You are Allow in Country");
// }

// Question No 5. Subscription Access Check
// Given the subscription plan and login status:
// ● "Welcome Premium User" if plan is "premium" and logged in
// ● "Welcome Free User" if plan is "free" and logged in
// ● "Please log in to continue" if not logged in
// ● "Invalid subscription" otherwise

// var loginStatus = prompt("Login Status type (Yes/No)").toLowerCase();
// var subscriptionStatus = prompt("Enter (Premium/ Free)").toLowerCase();
// if (loginStatus === "no") {
//   console.log("Please Log in to Continue");
// } else if (loginStatus === "yes" && subscriptionStatus === "premium") {
//   console.log("Welcome Premium User");
// } else if (loginStatus === "yes" && subscriptionStatus === "free") {
//   console.log("Welcome Free User");
// } else {
//   console.log("Invalid Subscription");
// }

// Question No 6. Product Purchase Validation
// Check product conditions:
// ● "Buy now with discount" if price > 1000, in stock, and user is a member
// ● "Buy now" if in stock
// ● "Out of stock" if stock === 0
// ● "Invalid product" otherwise

// var productPrice = parseInt(prompt("Enter Product Price"));
// var isStock = prompt(
//   "Is Stock is Available or Not.. type (yes/no)"
// ).toLowerCase();
// var isMember = prompt("User is Member or Not.. type(yes/no)").toLowerCase();

// if (productPrice > 1000 && isStock === "yes" && isMember === "yes") {
//   console.log("Buy now with Discount");
// } else if (isStock === "yes") {
//   console.log("Buy now");
// } else if (isStock === "no") {
//   console.log("Out of Stock");
// } else {
//   console.log("Invalid Product");
// }

// Question No 7. Work Hours Check
// Check based on hoursWorked and isWeekend:

// ● "Overtime" if hours > 40 and not a weekend
// ● "Weekend work" if hours > 0 and is weekend
// ● "Regular hours" if ≤ 40
// ● "No work" if hours === 0

// var hours = parseInt(prompt("Enter your Total Hours Work"));
// var isWeekend = prompt("Is Weekend. type (yes/No)").toLowerCase();
// if (hours > 40 && isWeekend === "no") {
//   console.log("Overtime");
// } else if (hours > 0 && isWeekend === "yes") {
//   console.log("Weekend Work");
// } else if (hours > 0 && hours <= 40) {
//   console.log("Regular Hours");
// } else {
//   console.log("No Work");
// }

// Question No 8. Age and Gender Classification
// Given a user's age and gender:
// ● "Teen Male" if age 13–19 and gender is "male"
// ● "Teen Female" if age 13–19 and gender is "female"
// ● "Adult" if age ≥ 20
// ● "Child" if age < 13

// var age = parseInt(prompt("Enter your Age"));
// var gender = prompt("Enter your Gender").toLowerCase();
// if (age >= 13 && age <= 19 && gender === "male") {
//   console.log("Teen Male");
// } else if (age >= 13 && age <= 19 && gender === "female") {
//   console.log("Teen Female");
// } else if (age >= 20) {
//   console.log("Adult");
// } else {
//   console.log("Child");
// }

// Question No 9. Weather Warning System
// Based on temperature and humidity:
// ● "Heatwave Alert" if temp ≥ 40 and humidity ≥ 60
// ● "Hot and Dry" if temp ≥ 40 and humidity < 60
// ● "Cool Weather" if temp ≤ 20
// ● "Moderate" otherwise

// var temprature = parseInt(prompt("Enter Today Temprature"));
// var humidity = parseInt(prompt("Enter Today Humidity"));
// if (temprature >= 40 && humidity >= 60) {
//   console.log("Heatwave Alert");
// } else if (temprature >= 40 && humidity < 60) {
//   console.log("Hot and Dry");
// } else if (temprature <= 20) {
//   console.log("Cool Weather");
// } else {
//   console.log("Moderate");
// }

// Question no 10. Score Grading System
// Given a score between 0–100:

// ● "Excellent" for 90–100
// ● "Good" for 70–89
// ● "Average" for 50–69
// ● "Poor" for 30–49
// ● "Fail" below 30
// ● "Invalid Score" if out of range

// var score = parseInt(prompt("Enter the Score between 0 - 100"));
// if (score >= 90 && score <= 100) {
//   console.log("Excellent");
// } else if (score >= 70 && score <= 89) {
//   console.log("Good");
// } else if (score >= 50 && score <= 69) {
//   console.log("Average");
// } else if (score >= 30 && score <= 49) {
//   console.log("Poor");
// } else if (score >= 0 && score < 30) {
//   console.log("Fail");
// } else {
//   console.log("Invalid Score");
// }

// Question No 11. Course Access Control
// To access a course:
// ● Must be logged in
// ● Must be enrolled
// ● Must not be banned

// Show: "Access granted", "Enroll in course first", "User is banned", or "Please log in"

// var isLogin = prompt("You Login type. (Yes/No)").toLowerCase();
// var enroll = prompt("You enroll type. (Yes/no)").toLowerCase();
// var banStatus = prompt("is User in Ban or not, write (Yes/No).").toLowerCase();
// if (banStatus === "yes") {
//   console.log(`User is banned`);
// } else if (isLogin === "yes" && enroll === "yes") {
//   console.log("Access Granted");
// } else if (enroll === "no") {
//   console.log("Enroll in Course First");
// } else {
//   console.log("Please login");
// }

// Question No 12. Driving Conditions
// Given a user's speed and license status:
// ● "License suspended" if speed > 120
// ● "Warning" if speed between 100–120
// ● "Normal driving" if speed ≤ 100 and has license
// ● "Driving without license" otherwise

// var carSpeed = parseInt(prompt("Enter Speed Limit"));
// var licenseStatus = prompt("License is Valid or Not,type (Yes/No)");
// if (carSpeed > 120) {
//   console.log("License Suspended");
// } else if (carSpeed > 100 && carSpeed <= 120) {
//   console.log("Warning");
// } else if (carSpeed <= 100 && licenseStatus === "yes") {
//   console.log("Normal Driving");
// } else {
//   console.log("Driving without License");
// }

// Question No 13. Order Processing Status

// For an online order:
// ● "Order on the way" if payment is complete and shipped
// ● "Preparing your order" if payment is complete and not shipped
// ● "Awaiting payment" if payment is pending
// ● "Payment failed" if transaction failed

// var paymentStatus = prompt(
//   "Payment Status done or not, type (yes/no)"
// ).toLowerCase();
// var isShipped = prompt("Package Shiped or not, type (Yes/no)").toLowerCase();
// var isTransaction = prompt(
//   "Transaction Completed or Not. tupe (Yes/No)"
// ).toLowerCase();
// if (isTransaction === "no") {
//   console.log("Payment failed");
// } else if (paymentStatus === "yes" && isShipped === "yes") {
//   console.log("Order on the way");
// } else if (paymentStatus === "yes" && isShipped === "no") {
//   console.log("Preparing your order");
// } else if (paymentStatus === "no") {
//   console.log("Awaiting payment");
// } else {
//   console.log("Invalid input");
// }

// Question No 14. Battery Status Checker
// Given battery level and charging state:
// ● "Fully Charged" if level === 100
// ● "Charging..." if level < 100 and charging
// ● "Low Battery" if level < 20 and not charging
// ● "Battery OK" otherwise

// var batteryLevel = parseInt(prompt("Enter your Mobile Battery Level. (0-100)"));
// var chargingStatus = prompt(
//   "Mobile Connect with Charger or not. type (Yes/No)"
// ).toLowerCase();
// if (batteryLevel === 100) {
//   console.log("Fully Charged");
// } else if (batteryLevel < 100 && chargingStatus === "yes") {
//   console.log("Charging...");
// } else if (batteryLevel < 20 && chargingStatus === "no") {
//   console.log("Low Battery");
// } else {
//   console.log("Battery Ok..");
// }

// Question No 15. Browser and Device Compatibility Check
// Based on user's browser and device:
// ● "Full features enabled" if browser is Chrome and device is Desktop
// ● "Limited mobile features" if browser is Chrome and device is Mobile
// ● "Please switch to Chrome" for all other browsers

// var browser = prompt("Which Browser you are using.").toLowerCase();
// var useDevice = prompt(
//   "Which Device you Used. (Desktop/ mobile)"
// ).toLowerCase();
// if (browser === "chrome" && useDevice === "desktop") {
//   console.log("Full Features Enable");
// } else if (browser === "chrome" && useDevice === "mobile") {
//   console.log("Limited Mobile Features");
// } else {
//   console.log("Please Switch to Chrome Browser");
// }
