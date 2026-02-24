# Portfolio

Welcome to my portfolio! This project showcases some of my work, skills, and experiences as a software engineer.
Check it out --> [brianrclow.com](https://www.brianrclow.com)

## Tech Stack

* Frontend: Angular 18, Tailwind CSS
* Icons: Font Awesome
* Containerized: Docker (nginx)
* Hosted: Fly.io
* CI/CD: GitHub Actions (manual deploy)

## Getting Started

### Prerequisites
* Node.js and npm installed
* Angular CLI installed globally (`npm install -g @angular/cli`)

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

The workflow builds the Docker image on Fly.io's remote builder and deploys it.

### Prerequisites for deployment
* [flyctl](https://fly.io/docs/hands-on/install-flyctl/) installed
* `FLY_API_TOKEN` set as a GitHub Actions secret

## Contact

Feel free to reach out if you have any questions!

* Email: brianrclow@gmail.com
* LinkedIn: [@brianrclow](https://www.linkedin.com/in/brianrclow/)
