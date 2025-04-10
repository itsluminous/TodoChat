# TodoChat

Minimal web UI for Gemini Pro Chat, hidden behind a Todo app to avoid censorship.

Live demo: [Todo Chat](https://todo-list-seven-teal.vercel.app/)

![Demo](https://github.com/user-attachments/assets/c8864350-b3a5-4a80-a464-d5d8a10a60d6)

## Deploy

### Deploy With Vercel(Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itsluminous/TodoChat&env=GEMINI_API_KEY&envDescription=Google%20API%20Key%20for%20GeminiProChat&envLink=https://makersuite.google.com/app/apikey&project-name=gemini-pro-chat&repository-name=gemini-pro-chat&demo-title=Gemini%20Pro%20Chat&demo-description=Minimal%20web%20UI%20for%20Gemini%20Pro.&demo-url=https%3A%2F%2Fgeminiprochat.com&demo-image=https%3A%2F%2Fgeminiprochat.com%2Ficon.svg&env=TODO_SECRET&envDescription=%20AND%20Your%20secret%20Todo%20Item%20to%20switch%20to%20chat)

Just click the button above and follow the instructions to deploy your own copy of the app.


### Deploy on Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/v9QL5u?referralCode=tSzmIe)

Just click the button above and follow the instructions to deploy on Railway.

### Deploy on Zeabur

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/1103PJ)

Just click the button above and follow the instructions to deploy on Zeabur.

### Deploy With Docker

To deploy with Docker, you can use the following command:

```bash
docker run --name todochat \
--restart always \
-p 3000:3000 \
-itd \
-e GEMINI_API_KEY=your_api_key_here \
-e TODO_SECRET=your_todo_secret_here \
itsluminous/todochat:latest
```
Please make sure to replace `your_api_key_here` with your own GEMINI API key.

This will start the **todochat** service, accessible at `http://localhost:3000`. 

## Environment Variables

You can control the website through environment variables.

| Name | Description | Required |
| --- | --- | --- |
| `GEMINI_API_KEY` | Your API Key for GEMINI. You can get it from [here](https://makersuite.google.com/app/apikey).| **✔** |
| `TODO_SECRET` | Your secret todo item to switch from todo to chat.| **✔** |
| `API_BASE_URL` | Custom base url for GEMINI API. Click [here](https://github.com/itsluminous/TodoChat?tab=readme-ov-file#solution-for-user-location-is-not-supported-for-the-api-use) to see when to use this. | ❌ |
| `HEAD_SCRIPTS` | Inject analytics or other scripts before `</head>` of the page | ❌ |
| `PUBLIC_SECRET_KEY` | Secret string for the project. Use for generating signatures for API calls | ❌ |
| `SITE_PASSWORD` | Set password for site, support multiple password separated by comma. If not set, site will be public | ❌ |

## Running Locally

### Pre environment
1. **Node**: Check that both your development environment and deployment environment are using `Node v18` or later. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple `node` versions locally.

   ```bash
    node -v
   ```

2. **PNPM**: We recommend using [pnpm](https://pnpm.io/) to manage dependencies. If you have never installed pnpm, you can install it with the following command:

   ```bash
    npm i -g pnpm
   ```

3. **GEMINI_API_KEY**: Before running this application, you need to obtain the API key from Google. You can register the API key at [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey).

### Getting Started

1. Install dependencies

   ```bash
    pnpm install
   ```

2. Copy the `.env.example` file, then rename it to `.env`, and 
- add your [`GEMINI_API_KEY`](https://makersuite.google.com/app/apikey) to the `.env` file. ``GEMINI_API_KEY=AIzaSy...``
- add your `TODO_SECRET` to the `.env` file. ``TODO_SECRET=avacadoes``

3. Run the application, the local project runs on `http://localhost:3000/`.

   ```bash
    pnpm run dev
   ```

## Acknowledgements

This project is inspired by and based on the following open-source project:

- [ChatGPT-Demo](https://github.com/anse-app/chatgpt-demo) - For the foundational codebase and features.
