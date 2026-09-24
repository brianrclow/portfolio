# Portfolio

[![Live Site](https://img.shields.io/badge/live-brianrclow.com-5d8a5d)](https://brianrclow.com)
[![Deploy](https://github.com/brianrclow/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/brianrclow/portfolio/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

Welcome to my portfolio! This project showcases some of my work, skills, and experiences as a software engineer.
Check it out --> [brianrclow.com](https://www.brianrclow.com)

## Features

* **Home** — quick intro and what I'm currently building
* **About** — background and areas of focus
* **Work** — a showcase of projects I've led or contributed to
* **Contact** — email, LinkedIn, and GitHub links
* Single-page layout with smooth-scroll navigation and a responsive mobile menu

## Tech Stack

* Frontend: Angular 22, Tailwind CSS 4
* Icons: Font Awesome
* Containerized: Docker (nginx)
* Hosted: Fly.io
* CI/CD: GitHub Actions (manual deploy)

## Getting Started

### Prerequisites
* Node.js 24.15+
* Angular CLI installed globally (`npm install -g @angular/cli`)
* [flyctl](https://fly.io/docs/hands-on/install-flyctl/) — only needed if you'll deploy (see [Deployment](#deployment))

### Install and Run

1. Clone the repository:
```sh
git clone https://github.com/brianrclow/portfolio.git
cd portfolio
```

2. Install the dependencies:
```sh
npm install
```

3. Run the development server:
```sh
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Docker

Build and run locally with Docker:

```sh
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

Navigate to `http://localhost:8080/`.

## Deployment

Deployments are triggered manually via GitHub Actions.

1. Push your changes to `main`
2. Go to **Actions → Deploy to Fly.io → Run workflow**

The workflow builds the Docker image on Fly.io's remote builder and deploys it. It requires `FLY_API_TOKEN` to be set as a GitHub Actions secret; `flyctl` itself only needs to be installed locally if you want to deploy from your machine instead (see [Prerequisites](#prerequisites)).

## Contact

Feel free to reach out if you have any questions!

* Email: brianrclow@gmail.com
* LinkedIn: [@brianrclow](https://www.linkedin.com/in/brianrclow/)

## License

MIT — see [LICENSE](LICENSE) for details.
