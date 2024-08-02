# Simple React web site deployment to AWS Amplify - React + Vite

AWS Tutorial link
https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Step 1. Create a new React application
	npm create vite@latest notesapp -- --template react
	cd notesapp
	npm install
	npm run dev

	select the link to open the web page

# Step 2. Initialise the GitHub repo

create a github repo in your remote account

on your local laptop cd to the directory

	git init
	git add .
	git commit -m "first commit"
	git remote add origin git@github.com:<your-username>/notesapp.git 
	git branch -M master

	git push -u origin master


# Step 3. Install Amplify

	npm create amplify@latest -y

	git add .
	git commit -m 'installing amplify'
	git push origin master


# Step 4. Deploy your app with AWS Amplify

Sign in to the AWS Management console in a new browser window, and open the AWS Amplify console at https://console.aws.amazon.com/amplify/apps.

Choose Create new app.
On the Start building with Amplify page, for Deploy your app, select GitHub, and select Next.
When prompted, authenticate with GitHub. You will be automatically redirected back to the Amplify console. Choose the repository and main branch you created earlier. Then, select Next.
Leave the default build settings and select Next.
Review the inputs selected, and choose Save and deploy
Once the build completes, select the Visit deployed URL button to see your web app up and running live


# Step 5. Automatically deploy your code changes


On your local machine, navigate to the notesapp/amplify/src/App.jsx file, and update it with the following code. Then, save the file.


	import reactLogo from "./assets/react.svg";
	import "./App.css";

	function App() {
	  return (
	    <div className="App">
	      <header className="App-header">
		<img src={reactLogo} className="logo react" alt="React logo" />

		<h1>Hello from Amplify</h1>
	      </header>
	    </div>
	  );
	}

	export default App;


Then push the change

	git add .
	git commit -m 'changes for amplify'
	git push origin main


AWS Amplify will now build your source code and deploy your app