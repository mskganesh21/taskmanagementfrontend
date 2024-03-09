import React from 'react'
import Label from '../ui/Label';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Category from './Category';
import Priority from './Priority';


const TaskForm = () => {
  return (
    <>
      <div className="bg bg-slate-500 rounded-lg p-4 max-w-[600px]">
        <Label label="Title" htmlFor="title" />
        <Input id="title" type="text" placeholder="Title" />
        <Label label="Description" htmlFor="description" />
        <Input id="description" type="textarea" placeholder="Description" />
        <Label label="Email" htmlFor="email" />
        <Category />
        <Priority />
        </div>
    </>
  )
}

export default TaskForm