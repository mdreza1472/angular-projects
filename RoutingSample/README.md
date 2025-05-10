Certainly! Here’s a **clean and professional `README.md`** tailored for your Angular project that includes:

* A **template-driven form**
* A **reactive form**
* A **custom directive (`appAlphabets`)** to restrict input to alphabets
* **Routing** to different components
* An **employee list component**
* **Edit form using route parameters**

---

```markdown
# Angular Forms with Custom Directive

This Angular project demonstrates the use of both **Template-driven Forms** and **Reactive Forms** along with a custom directive to restrict input to alphabets. It includes form validation, routing, employee listing, and form editing based on URL parameters.

---

## ✨ Features

- ✅ Template-driven form
- ✅ Reactive form using `FormGroup` and `FormControl`
- ✅ Custom `appAlphabets` directive to allow only alphabet characters
- ✅ Employee list component
- ✅ Form editing using route parameter
- ✅ Angular routing setup

---

## 🧱 Project Structure

```

src/
├── app/
│   ├── components/
│   │   ├── template-driven/
│   │   │   └── template-driven.component.ts/html
│   │   ├── reactive-form/
│   │   │   └── reactive-form.component.ts/html
│   │   ├── list-employees/
│   │   │   └── list-employees.component.ts/html
│   ├── directives/
│   │   └── alphabets.directive.ts
│   ├── app-routing.module.ts
│   └── app.module.ts

````

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

```bash
npm install
````

### Run the Application

```bash
ng serve
```

Open your browser at [http://localhost:4200](http://localhost:4200)

---

## 🌐 Application Routes

| Route                       | Component                 | Description                     |
| --------------------------- | ------------------------- | ------------------------------- |
| `/template-form`            | `TemplateDrivenComponent` | Template-driven form            |
| `/edit-template-form/:name` | `TemplateDrivenComponent` | Edit form with pre-filled name  |
| `/reactive-form`            | `ReactiveFormComponent`   | Reactive form using `FormGroup` |
| `/list-employees`           | `ListEmployeesComponent`  | Displays a list of employees    |

---

## 🧪 Using the `appAlphabets` Directive

This directive restricts user input to only alphabets (A-Z, a-z).

### Example (in template-driven form):

```html
<input name="name" [(ngModel)]="model.name" appAlphabets>
```

### Example (in reactive form):

```html
<input formControlName="name" appAlphabets>
```

---

## 🧼 Form Validation

* Required fields
* Alphabet-only restriction using custom directive
* Error messages can be displayed using Angular’s form validation states (`touched`, `dirty`, etc.)

---

## 🛠 Build

```bash
ng build
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

Mohammed Reza