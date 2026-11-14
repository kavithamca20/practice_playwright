import{test,expect} from '@playwright/test'
test("API get request",async({request})=>
{
const responsePost=await request.post('https://jsonplaceholder.typicode.com/users',
    {
   data: {
    name: 'Book Title',
     city: 'John Doe',
  }
}); 
await expect(responsePost.status()).toBe(201);
    
const response=await request.get('https://jsonplaceholder.typicode.com/users');

await expect(response.status()).toBe(200);
const data=await response.json();
console.log(data);




})