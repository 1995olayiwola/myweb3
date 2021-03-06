import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
//import fgcm from './images/fgcm.jpeg';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasketOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'
const Header = () => {
    const handleAuthentication = ()=>{
if(user){
    auth.signOut();
}
    }
    const[{basket,user},dispatch]=useStateValue()
return(
<div className="header">
    <Link to="/">
<h1 className="header__logo">FPCM</h1>
</Link>
<div className="header__search">
<input type="text"  className="header__searchInput"/>
<SearchIcon className="header__searchIcon"/>
</div>
<div className="header__nav">
    <Link to={!user && "/login"}>
<div onClick={handleAuthentication} className="header__option">
<span className="header__optionLineOne">
    Hello, Guest
</span>
<span className="header__optionLineTwo">
    {user ? 'Sign Out' : 'Sign In'}
    

</span>
</div>
</Link> 
<div className="header__option">
<span className="header__optionLineOne">
    Returns
</span>
<span className="header__optionLineTwo">
    &Orders
    
 
</span>
</div>
<div className="header__option">

<span className="header__optionLineOne">
    Your
</span>
<span className="header__optionLineTwo">
    Prime
</span>
</div>

<div className="header__optionBasket">
    <Link to="/checkout">
    <ShoppingBasketOutlined/>
    </Link>
    <span className="header__optionLineTwo header__basketCount">
    {basket?.length}
</span>
</div>
</div>
</div>



)

};
export default Header;