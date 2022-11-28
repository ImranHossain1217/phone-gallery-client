import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {

   const {data:users = [], refetch} = useQuery({
    queryKey:['users'],
    queryFn:()=> fetch('https://phone-gallery-server.vercel.app/users')
    .then(res => res.json())
   });

     const handleAdmin = id => {
        fetch(`https://phone-gallery-server.vercel.app/users/admin/${id}`,{
            method:'PUT',
            headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0){
            toast.success('Make Admin successfully.')
            refetch();
          }
        })
        .catch(err => console.error(err))
     };

     const handleDelete = id => {
       fetch(`https://phone-gallery-server.vercel.app/users/admin/${id}`,{
        method:'DELETE'
       })
       .then(res => res.json())
       .then(data => {  
        if(data.acknowledged){
          toast.success("User Deleted Successfully.");
          refetch()
        }
       })
     }
    return (
        <div className='my-5'>
            <h2 className='text-3xl md:text-5xl font-bold mb-5'>All User</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,i) => <tr key={user._id}>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {user?.role !== 'admin' && <>
        <td><button onClick={()=> handleAdmin(user._id)} className='btn btn-xs btn-primary'>make admin</button></td>
        <td><button onClick={()=> handleDelete(user._id)} className='btn btn-xs btn-error'>Delete</button></td>
        </>}
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;