import React,{useState , useEffect} from 'react';
import { Link,  useLocation  } from 'react-router-dom';
import { HeaderWrapper } from './HeaderStyle';

const Header = () => {
  const [video, setVideo] = useState(true);
  const [contact, setContact] = useState(false);
  const  id  =  useLocation();
  useEffect(() => {
    if (id.pathname === '/contact') {
      setVideo(false)
      setContact(true)
    }
  }, [])
  return (
    <HeaderWrapper>
      
      <div className="link heading" style={{transform: [{rotateY: '180deg'}]}}>
        <Link to="/" onClick={() => {
          setVideo(true)
          setContact(false)
        }} >VIDEO GAMES</Link>
        {
          video && <div className="ShadowHeading">VIDEO</div>
        }
      </div>
      <div className="link heading">
        <Link to="/contact" onClick={() => {
          setVideo(false)
          setContact(true)
        }}>CONTACT</Link>
        {
          contact && <div className="ShadowHeading">CONTACT</div>
        }
      </div>
    </HeaderWrapper>
  )
}


export default Header;