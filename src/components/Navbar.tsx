import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="NavBar">
      <div className='common'>Logo</div>
      <div className='common'>Services</div>
      <div className='common'>COMET</div>
      <div className='common'>Sign In to waitlist</div>
    </nav>
  );
}