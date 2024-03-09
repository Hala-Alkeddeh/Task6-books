import { NavLink } from 'react-router-dom';

let items=[
    {id:1, text: 'Home', path:'/'},
    {id:2, text: 'News', path:'/'},
    {id:3, text: 'Promotion of the mount', path:'/'},
    {id:4, text: 'Plublishs', path:'/'},
    {id:5, text: 'Subscribe to the newsletterome', path:'/'},
] ;

const NavLinks = () => {
  return (
    items.map(item => (
        <li key={item.id} ><NavLink to={item.path} className="cursor-pointer font-normal">{item.text}</NavLink></li>
    ))
  )
}

export default NavLinks