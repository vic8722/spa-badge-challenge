## SPABadge

Mr. Bouma is opening up a competitor bootcamp and wants to hire DBC students to make another version of BootBadge.

Here's the BootBadge app: http://bootbadge.herokuapp.com/cohorts/63

TodoMVC has helpful tips for features you may need: https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone

For a given cohort, each student has a page that contains "badges" with a given catchphrase.
Visitors to the site can vote for their favorite badge on each student's page. The badges should appear from most popular at the top to least popular at the bottom.

Mr. Bouma read a Medium post that said JavaScript applications are the future and anyone still using a full-stack Rails is an idiot. The post was from 2011 and extols the virtues of Backbone.js. (It's still useful!)

Because he is the client and funding the project, you need to use Backbone to make a single-page app version of BootBadge called SPABadge. SPABadge is a "bake-off" to see who should get the contract. The first version will have a single cohort: DBC teachers and mentors.

You can find the main page at spa-badge.html. Click the Sample Page link to see what a teacher's badge page should look like.

Rules
- Has to be a Backbone app
- Only XHR requests to the server are allowed except for the initial app load
- Do not use $.ajax or any other jQuery AJAX methods
- All page navigation must be done through Backbone routing
- Data should be persisted on a Rails API backend
- All DOM manipulation should take place within Backbone views
- You can use extensions to Backbone such as Marionette. But you're on your own if you do

Considerations
- Badge sorting. Look up the comparator property on Backbone.Collection
- Routing. http://myapp.com/#/amadou should show me Amadou's page for example
- Keeping track of votes. Use a cookie to manage how many times a person has voted
- Security. Escape the user's input to avoid XSS attacks
