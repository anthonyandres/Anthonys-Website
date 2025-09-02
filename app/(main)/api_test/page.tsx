import React from 'react'

interface User{ // create a type for the apiResult
    id: number;
    name: string;
}

const ApiPage = async () => { // this component has to be async since we use 'await'
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // send HTTP requests using fetch(), returns 'promise' so we use 'await' to get the response
    const apiResult: User[] = await response.json();

  return (
    <>
        <h1>API Page</h1>
        <ul>
            {apiResult.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default ApiPage

// <ul></ul> HTML tag for unordered bulleted list
// <li></li> HTML tag for a list item
// the myArray.map() method calls the defined callback function on each element within an array



/*
in this page we call an placeholder api with dummy data using the fetch() function.
fetch() returns a Promise, we use await to pause execution until a resolved Promise.
We use the json() method which returns a Promise that resolves into a JavaScript object.
The JS object could be anything represented by JSON: an object, array, string, number ...
In this case, we create an object type User that contains some of the properties of the API Response


we pass the arrow function 'user' to .map() as the callback function. This function returns an HTML list item that uses the
id as an identifier (key) and the displays the name
*/