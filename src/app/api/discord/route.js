import { redirect } from "next/navigation";

function extractCodeFromUrl(url) {
    const params = new URLSearchParams(new URL(url).search);
    return params.get('code');
}

export async function GET(request, response) {
    const code = extractCodeFromUrl(request.url);
    if (!code || code === null) {
        redirect('/');
    }

    const res = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_DISCORD_APP_ID,
            client_secret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: 'authorization_code',
            code,
            redirect_uri: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI,
            scope: 'identify'
        })
    });

    const authData = await res.json();

    const userResult = await fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${authData.token_type} ${authData.access_token}`,
        },
    });

    const {username, id} = await userResult.json();
    //Additional logic here for setting session and cookies and registering user. Then redirect to logged in page
    
    redirect('/Dashboard?id='+id+'&username='+username);
}