# Tax Calculator App

**GitHub repo name:** `tax-calculator-app`

IBM Final Project – Tax Calculator: Plan, containerize, deploy on IBM Cloud, and add DevOps pipelines.

## Repo structure

- `index.html`, `script.js`, `style.css`, `taxCalculator.js`, `favicon.ico` – Web app
- `Dockerfile` – Nginx image with 5 files copied
- `spec/` – Jasmine unit tests (7 specs)
- `tekton/tasks.yaml` – Tekton tasks (npm-install, jasmine-tests, docker-build)
- `tekton/pipeline.yaml` – Pipeline: npminstall → tests → build
- `tekton/run.yaml` – PipelineRun (params, workspaces)

## Commands

```bash
npm install
npx jasmine                    # 7 specs, 0 failures
docker build -t tax-calculator .
docker run -d -p 8080:80 --name tax-calculator tax-calculator
# Open http://localhost:8080
```

## Submission files

Save terminal outputs into:

- `01-jasmine-tests-passing.txt` – output of `npx jasmine`
- `03-docker-build-output.txt` – output of `docker build`
- `04-docker-image.txt` – output of `docker ps` (app on 8080)
- `05-docker-icr-push.txt` – push to IBM Cloud Registry
- `06-deployed-on-cloud.txt` – deploy on IBM Cloud
- `10-final-output.png` – Screenshot of deployed app (from pipeline)

## GitHub URLs for assignment

After pushing this repo to GitHub, use:

- **Q7:** `https://github.com/YOUR_USERNAME/tax-calculator-app/blob/main/tekton/tasks.yaml`
- **Q8:** `https://github.com/YOUR_USERNAME/tax-calculator-app/blob/main/tekton/pipeline.yaml`
- **Q9:** `https://github.com/YOUR_USERNAME/tax-calculator-app/blob/main/tekton/run.yaml`

Replace `YOUR_USERNAME` with your GitHub username.
