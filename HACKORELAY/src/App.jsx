import React from 'react';
import { Button, buttonVariants } from './components/ui/button';
const App = () => {
return (
    <div className='m-10 p-10'>
<div className='text-2xl text-black'>Testing Tailwind</div>
<Button variant="destructive" className='text-white mt-4'>Testing ShadCN</Button>
</div>
)
}
export default App