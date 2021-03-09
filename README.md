# Roster Management for Kill Team

## Battlescribe data

The raw battlescribe data is not included in the git repo for this project. A collection of utility ndoe scrtipts have been included to help you fetch latest data from Battlescribe if you wish to update the app.

Use `npm run fetchRulebook` from the root directory to download the latest data from Battlescribe's github repository and convert to local JSON files.

The fetchRulebook script will generate one JSON file for each faction, and save the data to _./battlesribe/json/_.

The script does not update or overwrite any data in the /src directory -- this allows you to check the data for breaking changes and decide whether or not you want to update the application data.
