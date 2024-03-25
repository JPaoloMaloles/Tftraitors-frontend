[backend repo](https://github.com/JPaoloMaloles/Tftraitors_backend)

Tftraitors is project to create a Teamfight Tactics (tft) datalytics site that compiles a player's worst comps and performances whether it be for good or evil. Riot assets acquired through the use of CommunityDragon Toolbox (CDTB).

Tftraitors is made using a React frontend and Ruby on Rails backend.

<h1> Features</h1>
<ul>
  <li> User authorization and authentication </li>
  <li> Imports up to 20 of a player's most recent matches from any of Riot's 16 servers using asynchronous web requests </li>
  <li> Routes using react-router-dom </li>
  <li> A beautiful display made with javascript and bootstrap</li>
</ul>

<h1> Setup</h1>
These instructions accounts for setting up both the frontend and backend repositories.
<h3>Acquiring and Implementing A Riot API Key</h3>
Use of TFTraitors currently requires a riot api key as an environment variable. The following is how to do so using the zsh shell.

If you do not have a Riot API Key:
<ol>
<li> Head to the <a href="https://developer.riotgames.com">Riot Games Dev Site</a>. </li>
<li> Log in to an account. You will be redirected to a page where you can generate an API key.</li>
<li> Confirm you are not a robot and click "REGENERATE API KEY"</li>
<li> Click "Copy" next to the newly generated key</li>
In your terminal:
<li>Open your environment variables in a text editor by entering the following:
<pre><code> code ~/.zshrc
</code></pre></li>
<li>Then, paste the following on a new or empty line anywhere, with [your_key] being the API key you received.
<pre><code> export RIOT_API_KEY='[your_key]'
</code></pre></li>
<li>Environment variables are only loaded up when the terminal app is first booted up, thus you must either quit and reopen your terminal, or use the following code on every terminal tab you have open to refresh them:
<pre><code> source ~/.zshrc
</code></pre></li>
<li>Clone the repository and enter the project folder
<pre><code>git clone https://github.com/JPaoloMaloles/Tftraitors-frontend.git
git clone https://github.com/JPaoloMaloles/Tftraitors-backend.git
cd Tftraitors-backend
</code></pre></li>
  <li> Install Gems
  <pre><code>bundle install</code></pre>
  </li>
  <li> Set up Database
  <pre><code>rails db:reset</code></pre>
  </li>
  <li> Run Server
  <pre><code>rails server</code></pre>
  </li>
  <li>Open up a new terminal tab or window</li>
  <li>Navigate to where you cloned the frontend repository.</li>
  <li>Enter the frontend respository folder.
    <pre><code>cd Tftraitors-frontend</code></pre>
  </li>
  <li>Install Dependencies
    <pre><code>npm install
npm install axios 
npm install react-router-dom
</code></pre>
  </li>
  <li> Run App
  <pre><code>npm run dev</code></pre>
  </li>
  <li>The app can now be accessed at http://localhost:5173/ or whichever port the app is being run in. </li>
</ol>

<h1> Usage </h1>
<h1> Roadmap</h1>
