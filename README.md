## Where is data store?
- Data is not stored anywhere except in-memory for current session. Once you refresh data will be lost

## What else can be done?
- At the moment, system has been coded simple to reflect Angular 4 understanding. Things that are missing:
	- Proper test cases
	- Real word actuarial formula
	- Angular 4 in-built in memory API calls
	- Missing validations:
		- The Main Limit should be >= Main Retention
		- Table headers should reflect the label of fields
	- Proper API call, to back-end system to do calculation and return data.
