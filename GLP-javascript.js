
//hide the CTRL-K option shown in the Global Landing Page
$(".rm-SearchToggle-shortcut").hide();

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    // hide SSO login link if the user is logged in
    hideSSOLinkBasedOnLoginStatus();
  }, 800); // 1-second timeout
});

// Hide SSO login link if the user is logged in
function hideSSOLinkBasedOnLoginStatus() {
  var hubMeScript = document.getElementById("hub-me");
  var jsonData = JSON.parse(hubMeScript.dataset.json);

  // Select all links on the page with the specified href
  var ssoLoginLinks = document.querySelectorAll('a[href="https://dash.readme.com/login/sso/cuscal-enterprise-parent-clone-teammates"]');
	
  // Hide the SSO login links if the user is logged in
  if (ssoLoginLinks && jsonData.loggedIn === true) {
    ssoLoginLinks.forEach(function(link) {
      link.style.display = 'none';
    });
  }
}

//hide or show private link based on permissions
document.addEventListener("DOMContentLoaded", function () {
  hideButtonOnPageLoad();
  showButtonBasedOnPermission();
});

//Set the link to display none initially
function hideButtonOnPageLoad() {
  var styleElement = document.createElement("style");
  styleElement.innerHTML = ".flex-column-reverse { display: none; }";
  document.head.appendChild(styleElement);
}

//interval count
function showButtonBasedOnPermission() {
  var intervalCount = 0;
  var maxIntervalCount = 5;

  //parse json data to confirm user is logged in
  function addStylesheet() {
    var hubMeScript = document.getElementById("hub-me");
    var jsonData = JSON.parse(hubMeScript.dataset.json);

    //Set the link to display flex so it is now visible to anyone logged in
    if (jsonData.loggedIn !== true) {
      var styleElement = document.createElement("style");
      styleElement.innerHTML = ".flex-column-reverse { display: flex !important; }";
      document.head.appendChild(styleElement);
    }
  }

  //ensure it fires
  function runInterval() {
    addStylesheet();
    intervalCount++;

    if (intervalCount >= maxIntervalCount) {
      clearInterval(intervalId);
    }
  }

  addStylesheet();
  var intervalId = setInterval(runInterval, 800);
}


// Script to Add Custom Layer on the Changelog page.

$(window).on('pageLoad', function(e, state) {
  isPageChangelog();
});

function isPageChangelog() {
  if (document.location.href == 'https://cuscal-enterprise-parent.readme.io/hub/changelog') {
    addChangelogHeader();
  }
  else if (document.location.href == 'https://www.developerhub.cuscal.com.au/hub/changelog') {
    addChangelogHeader();
  }
  else {
    removeChangelogHeader();
  }
}

function addChangelogHeader() {
  console.log('Adding changelog banner...');
  
  // Check if the banner already exists
  if ($('.changelog-banner').length <= 0) {
    $('.rm-Changelog').before(`
      <div class="changelog-banner" style="border-bottom: 1px solid #ddd">
        <h1 style="text-align: center">Apps Framework Changelog</h1>
        <div class="excerpt">
          <div class="markdown-body">
            <p style="text-align: center; padding-bottom: 20px">
              You can track any changes in the framework by subscribing to the apps framework changelog 
              <a href="https://www.developerhub.cuscal.com.au/hub/changelog.rss" target="_blank">RSS feed</a> using your application of choice 
              (<a href="https://slack.com/help/articles/218688467-Add-RSS-feeds-to-Slack" target="_blank" rel="nofollow">Slack</a>, 
              <a href="https://support.microsoft.com/en-us/office/subscribe-to-an-rss-feed-73c6e717-7815-4594-98e5-81fa369e951c" target="_blank" rel="nofollow">Outlook</a>, 
              <a href="https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp?hl=en" target="_blank" rel="nofollow">Chrome extension</a>, etc.). 
              <br>
              Looking for updates to the API instead? Check out our 
              <a href="https://www.developerhub.cuscal.com.au/hub/changelog" target="_blank">API changelog</a>.
            </p>
          </div>
        </div>
      </div>
    `);
  }
}

function removeChangelogHeader() {
  console.log('Removing changelog banner...');
  $('.changelog-banner').remove();
}


// Do not Change Below Code ...................
// This script runs when the page has fully loaded
// Function to update the text content
function updateHeading() {
    const headings = document.querySelectorAll('h2.Sidebar-headingTRQyOa2pk0gh.rm-Sidebar-heading');
    headings.forEach(heading => {
        if (heading.textContent.trim() === 'B2B CustomerAdmin API') {
            heading.textContent = 'DATA HOLDER V1';
        }
    });
}

// Observe the document for changes
const observer = new MutationObserver(() => {
    updateHeading(); // Reapply the text update
});

// Start observing changes after DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
    updateHeading(); // Apply the change initially

    // Observe the entire document for added/modified nodes
    observer.observe(document.body, {
        childList: true, // Monitor child nodes
        subtree: true    // Monitor all descendants
    });
});
// Do not Change Above Code ...................