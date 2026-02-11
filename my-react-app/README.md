# Day 6 — React Foundations: Components, Props & Data-Driven UI

## 🧠 Work Summary

Day 6 marked the transition from vanilla JavaScript DOM manipulation to structured, component-driven UI development using React.

The day began with a conceptual shift: understanding why React exists and the limitations of manual DOM updates in traditional JavaScript applications. Students explored how scaling UI with vanilla JS leads to repetitive logic, messy DOM handling, and state synchronization issues.

From there, the focus moved to the **React mental model**:
- Thinking in components instead of pages
- Understanding component trees
- Recognizing one-way data flow (parent → child)

Students then set up a modern React development environment using **Vite**, learning how tooling connects `index.html`, `main.jsx`, and `App.jsx`, and how React mounts into the DOM.

Core React concepts were introduced progressively:

- JSX fundamentals and syntax rules
- Building a first reusable component (`VehicleCard`)
- Passing data via props
- Removing hard-coded values
- Rendering multiple components dynamically using arrays
- Understanding why `key` exists in list rendering
- Structuring a React project with proper folder organization
- Keeping `App.jsx` clean and focused on composition

The day concluded with a comparison between vanilla DOM manipulation and React’s declarative rendering model, reinforcing the shift from manual UI updates to data-driven rendering.

---

## 🔗 Reference Links

- React Official Documentation  
  https://react.dev/

- Vite Documentation  
  https://vitejs.dev/

- JSX In-Depth  
  https://react.dev/learn/writing-markup-with-jsx

- Components & Props  
  https://react.dev/learn/passing-props-to-a-component

- Rendering Lists  
  https://react.dev/learn/rendering-lists

- React Keys Explanation  
  https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

- JSONPlaceholder (Dummy API used in activity)  
  https://jsonplaceholder.typicode.com/

---

## 🎯 Learnings & Outcomes

By the end of Day 6, students were able to:

- Explain why React was created and how it differs from manual DOM manipulation.
- Build reusable functional components using JSX.
- Pass data from parent to child components using props.
- Render dynamic UI from arrays using `map()`.
- Understand and correctly apply the `key` prop.
- Organize a React project with clean separation between pages and components.
- Structure a scalable React application instead of placing all logic inside `App.jsx`.
- Connect a React component to a dummy JSON API and render external data.

Students moved from static UI building to structured, data-driven React thinking — a foundational industry skill.

---

## ⚠️ Blockers & Risks

Common challenges observed or expected:

- Confusion between JavaScript and JSX boundaries (`{}` usage).
- Forgetting that components must return a single parent element.
- Attempting to modify props inside a child component.
- Omitting the `key` prop during list rendering.
- Overloading `App.jsx` with logic instead of separating pages and components.
- Fear or misunderstanding around project folder structure.
- Confusion between DOM manipulation (vanilla JS mindset) and React’s declarative rendering model.
- Initial discomfort with async data fetching and rendering lists from API responses.

If not corrected early, messy structure and improper data flow can lead to long-term scalability issues.

---

## 🛠 Skills Used

- React Functional Components
- JSX Syntax & Rules
- Props & One-Way Data Flow
- Array `map()` for Dynamic Rendering
- Understanding and Applying `key` in Lists
- Component Composition
- Basic Project Folder Organization
- Vite Setup & Development Server
- Declarative UI Thinking
- Comparing Imperative vs Declarative Approaches
- Fetching Data from a Dummy JSON API
- Using `useState` and `useEffect` for Data Handling

---

Day 6 established the foundational mental model required for scalable frontend development:

> React UI comes from data, not manual DOM manipulation.
