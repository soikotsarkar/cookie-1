import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(){
	try{
		let token = req.cookies.get('token');
		let payload = await VerifyToken(token)
		const requestHeaders = new Headers(req.headers);
		requestHeaders.set('email',payload['email']);
		return NextResponse.next({
			request:{headers:requestHeaders},
		})

	}catch(e){
		return NextResponse.redirect(new URL('/login',req.url))
	}
}