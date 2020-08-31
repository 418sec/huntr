# Description
while during my hunt for basic bugs, encountered a **Session Fixation** bug  [monicahq/monica](https://github.com/monicahq/monica.git). as per certain CVEs present Session Fixation is a medium to High Severity bug.

# POC
1. setup monica using docker or other means like their [online](https://app.monicahq.com) test platform. 
    * source : [LINK](https://github.com/monicahq/monica.git)
2. open an account in multiple browsers like 2 differnt private mode of chrome and firefox.
3. login to the monica account in both browsers.
4. change password of the account in one browser, mean while try to reload the same account in the other browser.
5. hence with our observation we can see that there is no new session created for the change of password.
6. since the old session of the account persists at the other browser.
# Fix Suggestion 
* introduce newer sessions to the account after any security updates.