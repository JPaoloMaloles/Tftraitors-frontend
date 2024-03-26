[backend repo](https://github.com/JPaoloMaloles/Tftraitors_backend)


Tftraitors is project to create a Teamfight Tactics (tft) datalytics site that compiles a player's worst comps and performances whether it be for good or evil. Riot assets acquired through the use of CommunityDragon Toolbox (CDTB).

Tftraitors is made using a React frontend and Ruby on Rails backend.

<h6>Notice: TFTraitors was designed with set 9 and 10 in mind. As set 11 has begun, as of 3/20/24, some features are non-functional as we adapt to changes in the Riot API.</h6>

<h1>Features</h1>
<ul>
  <li>User authorization and authentication </li>
  <li>Imports up to 20 of a player's most recent matches from any of Riot's 16 servers using asynchronous web requests </li>
  <li>Routes using react-router-dom </li>
  <li>A beautiful display made with javascript and bootstrap</li>
</ul>

<h1>Setup</h1>
These instructions accounts for setting up both the frontend and backend repositories.<div></div>
Use of TFTraitors currently requires a Riot API Key as an environment variable.
<p></p>
<h3>Acquiring and Implementing Riot API Keys</h3>
The following is how to do so using the zsh shell.
<ol>
<li>Head to the <a href="https://developer.riotgames.com">Riot Games Dev Site</a>. </li>
<li>Log in to an account. You will be redirected to a page where you can generate an API key.</li>
<li>Confirm you are not a robot and click "REGENERATE API KEY"</li>
<li>Click "Copy" next to the newly generated key</li>
<li>Open your environment variables in a text editor by entering the following in your terminal.
<pre><code>code ~/.zshrc
</code></pre></li>
<li>Then, paste the following on a new or empty line anywhere, with [your_key] being the API key you received.
<pre><code>export RIOT_API_KEY='[your_key]'
</code></pre></li>
<li>Environment variables are only loaded up when the terminal app is first booted up, thus you must either quit and reopen your terminal, or use the following code on every terminal tab you have open to refresh them:
<pre><code>source ~/.zshrc
</code></pre></li>
<li>Riot Api Keys expire after 24 hours, you will need to redo the above processes if you wish to run TFTraitors after 24 hours of generating a key.</li>
</ol>
<h3>Setting up TFTraitors</h3>
Now that we have a Riot API Key as an environment variable we can set up the front and back end
<ol>
<li>Clone the repository and enter the project folder
<pre><code>git clone https://github.com/JPaoloMaloles/Tftraitors-frontend.git
git clone https://github.com/JPaoloMaloles/Tftraitors-backend.git
cd Tftraitors-backend
</code></pre></li>
  <li> Install Gems
  <pre><code>bundle install</code></pre>
  </li>
  <li>Generate a master key. Close the tab that the code opens in your text editor.
<div></div>If you receive a security warning, continue to open the file. It exists as master key is part of encryption.</li>
  <pre><code>rm config/credentials.yml.enc
rails credentials:edit</code></pre>
  </li>
  <li> Set up Database
  <pre><code>rails db:reset</code></pre>
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
<h3>Looking Up Player Info</h3>
<ol>
  <li>Head to the section called "Import Summoner Info".</li> 
  <li>Click on the entry field below "Region" to reveal a dropdown menu of region tags. Select your desired region.</li>
  <li>In the entry field below Summoner Name, input the desired Summoner Name of the person you wish to search.</li>
  <li>Click "Import Summoner Info," a text saying "Importing..." will appear in red while loading the information</li>
  <li>When the player data is acquired, the text will change to "Importing... Done" in green and the summoner info will appear at the top of "SummonerInfoIndex"</li>
</ol>
<h3>Account Features</h3>
There are currently no public use features locked behind account ownage, only admin controls. 
<p></p>
Admin account credentials are located in <a href="db/seeds.rb">db/seeds.rb</a>.
<p></p>
When logged into an Admin account, users may click on "Show More" to Update and Destroy Summoner Info.

<h1>Roadmap</h1>
