# JS-Concepts
Created with CodeSandbox

--CALL APPLY BIND

It is used for borrowing function for an object
call is used for passing parameters individually
apply is used when parameters are passed in the form of an array
bind is used to keep a copy of the instance of the function

--BIND POLYFILL
How to write a custom bind function when bind method is not present.

--CURRYING

It is a technique in functional programming, TRANSFORM the FUNCTION of MULTIPLE ARGUMENTS 
into 
SEVERAL functions of a SINGLE ARGUMENT in SEQUENCE. 

Can be achieved by:
(i)Bind method
(ii)Closures

--ASYNC VS DEFER

In normal SCRIPT tag:

HTML starts loading, when it encounters a script tag the HTML stops loading and then it fetches the file mentioned in script tag and then executes it.
Once execution is done, the HTML parser starts parsing other tags

In case of SCRIPT tag with ASYNC attribute:

HTML starts loading , when it encounters script tag it fetches the file hile HTML tags also gets parsed.
Once script is fetched, the HTML parser stops parsing and then the script file gets executed.Once execution is done, the HTML parser starts parsing other tags.

In case of SCRIPT tag with DEFER attribute:

HTML starts loading , when it encounters script tag it fetches the file and keeps it with itself until HTML parsing is not done completely.

Once HTML parsing is complete, then the file starts executing.

