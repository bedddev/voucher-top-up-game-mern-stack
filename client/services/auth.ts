import axios from "axios";
import callApi from "../config/api";
import { SignInTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function setSignUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;
  return callApi({
    url,
    method: "POST",
    data,
  });
}

export async function setSignIn(data: SignInTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;
  return callApi({
    url,
    method: "POST",
    data,
  });
}
