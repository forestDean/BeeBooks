# Set Up Workflow Actions and YAML

In this activity, the instructor will demonstrate how to create and configure a `YAML` file with `GitHub Actions` so that your CI/CD pipeline will trigger and run your unit test before deploying the `lor-cicd-pipeline` project via Netlify.

## Instructions
1. In the **root of your project**, create a `.github` directory.
   * `mkdir .github`
2. Inside of `.github`, create a directory called `workflows`.
   * `mkdir ./.github/workflows`
3. Inside of `.github/workflows`, create a file called `push.yml`.
   * `touch ./.github/workflows/push.yml`
4. Inside of `workflows/push.yml`, copy the following code:
  
```yml
# push.yml

#  Name of workflow
name: Push workflow

# When workflow is triggered
on:
  push:
    branches:
      - dev
      - main

# Jobs to carry out
jobs:
  deploy:
    # Operating system to run job on
    runs-on: ubuntu-latest
    # Steps in job
    steps:
      # Get code from repo
      - name: Checkout code
        uses: actions/checkout@v1
      # Install NodeJS
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      # Run npm install and build on our code
      - run: npm install
      - run: npm run build --if-present
      # Run Test
      - name: Run tests
        run: npm run test
      # Deploy to Netlify using our production secrets
      - name: Deploy to netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --dir=build --prod
          secrets: '["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"]'
```

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
