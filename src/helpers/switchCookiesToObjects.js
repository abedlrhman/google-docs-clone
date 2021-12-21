const cookieToken = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => (
    {...accumulator, [key.trim()]: decodeURIComponent(value)}
  ),{})



export default cookieToken