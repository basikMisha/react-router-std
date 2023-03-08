import { Link, useMatch } from 'react-router-dom';

function CustomLink({children, to, ...props}) {
    const match = useMatch(to);
    // console.log({match})
  return (
    <Link 
        to={to} 
        {...props}
          style={
              {
                  color: match ? 'green' : 'white',
              }
          }
    >
        {children}
        
    </Link> 
  )
}

export default CustomLink