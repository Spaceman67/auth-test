export default function VulcanLogin() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_APP_ID;
  const redirectURI = encodeURI(process.env.NEXT_PUBLIC_VULCAN_REDIRECT_URI);
  
  //Implement a getState logic here to validate with state later
  const state = '124452545345453'
  
  const authURL = 'https://vulcan.xyz/oauth/login/?client_id=' + clientId + '&redirect_uri=' + redirectURI + '&state=' + state;
  
  return <>
    <a href={authURL} className="bg-cyan-400 p-4 rounded">Vulcan Login</a>
  </>
}