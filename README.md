
# React Filter Element




> Use this hook to easily filter out your html element within a parent element.

Installation
                    
> `$ npm i react-filter-element`

###### Using ->

###### Import the module


Import `useFilterElement ` hook from the module

```javascript
import React from 'react';
import useFilterElement from 'react-filter-element';
```

You also need to import `useRef` hook from react to target the parent element

```javascript
import React,{useRef} from 'react';
import useFilterElement from 'react-filter-element';
```

Next you need to use the `useRef` hook  to target the element and pass the element when calling the `useFilterElement` hook

```javascript
const parent = useRef(null);
const [filter,items] = useFilterElement(parent); // calling the hook with the parent
 

<div  ref={parent}></div> // html
```
you will get back `filter` and `items` from the hook. ` filter` refers to the main function to use the filter and ` items`  contains the childs 

Now call the function with a key name as argument and  set the key name as a class of the childs ( you can also pass `*` as  key , it will show every child)

	<button className="btn filterBtn" onClick={() => filter('bird')}>Birds</button>
	<button className="btn filterBtn" onClick={() => filter('fish')}>Fish</button>
	
	
	<div className=" bird">
		<h1>Bird</h1>
	</div>
	<div className=" fish">
		<h1>Fish</h1>
	</div>
	
	


full sample code


```javascript
import React,{useRef} from 'react';
import useFilterElement from 'react-filter-element';

const parent = useRef(null);
const [filter,items] = useFilterElement(parent); // calling the hook with the parent


// html

	<button className="btn filterBtn" onClick={() => filter('bird')}>Birds</button>
	<button className="btn filterBtn" onClick={() => filter('fish')}>Fish</button>
	
<div  ref={parent}> 
		<div className="bird">
			<h1>Bird</h1>
		</div>
		<div className="fish">
			<h1>Fish</h1>
		</div>
</div>
```
######  Live working demo [here](https://react-filter-element.netlify.app/ "here")
