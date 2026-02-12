# Day 8 — React Routing & SPA Architecture

---

## 🎥 Video Lectures

- Morning :  https://www.youtube.com/watch?v=MCmBnuHsHcY
- Afternoon : https://www.youtube.com/watch?v=i1d6OelK64g

---

## 🧠 Work Summary

Day 8 focused on transitioning from component-level thinking to full application-level architecture using **React Router**.

Students moved from building isolated components to structuring a complete **Single Page Application (SPA)** with professional routing patterns. The session covered why routing is necessary, how client-side routing differs from traditional multi-page websites, and how URL-driven architecture controls application flow.

The class implemented:

- Installation and setup of `react-router-dom`
- `BrowserRouter`, `Routes`, and `Route`
- Static routes (Home, Vehicles, Add Vehicle, Profile)
- Navigation using `Link`
- Active navigation styling using `NavLink`
- Dynamic routing using URL parameters (`/vehicle/:id`)
- Data rendering based on `useParams()`
- URL-based vs props-based data passing
- 404 fallback route using wildcard `*`
- Folder structure refactoring for scalable app design
- Centralized routing configuration

By the end of the session, students built a structured Vehicle Management SPA that demonstrated professional routing flow and URL-driven rendering.

---

## 🔗 Reference Links

- React Router Documentation:  
  https://reactrouter.com/en/main

- Browser History API (Conceptual Reference):  
  https://developer.mozilla.org/en-US/docs/Web/API/History_API

- React Documentation (Core Concepts):  
  https://react.dev/

---

## 🎯 Learnings & Outcomes

By the end of Day 8, students understood how routing controls the flow of a React application. They learned that in a Single Page Application, the **URL drives what component loads and what data renders**. Students implemented static routes, dynamic routes using URL parameters, active navigation styling, and fallback 404 handling. They refactored their project into a clean, scalable folder structure and centralized route configuration. Most importantly, students shifted from building components to architecting full application flow.

---

## 🚧 Blockers & Risks

Common challenges students may face:

- Using `<a>` tags instead of `<Link>` (causing full page reload)
- Forgetting to wrap the app in `<BrowserRouter>`
- Misunderstanding how `useParams()` returns strings
- Not handling invalid IDs in dynamic routes
- Placing wildcard (`*`) route incorrectly
- Confusing route-level 404 with data-level “not found”
- Poor folder structure mixing pages and reusable components
- Not understanding that URL is application state

---

## 🛠 Skills Used

- React Router (`BrowserRouter`, `Routes`, `Route`)
- Navigation with `Link` and `NavLink`
- Active route styling
- Dynamic routing (`/vehicle/:id`)
- `useParams()` hook
- Conditional rendering based on URL
- Fallback route handling (`*`)
- Folder structure organization
- Centralized route configuration
- SPA architecture thinking
- URL-driven data rendering

---

# 📚 Assignments

---

## ✅ Normal Assignment — Mini Vehicle Portal

### Problem Statement

Build a small Vehicle Management SPA using React Router.

Your application must include:

- Static routes (Home, Vehicles, Add Vehicle, Profile)
- Dynamic route (`/vehicle/:id`)
- Navigation using `NavLink`
- Active link styling
- Data rendering using `useParams()`
- A 404 fallback route
- Clean folder structure (`pages/`, `components/`, `routes/`)

The focus is on correct routing flow and URL-driven data rendering.

---

## 🔥 Hard Assignment — Vehicle Management Dashboard

### Problem Statement

Build a structured, scalable Vehicle Dashboard SPA that demonstrates advanced routing patterns.

Your application must include:

- Centralized route configuration
- Data stored separately (e.g., `data/vehicles.js`)
- Dynamic routes:
  - `/vehicle/:id`
  - `/vehicle/:id/edit`
- Proper handling of invalid IDs
- Proper 404 handling
- Active navigation behavior across nested paths
- Clean and professional folder structure

Additionally, include a short README explaining:

- What happens when the URL changes
- Why URL-based routing is powerful
- Difference between props-based and param-based data passing
- Why 404 handling is important

This assignment evaluates architectural thinking, scalability, and routing maturity.

---

## 📤 Assignment Submission Guidelines (Day 8)

Please follow the steps below carefully to submit your assignment.

### 🔹 Step 1: Fork the Repository
- Go to the main course repository.
- Click **Fork** (top-right corner).
- This will create your own copy of the repository.

### 🔹 Step 2: Clone Your Fork
```bash
git clone <your-forked-repo-url>
cd <repo-folder>
```
### 🔹 Step 3: Create and Switch to day-8 Branch
```bash
git checkout day-8
```
If the branch does not exist locally:
```bash
git fetch origin
git checkout -b day-8 origin/day-8
```
### 🔹 Step 4: Complete Your Assignment
- Implement the required features.
- Maintain proper folder structure.
- Ensure the app runs without errors.

### 🔹 Step 5: Commit Your Changes
```bash
git add .
git commit -m "Day 8 Assignment Submission - <Your Name>"
```
### 🔹 Step 6: Push to Your Fork
```bash
git push origin day-8
```
### 🔹 Step 7: Create a Pull Request (PR)
- Go to your forked repository on GitHub.
- Click Compare & Pull Request.

Make sure:

- Base repository = Original Course Repo
- Base branch = day-8
- Compare branch = day-8 (from your fork)
- Click Create Pull Request.

### ✅ Final Checklist Before Submitting
- App runs without errors
- Routes work correctly
- No <a> tags used for internal navigation
- 404 route works
- Folder structure is clean
- Proper commit message added
- Once submitted, your PR will be reviewed.

## 🔥 Key Takeaway of Day 8

> Routing controls app flow.  
> URL drives what data loads.  
> A professional SPA must handle navigation, dynamic routes, and unknown paths cleanly.

---
