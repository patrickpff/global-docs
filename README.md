# global-docs

A library for validating and formatting country-specific documents in international applications.

`global-docs` is designed to provide a **standardized, extensible and reliable** way to handle document validation and masking rules that vary from country to country, while exposing a consistent API to consumers.

The project is modular by design: each country (and each document within that country) lives in its own isolated module, making it easy to maintain, test and extend.

---

## ✨ Features

* ✅ Validation and formatting (masking)
* 🌍 Country-specific document rules
* 🧩 Modular and extensible architecture
* 🧪 Fully unit-tested
* 📦 Tree-shakable and framework-agnostic
* 🛡️ Strict separation of concerns (validate ≠ mask)

---

## 📦 Supported Countries

Currently, `global-docs` focuses on **Brazilian documents**, with the architecture ready to support additional countries in the future.

---

## 🌍 Country Packages

`global-docs` acts as a **core specification and shared foundation**. Country-specific rules live in **separate companion packages**, allowing each country to evolve independently while following the same design principles.

Currently available country packages:

* **global-docs-br** — Brazilian documents (CPF, CNPJ, IE, professional registrations, etc.)

Planned / upcoming:

* **global-docs-us** — United States documents
* **global-docs-fr** — France documents
* **global-docs-eu** — European Union documents (where applicable)

Each country package provides its own documentation, validation rules, masks and test suites.

---

## 📂 Project Structure (Simplified)

```text
global-docs/
├─ src/
│  ├─ index.ts
│  ├─ mask.ts
│  ├─ registry.ts
│  ├─ types.ts
│  └─ validate.ts
├─ package.json
├─ README.md
└─ tsconfig.json
```

The test structure mirrors the source structure to ensure clarity and maintainability.

---

## 🧪 Testing Philosophy

* Each document has its own test suite
* IE tests are split **per state**
* Validation and masking are tested independently
* No real or sensitive personal data is used
* Valid test data is generated via helper functions

---

## 🧠 Design Principles

* **Single Responsibility**: validation and formatting are separate concerns
* **Explicitness**: state-specific rules are never abstracted away incorrectly
* **Correctness over convenience**
* **Documentation-driven development** (official sources first)

---

## 🚀 Roadmap

* Add more countries
* Add more Brazilian complementary documents
* Improve error reporting
* Optional strict validation modes

---

## 📄 License

MIT
