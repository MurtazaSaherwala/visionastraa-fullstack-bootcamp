# Day 7 — React State Architecture, Effects & Data Fetching

## 🎥 Video Lectures

- Morning :  https://www.youtube.com/watch?v=kPT4NXvpqF4
- Afternoon : https://www.youtube.com/watch?v=JJgOBpj_xt4


## 🧠 Work Summary

Day 7 focused on strengthening students' understanding of React’s core architecture: **state-driven UI, re-render cycles, side effects, and real-world data handling**.

The session transitioned students from basic state updates to building structured, production-style React components. Through hands-on exercises, students:

- Built a **Battery Charging Simulator** to deeply understand how state updates trigger re-renders.
- Implemented **conditional styling and rendering** to make UI dynamically respond to state.
- Managed **multiple state variables** with clean separation and minimal design.
- Learned the purpose and behavior of **useEffect**, including execution timing and dependency control.
- Implemented **data fetching on component mount** using `useEffect + async/await`.
- Designed and handled **loading and error states** in a professional and scalable way.
- Reinforced the architectural mental model:  
  > React = UI as a function of state

The day emphasized thinking like a developer — not manipulating the DOM, but managing state intentionally and letting React handle the UI layer.

---

## 📚 Reference Links

- React `useState` Documentation  
  https://react.dev/reference/react/useState

- React `useEffect` Documentation  
  https://react.dev/reference/react/useEffect

- Conditional Rendering in React  
  https://react.dev/learn/conditional-rendering

- Lists & Keys in React  
  https://react.dev/learn/rendering-lists

- Fetch API (MDN)  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

- Async/Await (MDN)  
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

---

## 🎯 Learnings & Outcomes

By the end of Day 7, students were able to:

- Explain what triggers a React re-render.
- Implement and manage multiple state variables cleanly.
- Use `useEffect` correctly with dependency arrays.
- Avoid common infinite loop mistakes.
- Fetch external data using `useEffect` on component mount.
- Handle loading and error states professionally.
- Architect UI using the pattern:
- Data → State → UI

Students now understand that React applications are built around **state transitions**, not manual UI manipulation. They can reason about component execution flow, effect timing, and rendering behavior with clarity.

---

## ⚠️ Blockers & Risks

Common challenges students may encounter:

- Confusing normal variables with state variables.
- Forgetting dependency arrays or misusing them.
- Creating infinite loops by updating dependencies inside `useEffect`.
- Over-storing derived values in state.
- Not handling loading or error states properly.
- Mixing rendering logic with side effects.
- Attempting DOM manipulation instead of relying on state-driven updates.

Understanding execution order (Render → Commit → Effect) may take repetition and practice.

---

## 🛠 Skills Used

- React functional components
- `useState` hook
- `useEffect` hook
- Dependency array reasoning
- Conditional rendering (`&&`, ternary operators)
- Dynamic styling & class assignment
- Multiple state management
- Async/await with Fetch API
- Loading & error state architecture
- Re-render lifecycle understanding
- Debugging infinite loop patterns
- Clean state design principles

---

### Core Mental Model Reinforced

> React = UI as a function of state  
> When state changes, React re-renders.  
> Effects run after render.  
> The dependency array controls execution.

This foundation prepares students for more advanced topics such as controlled inputs, forms, component composition, and larger state architecture.
