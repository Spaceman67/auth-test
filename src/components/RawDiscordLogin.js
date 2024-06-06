//Discord login without Next Auth
export default function RawDiscordLogin() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_APP_ID;
  const redirectURI = encodeURI(process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI);
  
  const authURL = 'https://discord.com/oauth2/authorize?client_id=' + clientId + '&response_type=code&redirect_uri=' + redirectURI + '&scope=identify';

  return <>
    <a href={authURL} className="bg-violet-400 p-4 rounded">Discord Login</a>
  </>
}
