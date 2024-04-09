import { CheckCookieAuth } from "./utility/MiddlewareUtility";

export async function middleware(req){
	if(req.nextUrl.pathname.startsWith('/dashboard')){
		return CheckCookieAuth(req);
	}
}