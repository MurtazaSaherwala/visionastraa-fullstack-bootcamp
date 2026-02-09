# Day 5 — Building a Data-Driven Dashboard with Vanilla JavaScript

## Work Summary

Day 5 focused on transitioning students from static and partially interactive pages into **fully state-driven, dashboard-style web applications using Vanilla JavaScript**.

Students built a complete single-page dashboard application (“MyGarage”) by incrementally combining layout architecture, responsive design, data management, navigation logic, asynchronous behavior, and user experience polish — without using any frameworks.

The day emphasized **thinking like a developer**, not just writing code. Instead of jumping directly into features, students planned UI structure, separated responsibilities across HTML, CSS, and JavaScript, and followed a strict **state → render → UI** flow. Real-world constraints such as async data loading, empty states, and responsive usage were intentionally introduced to mirror production applications.

By the end of the day, students had built a working dashboard that supports navigation, async data loading, adding and removing vehicles, dynamic statistics, responsive layouts, and professional UX feedback — entirely in Vanilla JS.

---

## Reference Links

- MDN — DOM Manipulation  
  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

- MDN — Flexbox  
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout

- MDN — CSS Grid  
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

- MDN — JavaScript Promises & Async/Await  
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

- MDN — Event Handling  
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

- Web.dev — Responsive Design Basics  
  https://web.dev/responsive-web-design-basics/

---

## Learnings & Outcomes

By the end of Day 5, students were able to design and build a **realistic dashboard-style web application** using only core web technologies. They learned how to plan UI before coding, create reusable layout structures, manage application state using JavaScript objects and arrays, and render UI dynamically based on that state.

Students understood how single-page navigation works without frameworks, how asynchronous data affects UI flow, and why loading and empty states are essential for user trust. They also practiced professional UX improvements such as hover feedback, active states, and button interactions. Most importantly, students developed confidence in building non-trivial applications without relying on libraries, gaining clarity on how frameworks abstract these same concepts.

---

## Blockers & Risks

- Confusing UI state with data state (manually editing DOM instead of updating data)
- Forgetting to re-render UI after state changes
- Misunderstanding async flow and assuming data is instantly available
- Breaking layouts by relying on fixed widths/heights instead of flexible systems
- Navigation logic falling out of sync with visual active states
- Ignoring empty or loading states, leading to broken-feeling UIs
- Over-styling instead of focusing on clarity and feedback
- Treating Vanilla JS as “less professional” compared to frameworks

---

## Skills Used

- HTML layout architecture (semantic structure, view containers)
- CSS Flexbox and Grid for scalable layouts
- Responsive design with media queries
- JavaScript state management using arrays and objects
- DOM manipulation and rendering patterns
- Event handling (clicks, form submissions)
- Single-page navigation logic (view switching)
- Asynchronous programming with Promises and async/await
- Loading and empty state handling
- UX polish (hover states, active states, button feedback)
- Debugging through logical flow rather than trial-and-error

---

> **Key Takeaway:**  
> Students didn’t just build a dashboard — they learned how real web applications are structured, updated, and maintained using first principles. Frameworks were intentionally avoided so that the underlying mechanics became clear and transferable.
